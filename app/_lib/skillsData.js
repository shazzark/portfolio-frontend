// app/_lib/skillsData.js

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
        { id: 1, name: "React", icon: "react" },
        { id: 2, name: "Next.js", icon: "nextjs" },
        { id: 3, name: "Tailwind CSS", icon: "tailwind" },
        { id: 4, name: "TypeScript", icon: "typescript" },
        { id: 5, name: "JavaScript", icon: "javascript" },
        { id: 6, name: "HTML5", icon: "html5" },
        { id: 7, name: "CSS3", icon: "css3" },
      ],
    },

    {
      key: "backend",
      title: "Backend",
      icon: "Server",
      color: "bg-tertiary",
      skills: [
        { id: 8, name: "Node.js", icon: "nodejs" },
        { id: 9, name: "Express.js", icon: "express" },
        { id: 11, name: "REST API Design", icon: "api" },
        {
          id: 12,
          name: "Authentication & Authorization",
          icon: "auth",
        },
        {
          id: 13,
          name: "Database Modeling",
          icon: "database",
        },
        {
          id: 14,
          name: "Backend Deployment",
          icon: "deploy",
        },
      ],
    },

    {
      key: "database",
      title: "Database",
      icon: "database",
      color: "bg-tertiary",
      skills: [
        { id: 10, name: "MongoDB", icon: "mongodb" },
        { id: 15, name: "PostgreSQL", icon: "postgresql" },
        { id: 22, name: "Supabase", icon: "supabase" },
      ],
    },

    {
      key: "mobile",
      title: "Mobile Development",
      icon: "Smartphone",
      color: "bg-primary",
      skills: [{ id: 23, name: "React Native", icon: "reactnative" }],
    },

    {
      key: "tools",
      title: "Tools & DevOps",
      icon: "Cloud",
      color: "bg-accent",
      skills: [
        { id: 16, name: "Git", icon: "git" },
        { id: 17, name: "Vercel", icon: "vercel" },
        { id: 18, name: "GitHub", icon: "github" },
        { id: 19, name: "Figma", icon: "figma" },
        { id: 20, name: "Render", icon: "render" },
        { id: 21, name: "Framer Motion", icon: "framer" },
      ],
    },
  ],
};
