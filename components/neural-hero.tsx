"use client"
import dynamic from "next/dynamic"
import { useCallback, useEffect, useRef, useState } from "react"
import { usePortfolioMotion } from "@/components/motion-system"
const Canvas = dynamic(()=>import("@/components/neural-canvas"),{ssr:false})
export function NeuralHero() {
 const host=useRef<HTMLDivElement>(null)
 const [active,setActive]=useState(false),[compact,setCompact]=useState(false),[allowed,setAllowed]=useState(false),[ready,setReady]=useState(false)
 const {enabled}=usePortfolioMotion()
 const onReady=useCallback((value:boolean)=>setReady(value),[])
 useEffect(()=>{const connection=(navigator as Navigator & {connection?:{saveData?:boolean}}).connection;setAllowed(!connection?.saveData);setCompact(innerWidth<768);const media=matchMedia('(max-width:767px)');const update=()=>setCompact(media.matches);media.addEventListener('change',update);const observer=new IntersectionObserver(([entry])=>setActive(entry.isIntersecting&&!document.hidden),{threshold:.05});if(host.current)observer.observe(host.current);const visibility=()=>{if(host.current){const r=host.current.getBoundingClientRect();setActive(!document.hidden&&r.bottom>0&&r.top<innerHeight)}};document.addEventListener('visibilitychange',visibility);return()=>{observer.disconnect();media.removeEventListener('change',update);document.removeEventListener('visibilitychange',visibility)}},[])
 return <div ref={host} className="neural-stage" data-ready={ready} data-active={active} aria-hidden="true"><div className="neural-fallback"><svg viewBox="0 0 600 400">{Array.from({length:5},(_,l)=>Array.from({length:7},(_,j)=>{const x=70+l*115,y=80+j*40;return <g key={`${l}-${j}`}>{l<4&&[0,1,-1].map(d=><line key={d} x1={x} y1={y} x2={x+115} y2={80+((j+d+7)%7)*40} />)}<circle cx={x} cy={y} r={j%3===0?5:3}/></g>}))}</svg></div>{allowed&&<Canvas active={active} moving={enabled} compact={compact} onReady={onReady}/>}<span className="graph-annotation graph-input">INPUT / IDEAS</span><span className="graph-annotation graph-output">OUTPUT / IMPACT</span><div className="network-caption"><i/> NEURAL FIELD <span>MOVE TO INTERACT</span></div></div>
}

