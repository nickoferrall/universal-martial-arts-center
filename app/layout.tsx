import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Proehlific Park - Greensboro's Comprehensive Sports Training Center",
  description:
    "Find the P.O.W.E.R. in Play at Proehlific Park. Greensboro's comprehensive sports training center for all ages offering fitness, sports, youth programs, and more.",
  keywords: [
    "Proehlific Park",
    "Greensboro gym",
    "sports complex Greensboro",
    "fitness center Greensboro",
    "youth sports Greensboro",
    "sports training Greensboro",
    "Summer Blast",
    "after school program Greensboro",
    "kids sports Greensboro",
    "personal training Greensboro",
    "cycling classes Greensboro",
    "group fitness Greensboro",
  ],
  authors: [{ name: "Proehlific Park" }],
  creator: "Proehlific Park",
  publisher: "Proehlific Park",
  metadataBase: new URL("https://proehlificpark.com"),
  alternates: {
    canonical: "https://proehlificpark.com",
  },
  openGraph: {
    title: "Proehlific Park - Greensboro's Comprehensive Sports Training Center",
    description:
      "Find the P.O.W.E.R. in Play at Proehlific Park. Greensboro's comprehensive sports training center for all ages.",
    url: "https://proehlificpark.com",
    siteName: "Proehlific Park",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/proehlific-facility.jpg",
        width: 1200,
        height: 630,
        alt: "Proehlific Park Sports Complex in Greensboro, North Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proehlific Park - Greensboro's Comprehensive Sports Training Center",
    description:
      "Find the P.O.W.E.R. in Play at Proehlific Park. Greensboro's comprehensive sports training center for all ages.",
    images: ["/proehlific-facility.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Proehlific Park",
  image: "https://proehlificpark.com/proehlific-facility.jpg",
  "@id": "https://proehlificpark.com",
  url: "https://proehlificpark.com",
  telephone: "+1-336-665-5233",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4517 Jessup Grove Rd",
    addressLocality: "Greensboro",
    addressRegion: "NC",
    postalCode: "27410",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.0726,
    longitude: -79.8898,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/ProehlificPark/",
    "https://www.instagram.com/proehlificpark/",
    "https://x.com/proehlificpark",
    "https://www.youtube.com/user/ProehlificPOWER",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "100",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Programs & Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fitness & Weight Room",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Group Exercise Classes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Youth Sports Programs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Summer Blast Camp",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "After School Care",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://proehlificpark.com" />
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Greensboro" />
        <meta name="geo.position" content="36.0726;-79.8898" />
        <meta name="ICBM" content="36.0726, -79.8898" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
