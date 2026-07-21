import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-container py-24 md:py-32">
      <SectionHeading
        eyebrow="Academic Journey"
        title="Education"
        description="My academic journey has built a strong foundation in electronics, automation, embedded systems, and continuous learning."
      />

      <div className="relative mt-12 space-y-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:hidden before:w-px before:bg-border md:before:block">
        {education.map((edu, i) => (
          <FadeIn key={edu.title} delay={i * 0.08} className="relative md:pl-14">
            <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-accent md:flex">
              <GraduationCap size={18} />
            </div>

            <div className="card p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="chip">{edu.period}</span>
                  <h3 className="mt-3 text-lg font-medium leading-snug text-foreground">
                    {edu.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{edu.org}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted2">
                    <MapPin size={12} />
                    {edu.location}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface2 px-4 py-2 text-center">
                  <p className="text-lg font-medium text-foreground">
                    {edu.score}
                  </p>
                </div>
              </div>

              {edu.learning.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-xs font-medium uppercase tracking-wide text-muted2">
                    Key Learning
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.learning.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
