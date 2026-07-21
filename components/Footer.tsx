import { Github, Linkedin, ArrowUp } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-xs text-muted2">
          © 2026 Ashwin M. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Github size={15} />
          </a>
          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Linkedin size={15} />
          </a>
        </div>

        <a
          href="#intro"
          className="flex items-center gap-1.5 text-xs text-muted2 transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
