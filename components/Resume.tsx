import { FileDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Resume() {
  return (
    <section className="section-container py-24 md:py-32">
      <FadeIn>
        <div className="card relative flex flex-col items-center overflow-hidden px-8 py-16 text-center md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
          <p className="eyebrow relative">One Page. Everything.</p>
          <h2 className="section-title relative">My Resume</h2>
          <p className="relative mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            A concise, up-to-date summary of my education, skills, and
            project experience — ready for recruiters.
          </p>
          <a
            href="https://drive.google.com/file/d/1q0PhNqjIfc-SdtzN9pcNBeexDeORDaNd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary relative mt-8"
          >
            Download Resume (PDF)
            <FileDown size={16} />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
