"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What martial arts programs do you offer?",
    answer:
      "Universal Martial Arts Center offers comprehensive martial arts training including Krav Maga for adults and kids, Brazilian Jiu Jitsu, Fitness Classes, Kids Karate, and specialized fitness programs for California Charter School students. We have programs for all ages and skill levels.",
  },
  {
    question: "What are your class schedules and membership options?",
    answer:
      "We offer flexible class schedules throughout the week with morning, afternoon, and evening options. Membership options include monthly unlimited classes, family packages, and trial memberships. Contact us to learn about current pricing and find the best option for you and your family.",
  },
  {
    question: "Do I need prior martial arts experience to start?",
    answer:
      "Not at all! Our programs are designed for beginners and advanced students alike. Our expert instructors will guide you through the fundamentals and help you progress at your own pace. Whether you're completely new to martial arts or have previous experience, we have classes that will challenge and inspire you.",
  },
  {
    question: "What age groups do you teach?",
    answer:
      "We offer programs for all ages! Our Kids Krav Maga and Kids Karate programs are designed for children, while our adult programs welcome students of all ages. We also have specialized programs for teens and families. Contact us to find the right program for your age group.",
  },
  {
    question: "What makes your Krav Maga program different?",
    answer:
      "Our Krav Maga program focuses on practical self-defense techniques that work in real-world situations. We teach students regardless of size or strength, emphasizing effectiveness and confidence. Our instructors are highly trained and create a supportive learning environment where students can develop both physical skills and mental strength.",
  },
  {
    question: "Can I try a class before committing?",
    answer:
      "Absolutely! We encourage everyone to visit us and take a tour of our facility. We offer trial classes so you can experience our training firsthand. Contact us to schedule a visit and see why Universal Martial Arts Center is the best martial arts center in Chino Hills and the Inland Empire.",
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
            Get answers to common questions about Universal Martial Arts Center
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
