import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, Users } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      type: "Award",
      icon: Award,
      title: "[Award/Recognition 1]",
      description: "[Award description placeholder - Best Innovation Award for ML-powered recommendation system]",
      year: "2023",
      organization: "[Organization Name]",
      color: "bg-chart-2",
    },
    {
      type: "Recognition",
      icon: Trophy,
      title: "[Award/Recognition 2]",
      description: "[Recognition placeholder - Top Performer Award for exceptional backend architecture design]",
      year: "2022",
      organization: "[Organization Name]",
      color: "bg-chart-3",
    },
    {
      type: "Achievement",
      icon: Star,
      title: "[Award/Recognition 3]",
      description:
        "[Achievement placeholder - Published research paper on distributed ML systems at top-tier conference]",
      year: "2022",
      organization: "[Conference/Journal Name]",
      color: "bg-chart-4",
    },
    {
      type: "Leadership",
      icon: Users,
      title: "[Award/Recognition 4]",
      description: "[Leadership placeholder - Led cross-functional team of 12 engineers in successful product launch]",
      year: "2021",
      organization: "[Organization Name]",
      color: "bg-chart-5",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {achievement.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground font-mono">{achievement.year}</span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2 font-sans">{achievement.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-serif">{achievement.description}</p>
                      </div>

                      <div className="pt-2">
                        <span className="text-sm font-medium text-primary">{achievement.organization}</span>
                      </div>
                    </div>
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
