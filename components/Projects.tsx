"use client";

import { useState } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";

import { projects } from "@/lib/projects";
import type { Project } from "@/lib/types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="section-container py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="PROJECTS"
        title="Featured Engineering Projects"
      />

      <p className="mx-auto mt-5 max-w-3xl text-center leading-7 text-muted">
        A collection of embedded systems, PCB designs, IoT solutions,
        automation projects, and hardware innovations developed through
        practical engineering experience.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn
            key={project.id}
            delay={index * 0.1}
          >
            <ProjectCard
              project={project}
              onOpen={setSelectedProject}
            />
          </FadeIn>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}