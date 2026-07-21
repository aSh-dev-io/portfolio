import { FileText, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <section id="publications" className="section-container py-24 md:py-32">
      <SectionHeading
        eyebrow="Research & Writing"
        title="Publications"
        description="Peer-reviewed research and technical writing exploring machine learning systems, data infrastructure, and applied AI."
      />

      <div className="mt-12 space-y-5">
        {publications.map((pub, i) => (
          <FadeIn key={pub.title} delay={i * 0.08} className="card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <FileText size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted2">
                  {pub.date} • {pub.venue}
                </p>
                <h3 className="mt-2 text-lg font-medium leading-snug text-foreground">
                  {pub.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pub.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={pub.publicationHref} className="btn-secondary !py-2 !px-4 text-xs">
                    View Publication
                    <ExternalLink size={13} />
                  </a>
                  <a href={pub.certificateHref} className="btn-secondary !py-2 !px-4 text-xs">
                    View Certificate
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
