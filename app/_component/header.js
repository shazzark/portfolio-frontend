"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const revealTransition = { duration: 0.68, ease: [0.16, 1, 0.3, 1] };

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/chidozie-nnam-933375258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/DOZIEBUILDS", label: "X" },
  { icon: Github, href: "https://github.com/shazzark", label: "GitHub" },
  { icon: Mail, href: "mailto:chidoziennam@hotmail.com", label: "Email" },
];

export default function Header() {
  const shouldReduceMotion = useReducedMotion();
  const hidden = shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 };
  const imageHidden = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 0.2, scale: 1.05, clipPath: "inset(100% 0 0 0)" };

  return (
    <header
      id="top"
      className="relative isolate min-h-svh overflow-hidden border-b border-border pt-20"
    >
      <motion.div
        initial={imageHidden}
        animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0 0)" }}
        transition={{
          ...revealTransition,
          duration: 1.05,
          delay: shouldReduceMotion ? 0 : 0.12,
        }}
        className="hero-portrait"
        aria-hidden="true"
      >
        <Image
          src="/professional-headshot.jpeg"
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 58vw, 58vw"
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-400 items-start justify-center px-5 pb-8 text-center sm:px-8 sm:pb-10 md:px-12 md:pb-16 lg:items-center lg:justify-start lg:px-16 lg:pb-12 lg:text-left">
        <div className="flex w-full max-w-152 flex-col items-center pt-10 lg:max-w-248 lg:items-start lg:pt-0">
          <h1 className="hero-display relative z-20 max-w-[9ch] text-foreground">
            {["Chidozie", "Nnam"].map((line, index) => (
              <span className="overflow-hidden" key={line}>
                <motion.span
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: "105%" }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...revealTransition,
                    delay: shouldReduceMotion ? 0 : 0.34 + index * 0.12,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={hidden}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...revealTransition,
              delay: shouldReduceMotion ? 0 : 0.72,
            }}
            className="mb-7 mt-8 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm lg:justify-start"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Full-Stack Developer
          </motion.p>

          <motion.div
            initial={hidden}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...revealTransition,
              delay: shouldReduceMotion ? 0 : 0.86,
            }}
            className="relative z-20 max-w-md"
          >
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build digital products from interface to infrastructure, with a
              focus on thoughtful design and solid engineering.
            </p>
          </motion.div>

          <motion.nav
            initial={hidden}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...revealTransition,
              delay: shouldReduceMotion ? 0 : 0.96,
            }}
            aria-label="Social and contact links"
            className="relative z-20 mt-6 flex w-full items-center justify-center gap-1.5 lg:justify-start"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="group inline-flex size-9 items-center justify-center text-muted-foreground transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-accent focus-visible:-translate-y-0.5 focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Icon
                  className="size-4 transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110"
                  aria-hidden="true"
                />
              </a>
            ))}
          </motion.nav>

          <motion.div
            initial={hidden}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...revealTransition,
              delay: shouldReduceMotion ? 0 : 1.1,
            }}
            className="relative z-20 mt-7 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start"
          >
            <a
              className="group inline-flex min-h-11 items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              href="#projects"
            >
              View selected work
              <ArrowDownRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              className="group inline-flex min-h-11 items-center gap-2 border-b border-foreground/50 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              href="#contact"
            >
              Start a conversation
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.9, duration: 0.4 }}
          className="absolute bottom-8 left-5 hidden items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground lg:flex lg:left-16"
        >
          <span>Scroll to explore</span>
          <span className="hero-scroll-line" aria-hidden="true" />
        </motion.div>
      </div>
    </header>
  );
}
