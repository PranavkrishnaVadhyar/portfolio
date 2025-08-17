import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "DifferentByte",
      role: "AI Engineer",
      period: "Sept 2024 - Dec 2024",
      location: "Kochi, Kerala",
      impact:
      "[Developed scalable FastAPI backend ensuring high performance and reliability. Implemented CRUD operations in QdrantDB, developed and deployed LangChain and CrewAI agents.]",
      technologies: ["Python", "Langchain", "FastAPI", "AWS", "CrewAI"],
    },
    {
      company: "[Company/Organization 2]",
      role: "AI/ML Engineer",
      period: "May 2023 - Jan 2024",
      location: "Remote",
      impact:
        "[Led 4-member AI team to develop and deploy client- focused tech solutions. Executed strategies and optimized NLP/image workflows, increasing revenue by Rs.5 lakhs.]",
      technologies: ["Python", "Scikit Learn", "Flask", "Tensorflow", "Pandas"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <Card className="bg-card border-border md:ml-16 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground font-sans">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building className="h-4 w-4" />
                            <span className="font-serif">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed font-serif">{exp.impact}</p>

                      <div>
                        <h4 className="font-semibold text-sm mb-2 font-sans">Key Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
