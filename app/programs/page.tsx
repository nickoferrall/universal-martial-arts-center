import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Classes & Programs - Universal Martial Arts Center | Chino Hills, CA",
  description:
    "Explore martial arts programs at Universal Martial Arts Center in Chino Hills, CA. Krav Maga, Brazilian Jiu Jitsu, Fitness Classes, Kids Programs, and more.",
  alternates: {
    canonical: "https://umacchinohills.com/programs",
  },
  openGraph: {
    title: "Classes & Programs - Universal Martial Arts Center | Chino Hills, CA",
    description:
      "Explore martial arts programs at Universal Martial Arts Center in Chino Hills, CA. Krav Maga, Brazilian Jiu Jitsu, Fitness Classes, Kids Programs, and more.",
    url: "https://umacchinohills.com/programs",
    images: ["/umac-facility.jpg"],
  },
};

export default function ProgramsPage() {
  return <HomeContent scrollTo="programs" />;
}
