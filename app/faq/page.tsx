import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "FAQ - Proehlific Park Greensboro",
  description:
    "Frequently asked questions about Proehlific Park in Greensboro, NC. Learn about memberships, programs, youth activities, and more.",
  alternates: {
    canonical: "https://proehlificpark.com/faq",
  },
  openGraph: {
    title: "FAQ - Proehlific Park Greensboro",
    description:
      "Frequently asked questions about Proehlific Park in Greensboro, NC. Learn about memberships, programs, youth activities, and more.",
    url: "https://proehlificpark.com/faq",
    images: ["/proehlific-facility.jpg"],
  },
};

export default function FAQPage() {
  return <HomeContent scrollTo="faq" />;
}
