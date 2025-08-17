import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      name: "[Project Name 1]",
      role: "ML Engineer",
      description:
        "[Project description placeholder - Built an end-to-end machine learning pipeline for real-time recommendation system serving 1M+ users]",
      techStack: ["Python", "TensorFlow", "FastAPI", "Redis", "AWS"],
      image: "/machine-learning-dashboard.png",
    },
    {
      name: "[Project Name 2]",
      role: "Backend Engineer",
      description:
        "[Project description placeholder - Designed and implemented scalable microservices architecture handling 10K+ requests per second]",
      techStack: ["Node.js", "PostgreSQL", "Docker", "Kubernetes", "GraphQL"],
      image: "/backend-architecture.png",
    },
    {
      name: "[Project Name 3]",
      role: "Full-Stack ML Engineer",
      description:
        "[Project description placeholder - Developed computer vision application for automated quality control in manufacturing]",
      techStack: ["PyTorch", "OpenCV", "Django", "PostgreSQL", "Docker"],
      image: "/computer-vision-interface.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 hover:rotate-1 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 animate-float">
                  <Badge
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {project.role}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-sans group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed font-serif">{project.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 font-sans">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                          style={{ transitionDelay: `${techIndex * 0.05}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
