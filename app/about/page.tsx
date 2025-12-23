import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "About Us - Universal Martial Arts Center | Chino Hills, CA",
  description:
    "Learn about Universal Martial Arts Center in Chino Hills, CA. The best martial arts center in the Inland Empire. Respect All. Fear None.",
  alternates: {
    canonical: "https://umacchinohills.com/about",
  },
  openGraph: {
    title: "About Us - Universal Martial Arts Center | Chino Hills, CA",
    description:
      "Learn about Universal Martial Arts Center in Chino Hills, CA. The best martial arts center in the Inland Empire offering Krav Maga, Brazilian Jiu Jitsu, and more.",
    url: "https://umacchinohills.com/about",
    images: ["/umac-facility.jpg"],
  },
};

export default function AboutPage() {
  return <HomeContent scrollTo="facility" />;
}
