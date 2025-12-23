import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "About Us - Proehlific Park Greensboro",
  description:
    "Learn about Proehlific Park in Greensboro, NC. Founded by NFL wide receiver Ricky Proehl, our mission is to inspire through sports and fitness.",
  alternates: {
    canonical: "https://proehlificpark.com/about",
  },
  openGraph: {
    title: "About Us - Proehlific Park Greensboro",
    description:
      "Learn about Proehlific Park in Greensboro, NC. Founded by NFL wide receiver Ricky Proehl, our mission is to inspire through sports and fitness.",
    url: "https://proehlificpark.com/about",
    images: ["/proehlific-facility.jpg"],
  },
};

export default function AboutPage() {
  return <HomeContent scrollTo="facility" />;
}
