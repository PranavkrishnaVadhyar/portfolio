import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground font-sans">[B Pranavkrishna Vadhyar]</h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-serif">ML + Backend Engineer</p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building intelligent systems and scalable backend solutions that power the future of technology
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex space-x-4">
              <a href="https://github.com/PranavkrishnaVadhyar" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/pranavkrishnavadhyar/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              </a>
              <a href="mailto:bpranavkrishnaofficial@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
              </a>
            </div>
          </div>

          <div className="pt-12">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
