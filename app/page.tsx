import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Publications from "@/components/Publications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ================= Navigation ================= */}
      <Navbar />

      {/* ================= Hero ================= */}
      <Hero />

      {/* ================= About ================= */}
      <About />

      {/* ================= Skills ================= */}
      <Skills />

      {/* ================= Projects ================= */}
      <Projects />

      {/* ================= Experience ================= */}
      <Experience />

      {/* ================= Education ================= */}
      <Education />

      {/* ================= Achievements ================= */}
      <Achievements />

      {/* ================= Certifications ================= */}
      <Certifications />

      {/* ================= Publications ================= */}
      <Publications />

      {/* ================= Resume ================= */}
      <Resume />

      {/* ================= Contact ================= */}
      <Contact />

      {/* ================= Footer ================= */}
      <Footer />
    </main>
  );
}