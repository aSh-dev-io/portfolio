"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Clock,
  Github,
  Star,
  User,
} from "lucide-react";

import type { ProjectCardProps } from "@/lib/types";

export default function ProjectCard({
  project,
  onOpen,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-accent/40
        hover:shadow-[0_0_40px_rgba(0,229,255,.12)]
      "
    >
      {/* Image */}

      <div className="relative aspect-video overflow-hidden bg-surface2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {project.featured && (
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-background">
            <Star size={14} fill="currentColor" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-xs uppercase tracking-widest text-accent">
          {project.subtitle}
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-foreground">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-muted">
          {project.description}
        </p>

        {/* Metadata */}

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted2">

          <div className="flex items-center gap-2">
            <Clock size={15} />
            {project.duration}
          </div>

          <div className="flex items-center gap-2">
            <User size={15} />
            {project.role}
          </div>

        </div>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tags.map((tag) => (
            <span
              key={tag}
              className="chip"
            >
              {tag}
            </span>
          ))}

        </div>

        {/* Divider */}

        <div className="my-6 h-px w-full bg-white/10" />

        {/* Buttons */}

        <div className="flex items-center justify-between">

          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 font-medium text-accent transition hover:gap-3"
          >
            View Details

            <ArrowUpRight size={16} />
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-2 transition hover:border-accent hover:text-accent"
            >
              <Github size={18} />
            </a>
          )}

        </div>

      </div>
    </article>
  );
}