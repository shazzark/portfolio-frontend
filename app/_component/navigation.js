"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./themeProvider";
import { Button } from "./_ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Track mount state

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  // Set mounted to true on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only run mobile detection on client
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (!mounted) return;

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, [mounted]);

  // Handle nav click
  const handleNavClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  // Prevent body scroll
  useEffect(() => {
    if (!mounted) return;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, mounted]);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-xl font-bold">
            {"/CN Chidozie Nnam"}
          </a>
          <div className="h-10 w-10"></div> {/* Empty space for theme button */}
        </div>
      </nav>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md"
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-xl font-bold">
            <span className="text-primary">/CN</span> Chidozie Nnam
          </a>
          {/* rest of your nav items */}

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-10 w-10 cursor-pointer"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <ul className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-screen ww-70 border-l border-border bg-background shadow-lg md:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-border px-6">
                <span className="text-lg font-semibold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="p-6">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <a
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-lg font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
                        onClick={handleNavClick}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-border pt-6">
                  <div className="flex items-center justify-between px-4">
                    <span className="text-sm font-medium">Theme</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        toggleTheme();
                        handleNavClick();
                      }}
                    >
                      {theme === "light" ? (
                        <>
                          <Moon className="mr-2 h-4 w-4" />
                          Dark Mode
                        </>
                      ) : (
                        <>
                          <Sun className="mr-2 h-4 w-4" />
                          Light Mode
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
