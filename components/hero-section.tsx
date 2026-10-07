import { ArrowDown, ArrowUpRight, Github } from "lucide-react"
import { NeuralHero } from "@/components/neural-hero"
import { MagneticLink } from "@/components/motion-system"
export function HeroSection() {
 const name="B Pranavkrishna"
 return <section id="home" className="hero section-shell">
  <div className="hero-eyebrow"><span className="status-light"/> OPEN TO OPPORTUNITIES <span className="hero-location">KOCHI, INDIA · 09.93° N</span></div>
  <div className="hero-layout"><div className="hero-copy"><p className="mono-label">HELLO WORLD. I’M</p><h1 aria-label="B Pranavkrishna Vadhyar"><span className="name-reveal" aria-hidden="true">{[...name].map((letter,i)=><span key={i} style={{animationDelay:`${i*45}ms`}}>{letter}</span>)}</span><span className="name-surname">Vadhyar<span className="cyan">_</span></span></h1><div className="hero-role"><span/> ML &amp; Backend Engineer</div><p className="hero-description">I connect <strong>intelligence</strong> with infrastructure.<br/>Building AI systems that think deeper,<br className="desktop-break"/> and backends that take them further.</p><div className="hero-actions"><MagneticLink className="button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></MagneticLink><a className="button-quiet" href="https://github.com/PranavkrishnaVadhyar" target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div></div><NeuralHero/></div>
  <div className="hero-footer"><a href="#about"><ArrowDown size={15}/> SCROLL TO DISCOVER</a><div className="hero-specialties"><span>GENERATIVE AI</span><i/><span>RAG SYSTEMS</span><i/><span>BACKEND ENGINEERING</span></div><span className="hero-index">01 — 07</span></div>
 </section>
}
