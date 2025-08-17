import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "[Company/Organization 1]",
      role: "Senior ML Engineer",
      period: "2022 - Present",
      location: "Remote",
      impact:
        "[Impact placeholder - Led development of ML infrastructure serving 5M+ users, implemented automated model deployment pipeline, mentored junior engineers]",
      technologies: ["Python", "TensorFlow", "Kubernetes", "AWS", "MLOps"],
    },
    {
      company: "[Company/Organization 2]",
      role: "Backend Engineer",
      period: "2020 - 2022",
      location: "San Francisco, CA",
      impact:
        "[Impact placeholder - Built scalable API architecture handling 100K+ daily requests, optimized database queries reducing response time by 50%, collaborated with cross-functional teams]",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "GraphQL"],
    },
    {
      company: "[Company/Organization 3]",
      role: "Software Engineer",
      period: "2018 - 2020",
      location: "New York, NY",
      impact:
        "[Impact placeholder - Developed data processing pipelines, implemented RESTful APIs, contributed to open-source projects, participated in code reviews and technical discussions]",
      technologies: ["Python", "Django", "PostgreSQL", "AWS", "Git"],
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
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block animate-pulse-slow"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block hover:scale-125 transition-transform duration-300 animate-pulse"></div>

                <Card
                  className="bg-card border-border md:ml-16 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group animate-fade-in-right opacity-0 [animation-fill-mode:forwards]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground font-sans group-hover:text-primary transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="font-serif">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 group-hover:animate-bounce" />
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
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                              style={{ animationDelay: `${index * 0.2 + techIndex * 0.1}s` }}
                            >
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
