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
      href: "https://www.linkedin.com/in/chidozie-nnam-933375258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/DOZIEBUILDS",
      label: "Twitter",
    },
  ];

  return (
    <header className="container mx-auto mt-20 px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-12 md:text-left"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/professional-headshot.jpeg"
              alt="Your Name"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary/20"
            />
          </motion.div>
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              {" Chidozie Nnam"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 text-xl text-muted-foreground md:text-2xl"
            >
              {"Full Stack Developer"}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 text-pretty leading-relaxed text-foreground/80"
            >
              With over 3 years of experience building web applications, my
              journey in tech began with curiosity about how technology works.
              Since then, my skills have evolved into a career focused on
              delivering high-quality digital experiences. I specialize in
              modern web technologies including Next.js and Node.js, creating
              clean, maintainable code and end-to-end solutions—from
              understanding requirements to delivering the final product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
