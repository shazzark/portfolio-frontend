"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "./_ui/button";
import { Mail, Calendar, Code2 } from "lucide-react";
import { Badge } from "./_ui/badge";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          {/* Header with badge */}
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Code2 className="mr-2 h-3 w-3" />
              Full-Stack Developer
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              About Me
            </h2>
            <div className="mx-auto max-w-2xl">
              <p className="text-lg text-muted-foreground">
                I build web applications that solve real problems and deliver
                seamless user experiences.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-pretty leading-relaxed">
                <p className="text-lg">
                  <span className="font-semibold text-primary">
                    With about 3 years of experience
                  </span>{" "}
                  building web applications such as{" "}
                  <span className="font-semibold">BookFinder</span> and{" "}
                  <span className="font-semibold">
                    Cecilia Crochet E-commerce
                  </span>
                  , my journey in tech started with curiosity about how
                  technology works. Since then, my skills have grown into a
                  career focused on delivering practical, high-quality digital
                  solutions.
                </p>

                <p>
                  I specialize in modern web technologies including{" "}
                  <span className="font-semibold">Next.js</span> and{" "}
                  <span className="font-semibold">Node.js</span>. I write clean,
                  maintainable code and follow best practices to ensure every
                  project is reliable, scalable, and performant.
                </p>

                <p>
                  From understanding your requirements to designing a blueprint
                  and delivering the final product, I ensure every project meets
                  high standards of quality and functionality.
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="mb-4 text-xl font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4   ">
                <a href="#contact">
                  <Button className="gap-2 cursor-pointer">
                    <Mail className="h-4 w-4" />
                    Get In Touch
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column: Stats & Info */}
            <div className="space-y-8">
              {/* Experience Timeline */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Experience Timeline
                </h3>
                <div className="space-y-4">
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                    <h4 className="font-medium">3+ Years</h4>
                    <p className="text-sm text-muted-foreground">
                      Web Development Experience
                    </p>
                  </div>
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                    <h4 className="font-medium">50+ Projects</h4>
                    <p className="text-sm text-muted-foreground">
                      Successfully Delivered (Frontend & Full-Stack)
                    </p>
                  </div>
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                    <h4 className="font-medium">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Always Updating Skills & Exploring New Tech
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Development Philosophy
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Clean, maintainable code over quick fixes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Performance and user experience first</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Collaborative approach to problem-solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Continuous learning and adaptation</span>
                  </li>
                </ul>
              </div>

              {/* Currently */}
              <div className="rounded-xl border bg-primary/5 p-6">
                <h3 className="mb-2 text-lg font-semibold">Currently</h3>
                <p className="text-sm text-muted-foreground">
                  Building modern web applications like BookFinder, Cecilia
                  Crochet E-commerce, and an Estate Management system while
                  exploring new technologies and delivering real-world
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
