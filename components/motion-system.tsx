"use client"
import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import Tilt from "react-parallax-tilt"
import Lenis from "lenis"

const MotionContext = createContext({ enabled: false, reduced: false, paused: false, toggle: () => {} })
export const usePortfolioMotion = () => useContext(MotionContext)
export function MotionSystem({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(true)
  const [fine, setFine] = useState(false)
  const progress = useMotionValue(0)
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const cursorX = useSpring(x, { stiffness: 250, damping: 32 }), cursorY = useSpring(y, { stiffness: 250, damping: 32 })
  const [interactive, setInteractive] = useState(false)
  const [cursorLabel,setCursorLabel]=useState("")
  const enabled = !reduced && !paused
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)"), pointer = matchMedia("(pointer: fine)")
    const update = () => { setReduced(preference.matches); setFine(pointer.matches) }
    update(); preference.addEventListener("change", update); pointer.addEventListener("change", update)
    return () => { preference.removeEventListener("change", update); pointer.removeEventListener("change", update) }
  }, [])
  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off"
    document.documentElement.dataset.motionPaused = String(paused)
    document.documentElement.dataset.reducedMotion = String(reduced)
    return () => { delete document.documentElement.dataset.motion; delete document.documentElement.dataset.motionPaused; delete document.documentElement.dataset.reducedMotion }
  }, [enabled, paused, reduced])
  useEffect(() => {
    const update = () => {
      progress.set(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight))
      const timeline = document.querySelector<HTMLElement>(".experience-track")
      if (timeline) { const r = timeline.getBoundingClientRect(); timeline.style.setProperty("--timeline-progress", String(enabled ? Math.max(0, Math.min(1, (innerHeight * .75 - r.top) / r.height)) : 1)) }
    }
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update)
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update) }
  }, [enabled, progress])
  useEffect(() => {
    if (!enabled || !fine) return
    const lenis = new Lenis({ duration: 1.35, smoothWheel: true, syncTouch: false, anchors: { offset: -96 } })
    let frame = 0
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    const pointer = (event: PointerEvent) => { x.set(event.clientX); y.set(event.clientY); setInteractive(Boolean((event.target as Element).closest("a,button,.continuous-viewport,.depth-card")));setCursorLabel((event.target as Element).closest("a,button")?"OPEN":(event.target as Element).closest(".continuous-viewport")?"SCROLL":"") }
    window.addEventListener("pointermove", pointer, { passive: true })
    return () => { cancelAnimationFrame(frame); lenis.destroy(); window.removeEventListener("pointermove", pointer) }
  }, [enabled, fine, x, y])
  useEffect(()=>{
    if(!enabled)return
    const visuals=document.querySelectorAll<HTMLElement>('.neural-stage,.about-portrait,.skill-universe,.project-slideshow,.experience-card,.medal-scene,.award-grid,.contact-globe,.section-heading,.contact-copy')
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>entry.target.classList.toggle('cinematic-visible',entry.isIntersecting))},{threshold:.08,rootMargin:'0px 0px -25px 0px'})
    visuals.forEach(el=>{el.classList.add('cinematic-reveal');observer.observe(el)})
    return()=>{observer.disconnect();visuals.forEach(el=>el.classList.remove('cinematic-reveal','cinematic-visible'))}
  },[enabled])
  return <MotionContext.Provider value={{ enabled, reduced, paused, toggle: () => setPaused(v => !v) }}>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    {fine && enabled && <motion.div className={`cursor-aura ${interactive ? "is-interactive" : ""}`} style={{ left: cursorX, top: cursorY }} aria-hidden="true"><span>{cursorLabel}</span></motion.div>}
    {fine && enabled && <motion.div className="cursor-dot" style={{left:x,top:y}} aria-hidden="true"/>}
    {children}
    <button className="motion-toggle" aria-pressed={paused} onClick={() => setPaused(v => !v)}>{paused ? "▶ Resume motion" : "Ⅱ Pause motion"}</button>
  </MotionContext.Provider>
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null), visible = useInView(ref, { once: true, amount: .12 })
  const { enabled } = usePortfolioMotion()
  return <motion.div ref={ref} className={className} initial={false} animate={!enabled || visible ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: .6, y: 24, rotateY: -6 }} transition={{ duration: enabled ? .65 : 0, delay: enabled ? delay : 0, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}
export function DepthCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { enabled } = usePortfolioMotion()
  return <Tilt className={`depth-card ${className}`} tiltEnable={enabled} tiltMaxAngleX={5} tiltMaxAngleY={6} perspective={1000} transitionSpeed={700} glareEnable={enabled} glareMaxOpacity={.09} glareColor="#00e5ff" glarePosition="all" glareBorderRadius="18px" gyroscope={false}>{children}</Tilt>
}
export function MagneticLink({ children, href, className = "", external = false }: { children: ReactNode; href: string; className?: string; external?: boolean }) {
  const { enabled } = usePortfolioMotion()
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 350, damping: 22 }), sy = useSpring(y, { stiffness: 350, damping: 22 })
  return <motion.a href={href} className={className} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} style={{ x: enabled ? sx : 0, y: enabled ? sy : 0 }} onPointerMove={e => { if (!enabled || e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * .12); y.set((e.clientY - r.top - r.height / 2) * .15) }} onPointerLeave={() => { x.set(0); y.set(0) }}>{children}</motion.a>
}
export function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null), visible = useInView(ref, { once: true })
  const { enabled } = usePortfolioMotion()
  const [display, setDisplay] = useState(value)
  const completed = useRef(false)
  useEffect(() => {
    if (!visible || !enabled || completed.current) { setDisplay(value); return }
    completed.current = true
    let frame = 0, start = 0
    const tick = (time: number) => { if (!start) start = time; const p = Math.min((time - start) / 1200, 1); setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3)))); if (p < 1) frame = requestAnimationFrame(tick) }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, enabled, value])
  return <span ref={ref} aria-label={`${prefix}${value.toLocaleString("en-IN")}${suffix}`}><span aria-hidden="true">{prefix}{display.toLocaleString("en-IN")}{suffix}</span></span>
}

