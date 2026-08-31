export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Generative AI",
      "Prompt Engineering",
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud / DevOps",
    skills: ["Git", "GitHub", "Vercel", "AWS", "MongoDB Atlas"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["VS Code", "Figma", "Postman", "GitHub"],
  },
];

export type ConstellationNode = {
  id: string;
  label: string;
  related: string[];
  angle: number;
};

export const constellationNodes: ConstellationNode[] = [
  { id: "ai", label: "AI", related: ["Python", "TensorFlow", "Computer Vision", "LLMs"], angle: 0 },
  { id: "web", label: "WEB", related: ["React", "Next.js", "Tailwind CSS", "JavaScript"], angle: 60 },
  { id: "cloud", label: "CLOUD", related: ["AWS", "Vercel", "MongoDB Atlas", "CI/CD"], angle: 120 },
  { id: "product", label: "PRODUCT", related: ["Roadmapping", "MVP Design", "User Research", "Strategy"], angle: 180 },
  { id: "automation", label: "AUTOMATION", related: ["AI Agents", "Workflows", "APIs", "Scripting"], angle: 240 },
  { id: "design", label: "DESIGN", related: ["Figma", "UX Flows", "Design Systems", "Prototyping"], angle: 300 },
];
