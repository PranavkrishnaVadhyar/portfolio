"use client"
import content from "@/data/portfolio.json"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion"
import { DepthCard, Reveal, usePortfolioMotion } from "@/components/motion-system"
import { SectionHeading } from "@/components/section-heading"
function Word({ word, progress, start, end }: {word:string;progress:MotionValue<number>;start:number;end:number}) { const opacity=useTransform(progress,[start,end],[.36,1]);const {enabled}=usePortfolioMotion();return <motion.span style={{opacity:enabled?opacity:1}}>{word} </motion.span> }
function ScrollWords({text}:{text:string}) { const ref=useRef<HTMLParagraphElement>(null);const {scrollYProgress}=useScroll({target:ref,offset:['start .9','end .5']});const words=text.split(' ');return <p ref={ref} className="scroll-words">{words.map((word,i)=><Word key={i} word={word} progress={scrollYProgress} start={i/words.length} end={(i+1)/words.length}/>)}</p> }
function PortraitPhoto() {
 const ref=useRef<HTMLDivElement>(null), visible=useInView(ref,{once:true,amount:.25})
 const {enabled}=usePortfolioMotion()
 return <motion.div ref={ref} className="portrait-image" initial={false} animate={{clipPath:!enabled||visible?'inset(0% 0% 0% 0% round 9px)':'inset(8% 0% 8% 0% round 9px)'}} transition={{duration:enabled?.9:0,ease:[.22,1,.36,1]}}><img src={content.personal.photo.src} width={content.personal.photo.width} height={content.personal.photo.height} alt={content.personal.photo.alt} loading="lazy"/></motion.div>
}
export function AboutSection(){return <section id="about" className="section-shell about-section"><SectionHeading {...content.about.heading}/><div className="about-layout"><Reveal className="about-portrait"><DepthCard className="portrait-card"><div className="portrait-orbit" aria-hidden="true"/><PortraitPhoto/><div className="portrait-caption"><span className="status-light"/><span>{content.personal.photo.caption}</span></div><span className="portrait-corner" aria-hidden="true">{content.personal.photo.badge}</span></DepthCard></Reveal><Reveal className="about-copy"><ScrollWords text={content.about.intro}/><p>{content.about.description}</p><div className="about-flow" aria-label={content.about.flowLabel}>{content.about.flow.map((item,i)=><span key={item}>{i>0&&<i/>}{item}</span>)}</div><div className="about-note"><span>{content.about.basedLabel}</span><strong>{content.personal.location}</strong><span>{content.about.thinkingLabel}</span><strong>{content.about.thinking}</strong></div></Reveal></div><div className="section-dust" aria-hidden="true"/></section>}
