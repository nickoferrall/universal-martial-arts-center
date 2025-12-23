import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/display97/**',
      },
      {
        protocol: 'https',
        hostname: 'umacchinohills.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/Home/Schedule', destination: '/', permanent: true },
      { source: '/home/schedule', destination: '/', permanent: true },
      { source: '/schedule', destination: '/', permanent: true },
      { source: '/Home/FAQ', destination: '/faq', permanent: true },
      { source: '/home/faq', destination: '/faq', permanent: true },
      { source: '/Home/FAQ/:path*', destination: '/faq', permanent: true },
      { source: '/home/faq/:path*', destination: '/faq', permanent: true },
      { source: '/Home/Reviews', destination: '/reviews', permanent: true },
      { source: '/home/reviews', destination: '/reviews', permanent: true },
      { source: '/Home/Instructors', destination: '/team', permanent: true },
      { source: '/home/instructors', destination: '/team', permanent: true },
      { source: '/Home/Blog', destination: '/', permanent: true },
      { source: '/home/blog', destination: '/', permanent: true },
      { source: '/Home/Blog/:path*', destination: '/', permanent: true },
      { source: '/home/blog/:path*', destination: '/', permanent: true },
      { source: '/Home/ContactUs', destination: '/contact', permanent: true },
      { source: '/home/contactus', destination: '/contact', permanent: true },
      { source: '/Home/Contact', destination: '/contact', permanent: true },
      { source: '/home/contact', destination: '/contact', permanent: true },
      { source: '/Home/About', destination: '/about', permanent: true },
      { source: '/home/about', destination: '/about', permanent: true },
      { source: '/Home/Offer/:path*', destination: '/', permanent: true },
      { source: '/home/offer/:path*', destination: '/', permanent: true },

      { source: '/fitness-health-programs', destination: '/programs', permanent: true },
      { source: '/fitness-&-health-programs', destination: '/programs', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
      { source: '/instructors', destination: '/team', permanent: true },
      { source: '/coaches', destination: '/team', permanent: true },
      { source: '/directors', destination: '/team', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug*', destination: '/', permanent: true },
      { source: '/reserve-a-free-class', destination: '/', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/request-information', destination: '/', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/services', destination: '/programs', permanent: true },
      { source: '/classes', destination: '/programs', permanent: true },
      { source: '/classes/:path*', destination: '/programs', permanent: true },
      { source: '/pricing', destination: '/faq', permanent: true },
      { source: '/membership', destination: '/faq', permanent: true },
      { source: '/memberships', destination: '/faq', permanent: true },
      
      { source: '/Home/:path*', destination: '/', permanent: true },
      { source: '/home/:path*', destination: '/', permanent: true },
      { source: '/services/:path*', destination: '/programs', permanent: true },
      { source: '/trainer/:path*', destination: '/team', permanent: true },
      { source: '/trainers', destination: '/team', permanent: true },
      { source: '/staff', destination: '/team', permanent: true },
    ];
  },
};

export default nextConfig;
