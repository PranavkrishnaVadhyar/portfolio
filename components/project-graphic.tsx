"use client"
import { FileCheck2, AudioLines, HeartPulse, ShieldCheck, ScanLine, Network, Braces, ArrowUpRight } from "lucide-react"
export type ProjectKind = 'applyr' | 'interview' | 'firstaid' | 'pramaan'
export function ProjectGraphic({kind}:{kind:ProjectKind}) {
 const Icon={applyr:FileCheck2,interview:AudioLines,firstaid:HeartPulse,pramaan:ShieldCheck}[kind]
 return <div className={`project-art art-${kind}`} aria-hidden="true"><div className="art-grid"/><div className="art-orbit"/><div className="art-orbit orbit-b"/><svg className="art-connections" viewBox="0 0 400 280"><path d="M60 140H145L200 70 255 140H340 M60 140l140 75 140-75 M200 70v145"/><circle className="art-packet" r="3"/></svg><div className="art-deck"><div className="art-panel panel-back"><Network size={25}/><span>{kind==='pramaan'?'OCR / EVIDENCE':'INPUT / CONTEXT'}</span><i/><i/></div><div className="art-panel panel-main"><span className="art-panel-dots">● ● ●</span><Icon size={62} strokeWidth={1.2}/><div className="art-data-lines"><i/><i/><i/></div><span className="art-panel-label">{kind==='applyr'?'APPLICATION ENGINE':kind==='interview'?'CONVERSATION ENGINE':kind==='firstaid'?'VISION / ASSISTANCE':'DOCUMENT INTELLIGENCE'}</span>{kind==='firstaid'&&<span className="art-scanner"/>}</div><div className="art-panel panel-front">{kind==='firstaid'?<ScanLine size={24}/>:<Braces size={24}/>}<span>{kind==='pramaan'?'RISK / REPORT':'OUTPUT / ACTION'}</span><ArrowUpRight size={18}/></div></div><span className="art-node node-a"/><span className="art-node node-b"/></div>
}

