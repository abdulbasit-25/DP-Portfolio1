export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  githubUrl?: string;
  pipeline?: string[];
  accent: "lime" | "violet";
};

export const projects: Project[] = [
  {
    id: "quick-compliance",
    number: "01",
    title: "Quick Compliance",
    category: "Business Platform / Full Stack",
    description:
      "A professional accounting and compliance platform designed to simplify business services, client communication, and digital service presentation.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Vercel"],
    liveUrl: "#",
    caseStudyUrl: "#",
    accent: "lime",
  },
  {
    id: "ai-defect-detection",
    number: "02",
    title: "AI-Based Defect Detection",
    category: "Artificial Intelligence / Computer Vision",
    description:
      "An AI-powered computer vision system designed to identify defects from image datasets using machine learning and deep learning techniques.",
    tech: ["Python", "Computer Vision", "Deep Learning", "CNN", "OpenCV", "Machine Learning"],
    githubUrl: "#",
    caseStudyUrl: "#",
    pipeline: ["Image", "Preprocessing", "AI Model", "Defect Detection", "Result"],
    accent: "violet",
  },
  {
    id: "perfume-paradise",
    number: "03",
    title: "Perfume Paradise",
    category: "E-Commerce / Next.js",
    description:
      "A modern perfume e-commerce experience focused on premium product presentation, responsive design, and scalable web architecture.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    accent: "lime",
  },
];
