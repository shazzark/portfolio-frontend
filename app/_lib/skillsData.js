// app/_lib/skillsData.js

// import { Server, Layout, Wrench } from "lucide-react";

export const skillsData = {
  featuredSkills: [
    {
      name: "Frontend Development",
      description: "Building responsive and dynamic user interfaces",
      icon: "Layout",
    },
    {
      name: "Backend Development",
      description: "APIs, authentication, databases, and business logic",
      icon: "Server",
    },
    {
      name: "Cloud & DevOps",
      description: "Deployment, hosting, CI/CD pipelines",
      icon: "Cloud",
    },
    {
      name: "UI / UX Design",
      description: "Crafting modern and usable interfaces",
      icon: "Palette",
    },
  ],

  categories: [
    {
      key: "frontend",
      title: "Frontend",
      icon: "frontend",
      color: "bg-primary",
      skills: [
        { id: 1, name: "React", icon: "react", years: 3, level: 90 },
        { id: 2, name: "Next.js", icon: "nextjs", years: 2, level: 85 },
        { id: 3, name: "Tailwind CSS", icon: "tailwind", years: 3, level: 80 },
        { id: 4, name: "TypeScript", icon: "typescript", months: 2, level: 40 },
        { id: 5, name: "JavaScript", icon: "javascript", years: 3, level: 95 },
        { id: 6, name: "HTML5", icon: "html5", years: 3, level: 95 },
        { id: 7, name: "CSS3", icon: "css3", years: 3, level: 90 },
      ],
    },

    {
      key: "backend",
      title: "Backend",
      icon: "Server",
      color: "bg-tertiary",
      skills: [
        { id: 8, name: "Node.js", icon: "nodejs", years: 3, level: 90 },
        { id: 9, name: "Express.js", icon: "express", years: 3, level: 85 },
        { id: 10, name: "MongoDB", icon: "mongodb", years: 2, level: 80 },

        { id: 11, name: "REST API Design", icon: "api", years: 3, level: 90 },
        {
          id: 12,
          name: "Authentication & Authorization",
          icon: "auth",
          years: 2,
          level: 85,
        },
        {
          id: 13,
          name: "Database Modeling",
          icon: "database",
          years: 2,
          level: 80,
        },
        {
          id: 14,
          name: "Backend Deployment",
          icon: "deploy",
          years: 2,
          level: 80,
        },
        { id: 15, name: "Supabase", icon: "supabase", years: 1, level: 75 },
      ],
    },

    {
      key: "tools",
      title: "Tools & DevOps",
      icon: "Cloud",
      color: "bg-accent",
      skills: [
        { id: 16, name: "Git", icon: "git", years: 3, level: 90 },
        { id: 17, name: "Vercel", icon: "vercel", years: 2, level: 80 },
        { id: 18, name: "GitHub", icon: "github", years: 3, level: 85 },
        { id: 19, name: "Figma", icon: "figma", years: 2, level: 75 },
        { id: 20, name: "Render", icon: "render", years: 1, level: 70 },
        { id: 21, name: "Framer Motion", icon: "framer", years: 1, level: 75 },
      ],
    },
  ],

  stats: {
    maxExperience: 3,
    totalSkills: 21,
    totalCategories: 3,
  },
};
