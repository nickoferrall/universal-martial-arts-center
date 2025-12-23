import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Testimonials - Universal Martial Arts Center | Chino Hills, CA",
  description:
    "Read testimonials from Universal Martial Arts Center students in Chino Hills, CA. See what families and students have to say about their martial arts training experience.",
  openGraph: {
    title: "Testimonials - Universal Martial Arts Center | Chino Hills, CA",
    description:
      "Read testimonials from Universal Martial Arts Center students in Chino Hills, CA. See what families and students have to say about their martial arts training experience.",
    url: "https://umacchinohills.com/testimonials",
    images: ["/umac-facility.jpg"],
  },
};

export default function TestimonialsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
