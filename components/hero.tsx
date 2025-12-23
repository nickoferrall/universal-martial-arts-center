"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BookingModal } from "./booking-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/Greensboros-Comprehensive-Sports-Center-With-Training-For-All-Ages-213363.jpg"
          alt="Proehlific Park Sports Complex in Greensboro"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container relative z-10 px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
            Greensboro&apos;s Comprehensive Sports Training Center
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-6 md:mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Find the P.O.W.E.R. in Play. Fitness, sports, youth programs, and more for athletes of all ages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Request More Info
            </Button>
          </div>
        </div>
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Info" />
    </section>
  )
}
