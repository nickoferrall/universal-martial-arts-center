"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    text: "The comradery at U.M.A.C. is off the charts, GREAT! There's no better place to train.",
    author: "Michael Hockenhull",
    source: "facebook",
  },
  {
    text: "Sensei Michael is so great with my son, stern yet nice and friendly. Love this place!",
    author: "Olivia Castle",
    source: "facebook",
  },
  {
    text: "best place to get a good workout and learn self defense!",
    author: "Yi Eubanks",
    source: "facebook",
  },
  {
    text: "I love it! I'm always looking forward to the next class! This place has the best environment! Everyone, from instructors to students, are so nice and helpful! I have loved this place since I walked through the door!",
    author: "Stephanie Rosenfeld",
    source: "facebook",
  },
  {
    text: "used to teach here when I was young! spent over a decade at this dojo with sensei Mike Johnson and I couldn't recommend anything more! umac helped shape the man I am today!",
    author: "Chris Ragsdale",
    source: "facebook",
  },
  {
    text: "Universal Martial Arts Center has been amazing for my family. The instructors are patient, knowledgeable, and truly care about each student's development. Highly recommend!",
    author: "Local Member",
    source: "google",
  },
]

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Members Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a community that supports and motivates each other every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100/60 via-slate-50/40 to-emerald-100/50 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-[2px] opacity-60" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl p-8 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  {testimonial.source === "google" && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground opacity-60">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                      </svg>
                      <span>Google</span>
                    </div>
                  )}
                  {testimonial.source === "facebook" && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground opacity-60">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>Facebook</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-bold text-foreground text-sm">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
