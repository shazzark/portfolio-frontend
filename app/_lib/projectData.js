export const projectsData = [
  {
    _id: "1",
    slug: "bookfinder",
    title: "BookFinder",
    description: "Search and explore books using the Google Books API.",
    longDescription:
      "A full-featured book discovery app with search, filtering, bookmarking, and authentication.",
    technologies: ["Next.js", "React", "Tailwind", "Supabase"],
    featured: true,
    category: "frontend",
    liveUrl: "https://the-bookfinder-v2.vercel.app/ ",
    githubUrl: "https://github.com/shazzark/the-bookfinder-v2",
    imageUrl: "/images/bookfinder-preview.png",
    createdAt: "2025-01-01",
    order: 6,
  },

  {
    _id: "2",
    slug: "estate-management",
    title: "Estate Management System",
    description: "Manage properties, tenants, and payments.",
    longDescription:
      "A real estate management platform with dashboard, listings, and admin controls.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    featured: true,
    category: "Full Stack",
    liveUrl: "https://luxe-estates-app.vercel.app/",
    githubUrl: "https://github.com/shazzark/real-estatemanagement-frontend",
    imageUrl: "/images/luxeEstate-preview.png",
    createdAt: "2024-12-15",
    order: 5,
  },
  {
    _id: "3",
    slug: "storepro-ecommerce",
    title: "StorePro E-commerce Platform",
    description:
      "A scalable single-vendor e-commerce platform with production-ready full-stack architecture.",
    longDescription:
      "This platform solves poorly structured product systems, weak authentication, mismatched admin dashboards, and frontend-backend misalignment. Built with Next.js, Tailwind CSS, Framer Motion, Node.js, Express, and MongoDB, it features advanced product modeling, secure JWT authentication with roles, admin workflows, and a backend-first architecture for scalability and reliability.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    featured: true,
    category: "Full Stack",
    liveUrl: "https://storepro-tau.vercel.app/",
    githubUrl: "https://github.com/shazzark/Scalable-Ecommerce-website-frontend-", // add if you have a repo link
    imageUrl: "/images/storepro-preview.png",
    createdAt: "2026-01-23",
    order: 1,
  },
  {
    _id: "4",
    slug: "flight-booking-system",
    title: "Flight Booking System",
    description:
      "Full-stack flight booking platform with flight search, authentication, role-based admin management, booking workflows, simulated payments, and real-time flight status updates.",
    longDescription:
      "This project is built with Next.js (App Router), Tailwind CSS, Framer Motion, and Lucide Icons, with cookie-based JWT authentication. Features include role-based access (User/Admin), flight search by origin, destination, and date, booking lifecycle management (pending → payment → confirmed → cancellation), secure payments integration (mock-ready / extendable to Stripe), and an admin dashboard to manage flights, bookings, and payments. Fully responsive UI with smooth animations, clean architecture, and proper REST API consumption ensures production-ready frontend/backend interaction.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],
    featured: true,
    category: "Full Stack",
    liveUrl: "https://skybookapp.vercel.app/",
    githubUrl: "https://github.com/shazzark/flight-booking-system-frontend", // Add GitHub link if available
    imageUrl: "/images/flight-booking-preview.png",
    createdAt: "2026-01-23",
    order: 2,
  },
  {
    _id: "5",
    slug: "cecilia-crochet",
    title: "Cecilia Crochet",
    description:
      "A modern e-commerce website for handcrafted crochet products with smooth UI and backend support.",
    longDescription:
      "Cecilia Crochet is a fully responsive frontend e-commerce platform built with React, Tailwind CSS, Framer Motion, and Supabase. It allows users to browse and purchase handcrafted crochet products with a polished shopping experience. Features include product listings, filtering, bookmarking, user authentication, and smooth animations throughout the site. The backend is powered by Supabase for authentication and data management, ensuring a reliable and scalable architecture.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      // "User Authentication",
      // "E-commerce"
    ],
    featured: true,
    category: "Frontend  ",
    liveUrl: "https://cecilia-crochet-l5w5.vercel.app/#",
    githubUrl: "https://github.com/shazzark/cecilia-crochet", // Add GitHub link if available
    imageUrl: "/images/cecilia-preview.png",

    createdAt: "2026-01-23",
    order: 3,
  },
  {
    _id: "6",
    slug: "cinebook",
    title: "CineBook",
    description:
      "A full-stack movie reservation platform with movie discovery, showtime scheduling, interactive seat selection, secure reservations, an admin CMS, and TMDB-powered movie imports.",
    longDescription:
      "CineBook is a full-stack movie reservation platform built with Next.js, TypeScript, MongoDB, Mongoose, NextAuth, TanStack Query, and Tailwind CSS. It features movie discovery, showtime scheduling, interactive seat selection, secure reservations, an admin CMS, and TMDB-powered movie imports.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "TanStack Query",
      "Tailwind CSS",
    ],
    featured: true,
    category: "Full Stack",
    liveUrl: "https://cinebook-swart.vercel.app/",
    githubUrl: "https://github.com/shazzark/movie-reservation-system",
    imageUrl: "/images/cinebook-preview.png",
    createdAt: "2026-09-26",
    order: 4,
  },
];
