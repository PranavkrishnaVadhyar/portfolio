import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Server, Database, Cloud } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "ML/DL Frameworks",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face", "MLflow"],
      color: "bg-chart-2",
    },
    {
      title: "Backend Tools",
      icon: Server,
      skills: ["Python", "Node.js", "FastAPI", "Django", "Express.js", "GraphQL"],
      color: "bg-chart-1",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Vector DBs", "ClickHouse"],
      color: "bg-chart-3",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
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
              <Card
                key={index}
                className="bg-card border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-slow`}
                  >
                    <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-lg font-sans group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 animate-slide-in-left opacity-0 [animation-fill-mode:forwards]"
                        style={{ animationDelay: `${index * 0.15 + skillIndex * 0.05}s` }}
                      >
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
