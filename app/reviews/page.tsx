import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Reviews & Testimonials - Universal Martial Arts Center | Chino Hills, CA",
  description:
    "Read reviews and testimonials from Universal Martial Arts Center students in Chino Hills, CA. See what our community has to say about their martial arts training experience.",
  alternates: {
    canonical: "https://umacchinohills.com/reviews",
  },
  openGraph: {
    title: "Reviews & Testimonials - Universal Martial Arts Center | Chino Hills, CA",
    description:
      "Read reviews and testimonials from Universal Martial Arts Center students in Chino Hills, CA. See what our community has to say about their martial arts training experience.",
    url: "https://umacchinohills.com/reviews",
    images: ["/umac-facility.jpg"],
  },
};

export default function ReviewsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
