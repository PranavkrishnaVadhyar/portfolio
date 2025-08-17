import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Server, Database, Cloud } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "ML/DL Frameworks",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Hugging Face", "Langchain", "CrewAI"],
      color: "bg-chart-2",
    },
    {
      title: "Languages & Backend Tools",
      icon: Server,
      skills: ["Python", "Java", "C", "Flask", "FastAPI"],
      color: "bg-chart-1",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "Redis", "MySQL", "Chroma DB", "Qdrant DB"],
      color: "bg-chart-3",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Git"],
      color: "bg-chart-4",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-sans">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
