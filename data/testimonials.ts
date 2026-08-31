export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Abdul took a vague idea and turned it into a working product faster than we thought possible. He thinks like a producer, not just a developer.",
    name: "Sara Malik",
    role: "Founder",
    company: "Quick Compliance",
  },
  {
    id: "t2",
    quote:
      "The AI system he built understood our exact quality-control problem. Clear communication and clean, well-documented code throughout.",
    name: "Hamza Iqbal",
    role: "Operations Lead",
    company: "Manufacturing Client",
  },
  {
    id: "t3",
    quote:
      "Reliable, detail-oriented, and genuinely invested in the outcome. Our storefront looks and performs like a much bigger brand's.",
    name: "Ayesha Raza",
    role: "Founder",
    company: "Perfume Paradise",
  },
];
