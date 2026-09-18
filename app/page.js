import Header from "./_component/header";
import Skills from "./_component/skills";
import Projects from "./_component/project";
import Experience from "./_component/experience";
import Certificates from "./_component/certificates";
import Education from "./_component/education";
import Contact from "./_component/contact";
import Navigation from "./_component/navigation";
import Footer from "./_component/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />

      <main>
        <Projects />
        <Skills />
        <Experience />
        <Certificates />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
