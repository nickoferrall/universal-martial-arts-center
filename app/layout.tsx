import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Universal Martial Arts Center | Martial Arts in Chino Hills, CA",
  description:
    "The best martial arts center in Chino Hills and the Inland Empire. Offering Krav Maga, Brazilian Jiu Jitsu, Fitness Classes, and Kids Programs. Respect All. Fear None.",
  keywords: [
    "Universal Martial Arts Center",
    "Chino Hills martial arts",
    "Krav Maga Chino Hills",
    "Brazilian Jiu Jitsu Chino Hills",
    "martial arts Chino Hills",
    "self defense Chino Hills",
    "kids karate Chino Hills",
    "kids Krav Maga Chino Hills",
    "fitness classes Chino Hills",
    "martial arts Inland Empire",
    "Chino Hills CA",
  ],
  authors: [{ name: "Universal Martial Arts Center" }],
  creator: "Universal Martial Arts Center",
  publisher: "Universal Martial Arts Center",
  metadataBase: new URL("https://umacchinohills.com"),
  alternates: {
    canonical: "https://umacchinohills.com",
  },
  openGraph: {
    title: "Universal Martial Arts Center | Martial Arts in Chino Hills, CA",
    description:
      "The best martial arts center in Chino Hills and the Inland Empire. Offering Krav Maga, Brazilian Jiu Jitsu, Fitness Classes, and Kids Programs.",
    url: "https://umacchinohills.com",
    siteName: "Universal Martial Arts Center",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/umac-facility.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Martial Arts Center in Chino Hills, California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Martial Arts Center | Martial Arts in Chino Hills, CA",
    description:
      "The best martial arts center in Chino Hills and the Inland Empire. Offering Krav Maga, Brazilian Jiu Jitsu, Fitness Classes, and Kids Programs.",
    images: ["/umac-facility.jpg"],
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
  "@type": "LocalBusiness",
  name: "Universal Martial Arts Center",
  image: "https://umacchinohills.com/umac-facility.jpg",
  "@id": "https://umacchinohills.com",
  url: "https://umacchinohills.com",
  telephone: "+1-909-597-1710",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14610 Pipeline Ave",
    addressLocality: "Chino",
    addressRegion: "CA",
    postalCode: "91710",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.01794,
    longitude: -117.71547,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/UMACfit/",
    "https://www.instagram.com/umacchinohills/",
    "https://twitter.com/umacchinohills",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Martial Arts Programs & Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Krav Maga",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brazilian Jiu Jitsu",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fitness Classes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kids Krav Maga",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kids Karate",
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
        <link rel="canonical" href="https://umacchinohills.com" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Chino Hills" />
        <meta name="geo.position" content="34.01794;-117.71547" />
        <meta name="ICBM" content="34.01794, -117.71547" />
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
