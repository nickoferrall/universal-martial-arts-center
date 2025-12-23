import { Dumbbell, Users, GraduationCap, Calendar, Heart, Trophy } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Krav Maga",
    description: "Practical self-defense system for real-world situations. Build confidence, fitness, and effective self-defense skills",
  },
  {
    icon: Users,
    title: "Brazilian Jiu Jitsu",
    description: "Master ground fighting and submission techniques. Develop strength, flexibility, and mental discipline",
  },
  {
    icon: GraduationCap,
    title: "Kids Programs",
    description: "Kids Krav Maga and Kids Karate programs designed to build confidence, discipline, and respect",
  },
  {
    icon: Trophy,
    title: "Fitness Classes",
    description: "Dynamic fitness classes combining martial arts principles with traditional fitness training",
  },
  {
    icon: Calendar,
    title: "Charter School Fitness",
    description: "Structured physical education programs for California Charter School students",
  },
  {
    icon: Heart,
    title: "Self-Defense & Discipline",
    description: "Learn practical self-defense while developing mental strength, focus, and respect",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than a martial arts school - a community dedicated to helping you and your family achieve your goals through discipline, respect, and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8"
              >
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
