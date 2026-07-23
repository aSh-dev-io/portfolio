"use client";

import { useState } from "react";
import { X } from "lucide-react";
import ProjectTabs from "./ProjectTabs";
import { Project } from "@/lib/types";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  const [tab, setTab] = useState("Overview");

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="relative max-h-[90vh] w-[90%] max-w-5xl overflow-y-auto rounded-2xl border border-border bg-background p-8 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-lg p-2 transition hover:bg-white/10"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <p className="text-accent text-sm font-medium">
            {project.subtitle}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {project.title}
          </h2>

          <p className="mt-4 text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Tabs */}
        <ProjectTabs
          active={tab}
          onChange={setTab}
        />

        {/* Content */}
        <div className="mt-8">

          {tab === "Overview" && (
            <div className="space-y-4">
              <p>{project.overview}</p>
            </div>
          )}

          {tab === "Architecture" && (
            <div className="space-y-4">
              {project.architecture.map((step, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border p-4"
                >
                  {step}
                </div>
              ))}
            </div>
          )}

          {tab === "Features" && (
            <ul className="list-disc space-y-2 pl-6">
              {project.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {tab === "Challenges" && (
            <ul className="list-disc space-y-2 pl-6">
              {project.challenges.map((challenge, index) => (
                <li key={index}>
                  {challenge}
                </li>
              ))}
            </ul>
          )}

          {tab === "Future" && (
            <ul className="list-disc space-y-2 pl-6">
              {project.future.map((futureItem, index) => (
                <li key={index}>
                  {futureItem}
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
}