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
import EngineeringWorkbench from "@/components/background/EngineeringWorkbench";
import SectionGeometry from "@/components/background/SectionGeometry";
import ImmersiveExperience from "@/components/experience/ImmersiveExperience";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050B12] text-foreground">
      <ImmersiveExperience>
        <GlobalGeometry />
        <EngineeringWorkbench />
        <div className="relative z-10">
          <Hero />
          <Navbar />
          <section className="relative overflow-hidden"><SectionGeometry variant="about" /><About /></section>
          <section className="relative overflow-hidden"><SectionGeometry variant="skills" /><Skills /></section>
          <section className="relative overflow-hidden"><SectionGeometry variant="projects" /><Projects /></section>
          <section className="relative overflow-hidden"><SectionGeometry variant="experience" /><Experience /></section>
          <section className="relative overflow-hidden"><SectionGeometry variant="education" /><Education /></section>
          <section className="relative overflow-hidden"><SectionGeometry variant="achievements" /><Achievements /></section>
          <section className="relative overflow-hidden"><SectionGeometry variant="certifications" /><Certifications /></section>
          <section className="relative overflow-hidden"><SectionGeometry variant="publications" /><Publications /></section>
          <section className="relative overflow-hidden"><Resume /></section>
          <section className="relative overflow-hidden"><SectionGeometry variant="contact" /><Contact /></section>
          <Footer />
        </div>
      </ImmersiveExperience>
    </main>
  );
}
