import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Contact Us - Proehlific Park Greensboro",
  description:
    "Contact Proehlific Park in Greensboro, NC. Get directions, phone number, and email. Visit us at 4517 Jessup Grove Rd.",
  alternates: {
    canonical: "https://proehlificpark.com/contact",
  },
  openGraph: {
    title: "Contact Us - Proehlific Park Greensboro",
    description:
      "Contact Proehlific Park in Greensboro, NC. Get directions, phone number, and email. Visit us at 4517 Jessup Grove Rd.",
    url: "https://proehlificpark.com/contact",
    images: ["/proehlific-facility.jpg"],
  },
};

export default function ContactPage() {
  return <HomeContent scrollTo="facility" />;
}
