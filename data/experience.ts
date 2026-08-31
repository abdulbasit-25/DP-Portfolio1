export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  focus: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "quant-data-solutions",
    role: "Web Development Intern",
    organization: "Quant Data Solutions",
    period: "2024 — Present",
    focus: [
      "Frontend development",
      "React.js",
      "Web applications",
      "UI implementation",
      "API integration",
    ],
  },
  {
    id: "ai-technology-projects",
    role: "AI & Technology Projects",
    organization: "Independent / Self-Directed",
    period: "2023 — Present",
    focus: [
      "Artificial Intelligence",
      "Generative AI",
      "Computer Vision",
      "Full-stack applications",
      "Cloud technologies",
    ],
  },
];
