import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Contact Us - Universal Martial Arts Center | Chino Hills, CA",
  description:
    "Contact Universal Martial Arts Center in Chino Hills, CA. Get directions, phone number, and email. Visit us at 14610 Pipeline Ave, Chino, CA 91710.",
  alternates: {
    canonical: "https://umacchinohills.com/contact",
  },
  openGraph: {
    title: "Contact Us - Universal Martial Arts Center | Chino Hills, CA",
    description:
      "Contact Universal Martial Arts Center in Chino Hills, CA. Get directions, phone number, and email. Visit us at 14610 Pipeline Ave, Chino, CA 91710.",
    url: "https://umacchinohills.com/contact",
    images: ["/umac-facility.jpg"],
  },
};

export default function ContactPage() {
  return <HomeContent scrollTo="facility" />;
}
