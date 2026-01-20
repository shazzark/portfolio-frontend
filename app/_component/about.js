"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "./_ui/button";
import { Mail, Code2 } from "lucide-react";
import { Badge } from "./_ui/badge";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Express.js",
    "Supabase",
  ];

  return (
    <section
      id="about"
      className="border-t border-border bg-muted/30 py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          {/* Header */}
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Code2 className="mr-2 h-3 w-3" />
              Full-Stack Developer
            </Badge>

            <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              I build modern web applications that solve real problems,
              emphasizing performance, scalability, and clean architecture.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Main Text */}
            <p className="text-lg leading-relaxed text-pretty">
              I’m a full-stack developer with approximately{" "}
              <span className="font-semibold text-primary">
                3 years of experience
              </span>{" "}
              building production-ready web applications such as{" "}
              <span className="font-semibold">BookFinder</span> and{" "}
              <span className="font-semibold">Cecilia Crochet E-commerce</span>.
              I specialize in developing scalable frontend and backend systems
              using modern tools, focusing on maintainability, performance, and
              user experience.
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="mb-4 text-xl font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a href="#contact">
                <Button className="gap-2">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
