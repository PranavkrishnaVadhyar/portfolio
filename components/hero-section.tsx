import content from "@/data/portfolio.json"
import { ArrowDown, ArrowUpRight, Github } from "lucide-react"
import { NeuralHero } from "@/components/neural-hero"
import { MagneticLink } from "@/components/motion-system"
export function HeroSection() {
 const name=content.personal.nameLine1
 return <section id="home" className="hero section-shell">
  <div className="hero-eyebrow"><span className="status-light"/> {content.hero.availability} <span className="hero-location">{content.personal.heroLocation}</span></div>
  <div className="hero-layout"><div className="hero-copy"><p className="mono-label">{content.hero.greeting}</p><h1 aria-label={content.personal.name}><span className="name-reveal" aria-hidden="true">{[...name].map((letter,i)=><span key={i} style={{animationDelay:`${i*45}ms`}}>{letter}</span>)}</span><span className="name-surname">{content.personal.nameLine2}<span className="cyan">_</span></span></h1><div className="hero-role"><span/> {content.personal.role}</div><p className="hero-description">{content.hero.description.before}<strong>{content.hero.description.emphasis}</strong>{content.hero.description.after}{content.hero.description.lines.map((line,i)=><span key={i}><br/>{line}</span>)}</p><div className="hero-actions"><MagneticLink className="button-primary" href="#projects">{content.hero.cta} <ArrowUpRight size={17}/></MagneticLink><a className="button-quiet" href={content.contact.links.find(link=>link.id==='github')?.href} target="_blank" rel="noopener noreferrer"><Github size={17}/>{ content.contact.links.find(link=>link.id==='github')?.label }<ArrowUpRight size={14}/></a></div></div><NeuralHero/></div>
  <div className="hero-footer"><a href="#about"><ArrowDown size={15}/> {content.hero.scroll}</a><div className="hero-specialties">{content.hero.specialties.map((item,i)=><span key={item}>{i>0&&<i/>}{item}</span>)}</div><span className="hero-index">{content.hero.index}</span></div>
 </section>
}
