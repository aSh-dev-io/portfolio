"use client";

import { X } from "lucide-react";
import { useState } from "react";

import ProjectTabs from "./ProjectTabs";

type Props = {
  project: any;
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

      <div className="max-h-[90vh] w-[90%] max-w-5xl overflow-y-auto rounded-2xl border border-border bg-background p-8">

        <div className="mb-8 flex items-start justify-between">

          <div>

            <p className="text-accent">
              {project.subtitle}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {project.title}
            </h2>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <ProjectTabs
          active={tab}
          onChange={setTab}
        />

        <div className="mt-8">

          {tab === "Overview" && (
            <p>{project.overview}</p>
          )}

          {tab === "Architecture" && (

            <div className="space-y-3">

              {project.architecture.map((step: string) => (

                <div
                  key={step}
                  className="rounded-lg border border-border p-4"
                >
                  {step}
                </div>

              ))}

            </div>

          )}

          {tab === "Features" && (

            <ul className="list-disc space-y-2 pl-6">

              {project.features.map((item: string) => (
                <li key={item}>{item}</li>
              ))}

            </ul>

          )}

          {tab === "Challenges" && (

            <ul className="list-disc space-y-2 pl-6">

              {project.challenges.map((item: string) => (
                <li key={item}>{item}</li>
              ))}

            </ul>

          )}

          {tab === "Future" && (

            <ul className="list-disc space-y-2 pl-6">

              {project.future.map((item: string) => (
                <li key={item}>{item}</li>
              ))}

            </ul>

          )}

        </div>

      </div>

    </div>

  );
}