import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section-container py-24 md:py-32">
      <SectionHeading eyebrow="Continuous Learning" title="Certifications" />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <FadeIn key={cert.title} delay={i * 0.06} className="card flex flex-col p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface2 text-accent">
              <Award size={20} />
            </div>
            <h3 className="mt-4 text-base font-medium leading-snug text-foreground">
              {cert.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
            <p className="mt-1 text-xs text-muted2">{cert.date}</p>

            <a
              href={cert.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dim"
            >
              View Credential
              <ExternalLink size={14} />
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
