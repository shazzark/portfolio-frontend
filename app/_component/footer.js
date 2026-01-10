"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    { icon: Mail, href: "mailto:Chidozinnam@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 sm:order-1 lg:order-1"
          >
            <h3 className="text-lg font-bold text-foreground mb-2 sm:mb-3">
              <span className="text-primary">/CN</span> Chidozie Nnam
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building beautiful and functional web experiences
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-3 sm:order-2 lg:order-2 sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 sm:mb-5">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-3">
              {[
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Education",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 sm:order-3 lg:order-3"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 sm:mb-5">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 md:pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left order-2 sm:order-1">
              © {currentYear} Chidozie Nnam. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 order-1 sm:order-2 mb-2 sm:mb-0">
              Made with{" "}
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />{" "}
              using Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
