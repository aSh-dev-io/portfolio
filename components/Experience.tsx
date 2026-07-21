import { MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-24 md:py-32">
      <SectionHeading
        eyebrow="Industry Experience"
        title="Experience & Training"
        description="Practical industrial exposure that strengthened my understanding of automation systems, industrial instrumentation, and real-world engineering workflows."
      />

      <div className="mt-12 space-y-6">
        {experience.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08} className="card p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="chip">{item.type}</span>
                <h3 className="mt-3 text-xl font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-accent">{item.org}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted2">
                  <MapPin size={12} />
                  {item.location}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-foreground">{item.period}</p>
                <p className="text-xs text-muted2">{item.duration}</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted">
              {item.description}
            </p>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  Key Responsibilities
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {item.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground">
                  Technologies
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
