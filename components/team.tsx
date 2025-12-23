"use client"

import Image from "next/image"
import { useState } from "react"

const teamMembers = [
  {
    name: "Ricky Proehl",
    role: "Owner & CEO",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Ricky-Proehl-241970.png",
    bio: "Former NFL wide receiver and founder of Proehlific Park, dedicated to inspiring the community through sports and fitness.",
  },
  {
    name: "Norman Klick",
    role: "General Counsel",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Norman-Klick-241968.png",
    bio: "Experienced leader helping guide the vision and legal operations of Proehlific Park.",
  },
  {
    name: "Steve Shelton",
    role: "COO & Athletic Director",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Steve-Shelton-241971.png",
    bio: "Dedicated to developing youth sports programs and building community through athletics.",
  },
  {
    name: "Katie Allegro",
    role: "COO & Pickleball Teaching Pro",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Katie-Allegro-242404.png",
    bio: "Certified pickleball pro and COO specializing in group exercise and personal training programs.",
  },
  {
    name: "Doug Henderson",
    role: "COO & Adult Fitness Director",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Doug-Henderson-241976.png",
    bio: "Experienced trainer focused on adult fitness, strength and conditioning for athletes of all levels.",
  },
  {
    name: "Dave Martin",
    role: "Director Of Operations",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Dave-Martin-241979.png",
    bio: "Dedicated director helping members achieve their fitness goals through excellent facility operations.",
  },
  {
    name: "Natasha Hilburn",
    role: "P.O.W.E.R. of Play Foundation Director",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Natasha-Hilburn-241980.png",
    bio: "Passionate about helping others discover the power of play through community programs and outreach.",
  },
  {
    name: "Jade McLean",
    role: "Youth Program Director",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Jade-McLean-293583.jpg.jpg",
    bio: "Dedicated youth program director creating fun and engaging experiences for children of all ages.",
  },
  {
    name: "Megan Rees",
    role: "Rental and Events Director",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Megan-Rees-261496.jpg",
    bio: "Expert in coordinating facility rentals and events, ensuring memorable experiences for all guests.",
  },
  {
    name: "Courtney Schroyer",
    role: "Personal Trainer & Instructor",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Courtney-Schroyer-292848.jpg.jpg",
    bio: "Certified personal trainer dedicated to helping clients reach their fitness goals through personalized coaching.",
  },
  {
    name: "Chris Chapman",
    role: "Wellness Director",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Chris-Chapman-241989.png",
    bio: "Wellness expert focused on holistic health and fitness programs for the entire community.",
  },
  {
    name: "Chris Kennedy",
    role: "Flag Football Director",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Chris-Kennedy-242676.png",
    bio: "Passionate about youth flag football, developing skills and sportsmanship in young athletes.",
  },
  {
    name: "Tristan Kilgannon",
    role: "Flag Football Director",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Tristan-Kilgannon-285306.jpg",
    bio: "Dedicated to growing flag football programs and teaching the fundamentals of the game.",
  },
  {
    name: "Vicky Proehl",
    role: "Front Desk Specialist",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Vicky-Proehl-241990.png",
    bio: "Welcoming face of Proehlific Park, ensuring every visitor feels at home from the moment they arrive.",
  },
  {
    name: "Kato Proehl",
    role: "Chief Supervisor",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Kato-Proehl--241982.png",
    bio: "Overseeing daily operations and ensuring the facility runs smoothly for all members and guests.",
  },
  {
    name: "Daren Dorsett",
    role: "Maintenance Supervisor",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Daren-Dorsett-241981.png",
    bio: "Keeping Proehlific Park in top condition, ensuring a safe and well-maintained environment for everyone.",
  },
]

export function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated staff brings experience, passion, and expertise to help you and your family achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-[1px] opacity-70" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
