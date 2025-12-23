"use client"

import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const programs = [
  {
    title: "Krav Maga",
    description:
      "Learn practical self-defense techniques with Krav Maga, the world's most effective self-defense system. Build confidence, fitness, and real-world skills in a supportive environment.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6438/Krav-Maga-150008.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Krav Maga is a practical self-defense system designed for real-world situations. Our expert instructors teach techniques that work regardless of your size or strength.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">What You'll Learn:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Self-Defense:</strong> Practical techniques for real-world situations</li>
            <li><strong>Fitness:</strong> Improve strength, endurance, and flexibility</li>
            <li><strong>Confidence:</strong> Build mental and physical confidence</li>
            <li><strong>Discipline:</strong> Develop focus and self-control</li>
            <li><strong>All Levels:</strong> Classes for beginners to advanced students</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Brazilian Jiu Jitsu",
    description:
      "Master the art of ground fighting with Brazilian Jiu Jitsu. Develop technique, strength, and mental discipline while learning one of the most effective martial arts for self-defense.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6438/BJJ-150009.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Brazilian Jiu Jitsu focuses on ground fighting and submission techniques. It's perfect for those who want to learn effective self-defense while improving fitness and flexibility.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Program Benefits:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Ground Fighting:</strong> Master techniques for ground combat</li>
            <li><strong>Submission Holds:</strong> Learn effective control and submission techniques</li>
            <li><strong>Fitness:</strong> Improve strength, flexibility, and cardiovascular health</li>
            <li><strong>Mental Focus:</strong> Develop problem-solving and strategic thinking</li>
            <li><strong>Belt System:</strong> Progress through ranks with structured curriculum</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Fitness Classes",
    description:
      "Get in shape with our dynamic fitness classes designed to improve strength, endurance, and overall health. Fun, challenging workouts for all fitness levels.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6438/The-Best-Martial-Arts-Center-in-Chino-Hills-and-the-Inland-Empire-150007.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our fitness classes combine martial arts principles with traditional fitness training to create effective, engaging workouts that help you achieve your fitness goals.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Class Features:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Cardio Training:</strong> High-intensity workouts to burn calories</li>
            <li><strong>Strength Building:</strong> Build muscle and improve strength</li>
            <li><strong>Flexibility:</strong> Improve range of motion and prevent injury</li>
            <li><strong>Group Motivation:</strong> Work out in a supportive group environment</li>
            <li><strong>All Levels:</strong> Modifications for beginners to advanced</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Kids Krav Maga",
    description:
      "Give your child the gift of confidence and self-defense skills. Our Kids Krav Maga program teaches practical self-defense while building discipline, respect, and fitness.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6438/Kids-Krav-Maga-2-151498.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our Kids Krav Maga program is designed specifically for children, teaching age-appropriate self-defense techniques while building confidence, discipline, and respect.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Program Benefits:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Self-Defense:</strong> Learn practical techniques for real situations</li>
            <li><strong>Confidence:</strong> Build self-esteem and mental strength</li>
            <li><strong>Discipline:</strong> Develop focus, respect, and self-control</li>
            <li><strong>Fitness:</strong> Stay active and healthy</li>
            <li><strong>Bully Prevention:</strong> Learn to handle bullying situations</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Kids Karate",
    description:
      "Traditional karate training for children that builds character, discipline, and respect. Our Kids Karate program combines martial arts skills with life lessons.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6438/Kids-Martial-Arts-142943.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Kids Karate teaches traditional martial arts values while developing physical skills. Children learn respect, discipline, and self-control in a fun, structured environment.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">What Kids Learn:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Karate Techniques:</strong> Learn proper form and technique</li>
            <li><strong>Respect:</strong> Develop respect for instructors, peers, and themselves</li>
            <li><strong>Discipline:</strong> Build focus and self-control</li>
            <li><strong>Fitness:</strong> Improve coordination, balance, and strength</li>
            <li><strong>Belt System:</strong> Progress through ranks with achievement</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Fitness for California Charter School",
    description:
      "Specialized fitness programs designed for California Charter School students. Build strength, endurance, and healthy habits through structured physical education.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6438/Fitness-146225.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our Charter School Fitness program provides structured physical education that meets California state requirements while keeping students active and healthy.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Program Features:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Structured Curriculum:</strong> Meets state PE requirements</li>
            <li><strong>Fitness Assessment:</strong> Track progress and improvement</li>
            <li><strong>Variety of Activities:</strong> Keep students engaged and motivated</li>
            <li><strong>Healthy Habits:</strong> Teach lifelong fitness principles</li>
            <li><strong>Certified Instructors:</strong> Qualified PE instruction</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export function Classes() {
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null)

  const scrollToForm = () => {
    const form = document.getElementById("lead-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fitness to youth sports, we have programs designed to help the whole family achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: program.objectPosition || "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">{program.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>
                  <Button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn mt-auto cursor-pointer"
                  >
                    Learn More
                    <Info className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/90 p-12 shadow-xl">
            <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[200px] border-l-transparent border-b-[200px] border-b-slate-900/90" />
            <div className="relative z-10">
              <p className="text-white/90 text-sm font-semibold tracking-widest uppercase mb-2">Membership</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Try Any Class Free for 1 Week</h2>
              
              <div className="space-y-0">
                {[
                  "Krav Maga",
                  "Fitness Classes",
                  "Brazilian Jiu Jitsu",
                  "Kids Krav Maga",
                  "Kids Karate"
                ].map((className, index) => (
                  <div key={index} className="flex items-center justify-between py-5 border-t border-white/20">
                    <span className="text-white font-medium text-lg">{className}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold text-3xl">FREE</span>
                      <span className="text-white/80 text-lg">/ 1 Week</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button
                  onClick={scrollToForm}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold cursor-pointer"
                >
                  Claim Your Free Week
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{selectedProgram?.title}</DialogTitle>
            <div className="text-base leading-relaxed pt-4">{selectedProgram?.fullDescription}</div>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              onClick={() => {
                setSelectedProgram(null)
                scrollToForm()
              }}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              Get Started
            </Button>
            <Button onClick={() => setSelectedProgram(null)} variant="outline" className="flex-1 cursor-pointer">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
