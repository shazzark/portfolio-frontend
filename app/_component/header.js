"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./_ui/button";
import Image from "next/image";

export default function Header() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shazzark", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/chidozie-nnam-933375258",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/DOZIEBUILDS",
      label: "Twitter",
    },
  ];

  return (
    <header className="container mx-auto mt-20 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-12 md:text-left"
        >
          {/* Avatar */}

          <div className="shrink-0 transition-transform hover:scale-105 hover:shadow-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/professional-headshot.jpeg"
                alt="Chidozie Nnam"
                width={160}
                height={160}
                priority
                className="rounded-full border-2 border-primary/20 ring-2 ring-primary/30 ring-offset-2"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="mb-2 text-4xl font-bold md:text-5xl">
              Chidozie Nnam
            </h1>

            <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
              Full-Stack Developer
            </p>

            <p className="mb-6 max-w-xl text-foreground/80">
              I build scalable, production-ready web applications using modern
              JavaScript technologies, focusing on performance, maintainability,
              and real-world usability.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="outline" size="icon" asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
