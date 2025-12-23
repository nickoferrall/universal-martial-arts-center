"use client"

import Image from "next/image"

const instructor = {
  name: "Sensei Michael Johnson",
  role: "Head Instructor",
  image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6438/Sensei-Michael-Johnson-141691.png",
  bio: "Dedicated martial arts instructor with years of experience in Krav Maga and self-defense training. Committed to helping students of all ages achieve their goals.",
}

export function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Instructor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expert martial arts instructor brings years of experience, passion, and dedication to help you and your family achieve your training goals
          </p>
        </div>

        <div className="flex justify-center">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 max-w-sm w-full">
            <div className="relative h-full bg-white rounded-3xl overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/90 text-sm leading-relaxed">{instructor.bio}</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{instructor.name}</h3>
                <p className="text-primary font-medium text-sm">{instructor.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
