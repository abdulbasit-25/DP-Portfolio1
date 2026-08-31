export type Certification = {
  id: string;
  name: string;
  provider: string;
  year: string;
  url: string;
};

export const certifications: Certification[] = [
  { id: "google-ai", name: "Google AI Essentials", provider: "Google", year: "2024", url: "#" },
  { id: "aws-cloud", name: "AWS Cloud Practitioner", provider: "AWS", year: "2024", url: "#" },
  { id: "github-actions", name: "GitHub Actions", provider: "GitHub", year: "2023", url: "#" },
  { id: "web-dev", name: "Full-Stack Web Development", provider: "Independent", year: "2023", url: "#" },
  { id: "prompt-eng", name: "Prompt Engineering", provider: "DeepLearning.AI", year: "2024", url: "#" },
  { id: "sw-eng", name: "Software Engineering Fundamentals", provider: "Independent", year: "2022", url: "#" },
];
