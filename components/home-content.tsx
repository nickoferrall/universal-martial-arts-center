"use client"

import { useEffect, useState } from "react"
import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Classes } from "@/components/classes"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { Facility } from "@/components/facility"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"

interface HomeContentProps {
  scrollTo?: string
}

export function HomeContent({ scrollTo }: HomeContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [scrollTo])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CtaBanner />
      <Classes />
      <Services />
      <Team />
      <Testimonials />
      <FAQ />
      <Facility />
      <Footer />

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Information" />
    </main>
  )
}

