"use client"

import Image from "next/image"
import { useState } from "react"

const instructors = [
  {
    name: "Ricky Proehl",
    role: "Founder & Director",
    image: "/instructor-ricky-proehl.png",
    bio: "Former NFL wide receiver and founder of Proehlific Park. Ricky brings his professional sports experience and passion for youth development to lead the Proehlific Park mission.",
  },
  {
    name: "Vicky Proehl",
    role: "Director",
    image: "/instructor-vicky-proehl.png",
    bio: "Co-founder and Director at Proehlific Park, Vicky is instrumental in creating a welcoming, family-oriented environment for all members.",
  },
  {
    name: "Norman Klick",
    role: "Fitness Director",
    image: "/instructor-norman-klick.png",
    bio: "As Fitness Director, Norman oversees our fitness programs and ensures members receive top-quality training and guidance.",
  },
  {
    name: "Steve Shelton",
    role: "Adult Fitness Trainer",
    image: "/instructor-steve-shelton.png",
    bio: "Steve brings years of experience to help adults achieve their fitness goals through personalized training programs.",
  },
  {
    name: "Katie Allegro",
    role: "Fitness Trainer",
    image: "/instructor-katie-allegro.png",
    bio: "Katie is dedicated to helping members of all fitness levels reach their potential through motivating and effective workouts.",
  },
  {
    name: "Doug Henderson",
    role: "Fitness Trainer",
    image: "/instructor-doug-henderson.png",
    bio: "Doug specializes in strength and conditioning, helping members build functional fitness for everyday life.",
  },
  {
    name: "Dave Martin",
    role: "Fitness Trainer",
    image: "/instructor-dave-martin.png",
    bio: "Dave brings enthusiasm and expertise to every training session, focusing on helping members achieve lasting results.",
  },
  {
    name: "Natasha Hilburn",
    role: "Fitness Trainer",
    image: "/instructor-natasha-hilburn.png",
    bio: "Natasha combines her passion for fitness with personalized coaching to help members transform their health.",
  },
]

export function Instructors() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated coaches and staff are committed to helping you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredIndex !== null && hoveredIndex !== index ? "opacity-60" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{instructor.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{instructor.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

