import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Reviews & Testimonials - Proehlific Park Greensboro",
  description:
    "Read reviews and testimonials from Proehlific Park members in Greensboro, NC. See what our community has to say about their experience.",
  alternates: {
    canonical: "https://proehlificpark.com/reviews",
  },
  openGraph: {
    title: "Reviews & Testimonials - Proehlific Park Greensboro",
    description:
      "Read reviews and testimonials from Proehlific Park members in Greensboro, NC. See what our community has to say about their experience.",
    url: "https://proehlificpark.com/reviews",
    images: ["/proehlific-facility.jpg"],
  },
};

export default function ReviewsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
