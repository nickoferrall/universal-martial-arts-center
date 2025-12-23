"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { BookingModal } from "./booking-modal"

const navItems = [
  { href: "/programs", label: "Programs", scrollTo: "programs" },
  { href: "/team", label: "Team", scrollTo: "team" },
  { href: "/reviews", label: "Reviews", scrollTo: "testimonials" },
  { href: "/faq", label: "FAQ", scrollTo: "faq" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const isHomePage = pathname === "/" || navItems.some(item => item.href === pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openModal = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    const section = document.getElementById(item.scrollTo)
    if (section) {
      e.preventDefault()
      section.scrollIntoView({ behavior: "smooth" })
      window.history.pushState({}, "", item.href)
      setIsMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">4517 Jessup Grove Rd, Greensboro, NC 27410</span>
              <span className="sm:hidden">Greensboro, NC</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:3366655233"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(336) 665-5233</span>
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/ProehlificPark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/proehlificpark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/proehlificpark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/user/ProehlificPOWER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/proehlific-logo.png"
              alt="Proehlific Park"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Request More Info
            </Button>
          </nav>

          <button
            className="lg:hidden text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4 bg-slate-900/90 backdrop-blur-md rounded-lg p-4 -mx-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Request More Info
            </Button>
          </nav>
        )}
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Information" />
    </header>
  )
}
