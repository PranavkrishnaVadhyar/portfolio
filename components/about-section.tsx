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
                  Pranavkrishna is a Generative AI and Backend Engineer passionate about building intelligent systems that blend large language models, NLP, and scalable architectures. His experience includes designing and developing agents, RAG pipelines, fine-tuning models, and developing inference systems for real-world applications. Skilled in TensorFlow, FastAPI, PostgreSQL, LangChain, and CrewAI, he bridges AI research with deployment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-serif">
                  He is also active in research and community initiatives, mentoring and driving AI-focused workshops and collaborations, while exploring innovative solutions at the intersection of AI and backend engineering.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-lg overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Pranavkrishna"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
