import { Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section-container py-24 md:py-32">
      <SectionHeading eyebrow="Wins & Recognition" title="Achievements" />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08} className="card p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Trophy size={18} />
              </div>
              <div>
                <p className="text-xs text-muted2">{item.date}</p>
                <h3 className="mt-1 text-base font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-accent">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
