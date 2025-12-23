import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "FAQ - Universal Martial Arts Center | Chino Hills, CA",
  description:
    "Frequently asked questions about Universal Martial Arts Center in Chino Hills, CA. Learn about classes, programs, memberships, and martial arts training.",
  alternates: {
    canonical: "https://umacchinohills.com/faq",
  },
  openGraph: {
    title: "FAQ - Universal Martial Arts Center | Chino Hills, CA",
    description:
      "Frequently asked questions about Universal Martial Arts Center in Chino Hills, CA. Learn about classes, programs, memberships, and martial arts training.",
    url: "https://umacchinohills.com/faq",
    images: ["/umac-facility.jpg"],
  },
};

export default function FAQPage() {
  return <HomeContent scrollTo="faq" />;
}
