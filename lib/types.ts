// ===============================
// Project Interface
// ===============================

export interface Project {
  id: string;

  featured: boolean;

  title: string;

  subtitle: string;

  description: string;

  image: string;

  duration: string;

  role: string;

  tags: string[];

  github?: string;

  demoHref?: string;

  overview: string;

  problem: string;

  solution: string;

  architecture: string[];

  features: string[];

  challenges: string[];

  learnings: string[];

  future: string[];
}

// ===============================
// Project Card Props
// ===============================

export interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

// ===============================
// Project Modal Props
// ===============================

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// ===============================
// Project Tabs
// ===============================

export type ProjectTab =
  | "Overview"
  | "Architecture"
  | "Features"
  | "Challenges"
  | "Future";