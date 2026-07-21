"use client";

type Props = {
  active: string;
  onChange: (tab: string) => void;
};

const tabs = [
  "Overview",
  "Architecture",
  "Features",
  "Challenges",
  "Future",
];

export default function ProjectTabs({
  active,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 border-b border-border pb-4">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`rounded-full px-4 py-2 transition

          ${
            active === tab
              ? "bg-accent text-background"
              : "bg-surface2 text-muted hover:bg-surface"
          }`}
        >
          {tab}
        </button>

      ))}

    </div>
  );
}