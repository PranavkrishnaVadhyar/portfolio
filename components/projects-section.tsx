import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      name: "Interview360",
      role: "ML/Backend Engineer",
      description:
        "Application to help users prepare for technical interviews through automated interviews.",
      techStack: ["Retrieval Augmented Generation", "OpenAI API", "ChromaDB", "Flask"],
      image: "/machine-learning-dashboard.png",
      link: "https://github.com/PranavkrishnaVadhyar/Interview360_RAG",
    },
    {
      name: "FirstaidPro",
      role: "ML/Backend Engineer",
      description:
        "AI enabled first aid with automatic wound identification and real time treatment assistance.",
      techStack: ["Python", "Tensorflow", "Flask", "MobileNet V3", "Flutter"],
      image: "/backend-architecture.png",
      link:"https://github.com/PranavkrishnaVadhyar/FirstaidproV2",
    },
    {
      name: "Gen-O-Sys",
      role: "ML/Backend Engineer",
      description:
        "Enterprise application that optimizes Hospital management systems (HMS) using Gen-AI.",
      techStack: ["Python", "Langchain", "Flask", "MySQL", "HTML/CSS"],
      image: "/computer-vision-interface.png",
      link:'https://github.com/PranavkrishnaVadhyar/Gen-o-Sys-SlashKey3.0',
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
            <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <Link href={project.link || "#"}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.role}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-sans">{project.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed font-serif">{project.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 font-sans">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="h-4 w-4 mr-2" />
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
