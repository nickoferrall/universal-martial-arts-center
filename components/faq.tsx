"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What programs does Proehlific Park offer?",
    answer:
      "Proehlific Park offers a comprehensive range of programs including fitness and weight room access, group exercise classes, cycling studio, youth sports leagues, adult sports leagues, after school care, Summer Blast camp, PSP (Proehlific Sports Performance) training, and facility rentals for events and parties.",
  },
  {
    question: "What are your membership options?",
    answer:
      "We offer various membership options to fit your needs. All memberships include access to our fitness center, locker rooms with saunas and showers, free WiFi, and a complimentary one-hour fitness consultation. Contact us to learn about current pricing and family rates.",
  },
  {
    question: "What is Summer Blast camp?",
    answer:
      "Summer Blast is our popular summer program for kids when school is out. Children participate in a variety of activities including sports, games, dodgeball, arts and crafts, and more. Our dedicated staff creates a fun, safe environment where kids come home tired and happy! We also offer care during teacher workdays, holidays, and inclement weather closings.",
  },
  {
    question: "Do you offer after school programs?",
    answer:
      "Yes! Our after school program provides a safe, fun environment for children after school hours. Kids participate in sports, games, and activities while making friends and staying active. Parents love the convenience and peace of mind our program provides.",
  },
  {
    question: "What sports do you offer for youth and adults?",
    answer:
      "We offer a wide range of sports including basketball, baseball, football, soccer, and lacrosse. We have both youth and adult leagues as well as drop-in games. Whether you're looking for competitive league play or casual pickup games, we have options for all skill levels.",
  },
  {
    question: "Can I tour the facility before joining?",
    answer:
      "Absolutely! We encourage everyone to stop by and take a tour of our facility. We would love to meet you and show you our awesome staff and amenities. Contact us to schedule a visit and see why Proehlific Park is Greensboro's premier sports training center.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Proehlific Park
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-white rounded-2xl">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors rounded-2xl"
                >
                  <span className="text-lg font-bold text-foreground pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
