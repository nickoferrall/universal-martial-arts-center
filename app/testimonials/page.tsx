import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Testimonials - Proehlific Park Greensboro",
  description:
    "Read testimonials from Proehlific Park members in Greensboro, NC. See what families and athletes have to say about their experience.",
  openGraph: {
    title: "Testimonials - Proehlific Park Greensboro",
    description:
      "Read testimonials from Proehlific Park members in Greensboro, NC. See what families and athletes have to say about their experience.",
    url: "https://proehlificpark.com/testimonials",
    images: ["/proehlific-facility.jpg"],
  },
};

export default function TestimonialsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
