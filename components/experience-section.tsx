import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion-system"
import { SectionHeading } from "@/components/section-heading"
export function ExperienceSection() {
  const experiences = [
    {
      company: "Hashroot",
      role: "AI Consultant",
      period: "Nov 2025 - Present",
      location: "Kochi, Kerala",
      impact: "Working on implementing AI features into Hashroot's inhouse applications",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Langchain", "OpenAI"],
    },
    {
      company: "Feathersoft",
      role: "AI/ML Engineer",
      period: "May 2025 - Oct 2025",
      location: "Kochi, Kerala",
      impact:
        "Led end-to-end development and optimization of production-grade RAG systems by integrating Neo4j graph databases, hybrid vector retrievers (Chroma/Weaviate), prompt-engineered SQL generation, and scalable medical chatbot architectures across research and deployment environments.",
      technologies: ["Python", "Langchain", "Langgraph", "ChromaDB", "Neo4j", "OpenAI", "Flask"],
    },
    {
      company: "DifferentByte",
      role: "AI Engineer",
      period: "Sept 2024 - Dec 2024",
      location: "Kochi, Kerala",
      impact:
        "Developed scalable FastAPI backend ensuring high performance and reliability. Implemented CRUD operations in QdrantDB, developed and deployed LangChain and CrewAI agents.",
      technologies: ["Python", "Langchain", "FastAPI", "AWS", "CrewAI"],
    },
    {
      company: "Neuflo Solutions",
      role: "AI/ML Engineer",
      period: "May 2023 - Jan 2024",
      location: "Remote",
      impact:
        "Led 4-member AI team to develop and deploy client- focused tech solutions. Executed strategies and optimized NLP/image workflows, increasing revenue by Rs.5 lakhs.",
      technologies: ["Python", "Scikit Learn", "Flask", "Tensorflow", "Pandas"],
    },
  ]

 return <section id="experience" className="section-shell experience-section"><SectionHeading index="04" label="THE EXPERIENCE GRAPH" title={<>Every role.<br/><span className="text-gradient">Another connection.</span></>}>From early experiments to production AI. A continuous learning pipeline.</SectionHeading><div className="experience-track"><div className="pipeline-line" aria-hidden="true"><i/></div>{experiences.map((exp,index)=><div className="experience-row" key={exp.company}><div className="experience-node" aria-hidden="true"><span>{String(index+1).padStart(2,'0')}</span></div><div className="experience-date"><span>{exp.period}</span><small>{exp.location}</small></div><Reveal className="experience-card" delay={index*.06}><div className="experience-card-top"><span className="mono-label">{exp.company}</span><ArrowUpRight size={17}/></div><h3>{exp.role}</h3><p>{exp.impact}</p><div className="tech-tags">{exp.technologies.map(tech=><span key={tech}>{tech}</span>)}</div></Reveal></div>)}</div></section>
}
