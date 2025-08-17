import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed font-serif">
                  [Short bio placeholder - Passionate ML and Backend Engineer with X years of experience building
                  scalable systems and intelligent solutions. Specialized in developing high-performance APIs, machine
                  learning pipelines, and distributed systems.]
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-serif">
                  [Additional bio content - Currently focused on advancing AI/ML applications in production environments
                  while maintaining robust backend infrastructure that serves millions of users.]
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">[Profile Photo]</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
