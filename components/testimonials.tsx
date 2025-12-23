"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    text: "Proehlific Park's after-school program has been an absolute life saver this past year, not only for me as a parent, but for my child as well! He absolutely loves going to Proehlific, loves all of the sports and activities he gets to do, friends he has made, and most of all, LOVES the coaches and Angie!",
    author: "Amy S.",
    source: "google",
  },
  {
    text: "My kids absolutely love the Summer Blast program at Proehlific! Mrs. Angie and her staff are amazing, you can see how much they love the kids.",
    author: "Demetria S.",
    source: "google",
  },
  {
    text: "Summer Blast has been the much needed break for my son and I. We are so happy that this summer program is able to accommodate so many children and working parents. All the protocols and procedures that you have in place to serve and protect our children is much appreciated.",
    author: "Capricia M.",
    source: "google",
  },
  {
    text: "This has been the absolute best experience for my 6 year old son. We love everyone here, they go above and beyond with the kids. Thankful for this place.",
    author: "Tiffine B.",
    source: "google",
  },
  {
    text: "We Love Proehlific Park Summer BLAST Camp! As a working parent, I had to find a summer camp during COVID-19. I reached out to Angie and explained my situation. Angie and the Summer Blast Camp Coaches are awesome! Very professional and each week the coaches would communicate with me on how my son was doing.",
    author: "Jessica H.",
    source: "google",
  },
  {
    text: "Want your child to come home hungry and tired every day? Begging to stay just a few more minutes? That's exactly what you get when your child attends Summer Blast! at Proehlific Park. Our very active 9 year old LOVES his time playing with the other kids and learning from the coaches.",
    author: "Jo V.",
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
