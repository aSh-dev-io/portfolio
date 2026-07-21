"use client";

import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const links = [
    { icon: Mail, label: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: contactInfo.linkedin, href: `https://${contactInfo.linkedin}` },
    { icon: Github, label: "aSh-dev-io", href: contactInfo.github },
  ];

  return (
    <section id="contact" className="section-container py-24 md:py-32">
      <SectionHeading
        eyebrow="Let's Talk"
        title="Get in Touch"
        description="Open to internships, collaborations, and interesting problems. Reach out any time."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="card flex flex-col justify-between p-6 md:p-8">
          <div className="space-y-4">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-surface2 px-4 py-3 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <item.icon size={16} className="text-accent" />
                {item.label}
              </a>
            ))}
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted2">
            <MapPin size={14} className="text-accent" />
            {contactInfo.location}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="card p-6 md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <p className="text-lg font-medium text-foreground">
                Message sent!
              </p>
              <p className="mt-2 text-sm text-muted">
                Thanks for reaching out — I&rsquo;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-muted2">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-surface2 px-4 py-3 text-sm text-foreground placeholder:text-muted2 focus:border-accent/60 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-muted2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-surface2 px-4 py-3 text-sm text-foreground placeholder:text-muted2 focus:border-accent/60 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-muted2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-border bg-surface2 px-4 py-3 text-sm text-foreground placeholder:text-muted2 focus:border-accent/60 focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
                <Send size={15} />
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
