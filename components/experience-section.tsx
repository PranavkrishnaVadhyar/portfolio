import content from "@/data/portfolio.json"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion-system"
import { SectionHeading } from "@/components/section-heading"
export function ExperienceSection() {
  const experiences = content.experience.items

 return <section id="experience" className="section-shell experience-section"><SectionHeading {...content.experience.heading}/><div className="experience-track"><div className="pipeline-line" aria-hidden="true"><i/></div>{experiences.map((exp,index)=><div className="experience-row" key={exp.company}><div className="experience-node" aria-hidden="true"><span>{String(index+1).padStart(2,'0')}</span></div><div className="experience-date"><span>{exp.period}</span><small>{exp.location}</small></div><Reveal className="experience-card" delay={index*.06}><div className="experience-card-top"><span className="mono-label">{exp.company}</span><ArrowUpRight size={17}/></div><h3>{exp.role}</h3><p>{exp.impact}</p><div className="tech-tags">{exp.technologies.map(tech=><span key={tech}>{tech}</span>)}</div></Reveal></div>)}</div></section>
}
