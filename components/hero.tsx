"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BookingModal } from "./booking-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6438/The-Best-Martial-Arts-Center-in-Chino-Hills-and-the-Inland-Empire-150007.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full"
          style={{ objectFit: "cover" }}
        >
          <source src="https://res.cloudinary.com/display97/video/upload/vc_auto/vup2jzr8ggjldipjzpzd.mp4" type="video/mp4" />
          <source src="https://res.cloudinary.com/display97/video/upload/vc_auto/vup2jzr8ggjldipjzpzd.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container relative z-10 px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
            The Best Martial Arts Center in Chino Hills and the Inland Empire
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-6 md:mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Respect All. Fear None. Krav Maga, Brazilian Jiu Jitsu, Fitness Classes, and Kids Programs for all ages.
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
