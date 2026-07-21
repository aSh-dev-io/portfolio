"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-container py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="SKILLS"
        title="Technologies I Work With"
      />

      <p
        className="mx-auto mt-5 max-w-3xl text-center leading-8"
        style={{ color: "var(--muted)" }}
      >
        A collection of programming languages, embedded platforms,
        PCB design software, simulation tools and development
        technologies that I use to design, prototype and build
        electronic systems.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {skillGroups.map((group, index) => (

          <FadeIn
            key={group.title}
            delay={index * 0.08}
            className="group"
          >

            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="card h-full rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_35px_rgba(0,229,255,.12)]"
            >

              {/* Header */}

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-semibold text-foreground">
                  {group.title}
                </h3>

                <span className="rounded-full border border-white/10 bg-surface2 px-3 py-1 text-xs text-muted2">
                  {group.skills.length}{" "}
                  {group.skills.length === 1
                    ? "Technology"
                    : "Technologies"}
                </span>

              </div>

              {/* Divider */}

              <div className="my-5 h-px w-full bg-white/10" />

              {/* Skills */}

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (

                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    className="chip cursor-default"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          </FadeIn>

        ))}

      </div>
    </section>
  );
}