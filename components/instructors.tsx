"use client"

import Image from "next/image"

const instructor = {
  name: "Sensei Michael Johnson",
  role: "Head Instructor",
  image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6438/Sensei-Michael-Johnson-141691.png",
  bio: "Dedicated martial arts instructor with years of experience in Krav Maga and self-defense training. Committed to helping students of all ages achieve their goals.",
}

export function Instructors() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Instructor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expert martial arts instructor is committed to helping you achieve your goals
          </p>
        </div>

        <div className="flex justify-center">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 max-w-sm w-full">
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
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{instructor.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{instructor.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {instructor.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

