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

import GlobalGeometry from "@/components/background/GlobalGeometry";
import SectionGeometry from "@/components/background/SectionGeometry";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050B12] text-foreground">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <GlobalGeometry />

      {/* =====================================================
          WEBSITE CONTENT
      ===================================================== */}

      <div className="relative z-10">

        {/* ===================================================
            HERO
        =================================================== */}

        <Hero />

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <Navbar />

        {/* ===================================================
            ABOUT
        =================================================== */}

        <section className="relative overflow-hidden">
          <SectionGeometry variant="about" />
          <About />
        </section>

        {/* ===================================================
            SKILLS
        =================================================== */}

        <section className="relative overflow-hidden">
          <SectionGeometry variant="skills" />
          <Skills />
        </section>

        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section className="relative overflow-hidden">
          <SectionGeometry variant="projects" />
          <Projects />
        </section>

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section className="relative overflow-hidden">
          <SectionGeometry variant="experience" />
          <Experience />
        </section>

        {/* ===================================================
            EDUCATION
        =================================================== */}

        <section className="relative overflow-hidden">
          <SectionGeometry variant="education" />
          <Education />
        </section>

        {/* ===================================================
            ACHIEVEMENTS
        =================================================== */}

        <section className="relative overflow-hidden">
          <SectionGeometry variant="achievements" />
          <Achievements />
        </section>

        {/* ===================================================
            CERTIFICATIONS
        =================================================== */}

        <section className="relative overflow-hidden">
          <SectionGeometry variant="certifications" />
          <Certifications />
        </section>

        {/* ===================================================
            PUBLICATIONS
        =================================================== */}

        <section className="relative overflow-hidden">
          <SectionGeometry variant="publications" />
          <Publications />
        </section>

        {/* ===================================================
            RESUME
        =================================================== */}

        <section className="relative overflow-hidden">
          <Resume />
        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section className="relative overflow-hidden">
          <SectionGeometry variant="contact" />
          <Contact />
        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <Footer />

      </div>
    </main>
  );
}