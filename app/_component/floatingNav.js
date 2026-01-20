"use client";

import { User, Code2, Briefcase, Zap, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingNav({ activeSection }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-card/70 backdrop-blur-xl border border-border rounded-full px-6 py-3 shadow-lg">
        <div className="flex gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`relative p-2 rounded-full transition-all duration-200 group ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-accent"
                }`}
                title={item.label}
              >
                <Icon size={20} />

                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                )}

                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
