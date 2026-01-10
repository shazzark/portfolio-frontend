import Header from "./_component/header";
import About from "./_component/about";
import Skills from "./_component/skills";
import Projects from "./_component/project";
import Experience from "./_component/experience";
import Education from "./_component/education";
import Contact from "./_component/contact";
import Navigation from "./_component/navigation";
import Footer from "./_component/footer";
import { ThemeProvider } from "./_component/themeProvider";

export default function Portfolio() {
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
      </div>
    </ThemeProvider>
  );
}
