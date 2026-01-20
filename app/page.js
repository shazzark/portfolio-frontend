"use client";

import { useEffect, useState } from "react";

import Header from "./_component/header";
import About from "./_component/about";
import Skills from "./_component/skills";
import Projects from "./_component/project";
import Experience from "./_component/experience";
import Education from "./_component/education";
import Contact from "./_component/contact";
import Navigation from "./_component/navigation";
import Footer from "./_component/footer";
import FloatingNav from "./_component/floatingNav";
import { ThemeProvider } from "./_component/themeProvider";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Header />

        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </main>

        {/* Floating Navigation */}
        <FloatingNav activeSection={activeSection} />
      </div>
    </ThemeProvider>
  );
}
