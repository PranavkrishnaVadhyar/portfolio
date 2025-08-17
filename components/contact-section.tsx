import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, MapPin, Coffee, MessageCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "bpranavkrishnaofficial@gmail.com",
      href: "mailto:bpranavkrishnaofficial@gmail.com",
      color: "bg-chart-2",
      description: "Drop me a line anytime",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/PranavkrishnaVadhyar",
      href: "https://github.com/PranavkrishnaVadhyar",
      color: "bg-chart-1",
      description: "Check out my latest projects",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pranavkrishnavadhyar",
      href: "https://www.linkedin.com/in/pranavkrishnavadhyar/",
      color: "bg-chart-4",
      description: "Let's connect professionally",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ernakulam, Kerala, India",
      href: "#",
      color: "bg-chart-3",
      description: "Available for remote work",
    },
  ]

  const quickActions = [
    {
      icon: Coffee,
      label: "My Linktree",
      description: "All my links in one place",
      href: "https://linktr.ee/pranavkrishna.ai",
      variant: "default" as const,
    },
    {
      icon: Download,
      label: "Download Resume",
      description: "Get my latest CV",
      href: "https://drive.google.com/file/d/1ZSX9j3Xq2i6xIVN2zMSj1VoHDk_ZDKIM/view?usp=sharing",
      variant: "outline" as const,
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
            I'm always interested in discussing new opportunities, innovative projects, and collaborations in ML and
            backend engineering. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground font-sans">Get In Touch</h3>
              </div>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div
                        className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground font-sans mb-1">{method.label}</p>
                        <a
                          href={method.href}
                          className="text-foreground hover:text-primary transition-colors duration-200 font-serif block mb-1"
                        >
                          {method.value}
                        </a>
                        <p className="text-xs text-muted-foreground font-sans">{method.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground font-sans">Quick Actions</h3>
              </div>
              <div className="space-y-4 mb-8">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon
                  return (
                    <Button
                      key={index}
                      variant={action.variant}
                      className="w-full justify-start h-auto p-4 group"
                      asChild
                    >
                      <a href={action.href}>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-foreground">{action.label}</p>
                            <p className="text-sm text-muted-foreground">{action.description}</p>
                          </div>
                        </div>
                      </a>
                    </Button>
                  )
                })}
              </div>

              <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Available for new opportunities</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-card rounded-lg p-6 border border-border/50 inline-block">
            <p className="text-muted-foreground font-serif mb-2">
              © 2025 B Pranavkrishna Vadhyar. Built with Love ❤️.
            </p>
            <p className="text-xs text-muted-foreground">
              Open to remote work • Available for freelance projects • Based in Kochi, Kerala
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
