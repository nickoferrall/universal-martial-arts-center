import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Programs - Proehlific Park Greensboro",
  description:
    "Explore programs at Proehlific Park in Greensboro, NC. Fitness, sports leagues, youth programs, Summer Blast camp, and more for all ages.",
  alternates: {
    canonical: "https://proehlificpark.com/programs",
  },
  openGraph: {
    title: "Programs - Proehlific Park Greensboro",
    description:
      "Explore programs at Proehlific Park in Greensboro, NC. Fitness, sports leagues, youth programs, Summer Blast camp, and more for all ages.",
    url: "https://proehlificpark.com/programs",
    images: ["/proehlific-facility.jpg"],
  },
};

export default function ProgramsPage() {
  return <HomeContent scrollTo="programs" />;
}
