import { Metadata } from "next"
import { HomeContent } from "@/components/home-content"

export const metadata: Metadata = {
  title: "Our Instructors - Universal Martial Arts Center | Chino Hills, CA",
  description:
    "Meet the dedicated instructors at Universal Martial Arts Center. Our experienced martial arts instructors are committed to helping you and your family achieve your training goals.",
  keywords: [
    "Universal Martial Arts Center instructors",
    "Chino Hills martial arts instructors",
    "Krav Maga instructors",
    "Brazilian Jiu Jitsu instructors",
    "martial arts teachers Chino Hills",
  ],
  alternates: {
    canonical: "https://umacchinohills.com/team",
  },
}

export default function TeamPage() {
  return <HomeContent scrollTo="team" />
}

