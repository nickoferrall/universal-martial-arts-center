import { Dumbbell, Users, GraduationCap, Calendar, Heart, Trophy } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Fitness & Weight Room",
    description: "State-of-the-art weight lifting equipment and cardio machines with 24/7 member access during open hours",
  },
  {
    icon: Users,
    title: "Group Exercise Classes",
    description: "Cycling, fitness classes, and group workouts designed to help you lose weight and have fun",
  },
  {
    icon: GraduationCap,
    title: "Youth Programs",
    description: "After school care, summer camps, and youth sports leagues for kids of all ages",
  },
  {
    icon: Trophy,
    title: "Sports Training",
    description: "Basketball, baseball, football, soccer, lacrosse, and more for youth and adults",
  },
  {
    icon: Calendar,
    title: "Summer Blast Camp",
    description: "Fun-filled summer program featuring sports, games, arts and crafts, and more activities",
  },
  {
    icon: Heart,
    title: "Kids Club & Child Care",
    description: "Leave your child in the care of our qualified staff while you focus on your workout",
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
            More than a gym - a community dedicated to helping you and your family achieve your goals
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
