"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Capabilities", href: "#skills" },
  { label: "Current Service", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      return undefined;
    }

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const closeOnOutsideClick = (event) => {
      if (
        isOpen &&
        !panelRef.current?.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      animate={{
        backgroundColor: isHeroVisible
          ? "rgba(11, 11, 10, 0)"
          : "rgba(11, 11, 10, 0.84)",
        borderColor: isHeroVisible
          ? "rgba(243, 240, 232, 0)"
          : "rgba(243, 240, 232, 0.1)",
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
      className={`fixed inset-x-0 top-0 z-50 border-b ${isHeroVisible ? "" : "backdrop-blur-md"}`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex h-20 max-w-400 items-center justify-between px-5 sm:px-8 md:px-12 lg:h-24 lg:px-16">
        <a
          href="#top"
          className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring lg:text-base"
        >
          CN<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-9 lg:flex xl:gap-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden text-[0.62rem] font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring lg:block"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          ref={menuButtonRef}
          className="inline-flex size-11 items-center justify-center text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <AnimatePresence initial={false} mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, rotate: -45, scale: 0.7 }
                }
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, rotate: 45, scale: 0.7 }
                }
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              >
                <X className="size-5" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, rotate: 45, scale: 0.7 }
                }
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, rotate: -45, scale: 0.7 }
                }
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              >
                <Menu className="size-5" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            ref={panelRef}
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: -20, clipPath: "inset(0 0 100% 0)" }
            }
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            exit={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: -14, clipPath: "inset(0 0 100% 0)" }
            }
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-4 top-22 max-h-[70svh] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto border border-foreground/10 bg-[rgb(11_11_10/0.94)] p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:right-8 sm:top-24 sm:p-8 lg:hidden"
          >
            <div className="mb-6 flex items-center justify-between border-b border-foreground/10 pb-4">
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Navigate
              </span>
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: shouldReduceMotion ? 0 : 0.12,
                    staggerChildren: shouldReduceMotion ? 0 : 0.07,
                  },
                },
              }}
              className="space-y-1"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  variants={{
                    hidden: shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, x: -18 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex min-h-11 items-center justify-between border-b border-foreground/10 py-3 font-display text-2xl font-medium uppercase tracking-[0.02em] text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {item.label}
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
