import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground font-sans animate-fade-in-up">
              [Your Name]
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-serif animate-fade-in-up">
              ML + Backend Engineer
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              Building intelligent systems and scalable backend solutions that power the future of technology
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-transparent"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 hover:-rotate-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-transparent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="pt-12 animate-fade-in-up">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground animate-bounce hover:text-primary hover:scale-125 transition-all duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}
