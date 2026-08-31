"use client";

import { motion } from "framer-motion";

type Service = {
  number: string;
  title: string;
  description: string;
  list: string[];
  listLabel: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description: "Build modern responsive websites and web applications.",
    listLabel: "Technologies",
    list: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "AI Solutions",
    description: "Build AI-powered applications and intelligent workflows.",
    listLabel: "Technologies",
    list: ["Python", "Machine Learning", "Computer Vision", "Generative AI", "LLMs", "AI APIs"],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description: "Develop complete applications from frontend to backend.",
    listLabel: "Technologies",
    list: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT", "Cloud Deployment"],
  },
  {
    number: "04",
    title: "Digital Product Development",
    description: "Turn concepts into functional MVPs and digital products.",
    listLabel: "Process",
    list: ["Idea", "Prototype", "Development", "Testing", "Launch"],
  },
  {
    number: "05",
    title: "AI Automation",
    description: "Automate repetitive workflows using AI and APIs.",
    listLabel: "Examples",
    list: ["AI assistants", "Content automation", "Document processing", "Data extraction", "Workflow automation"],
  },
  {
    number: "06",
    title: "Digital Strategy",
    description: "Help transform an idea into a practical digital solution.",
    listLabel: "Services",
    list: ["Product planning", "Technology selection", "MVP planning", "UX planning", "Technical architecture"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-28 md:py-36 bg-bg-secondary">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-text max-w-lg mb-16"
        >
          What I produce
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-border rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="bg-bg-secondary p-8 flex flex-col gap-4 card-hover hover:bg-card"
            >
              <span className="font-display text-xs text-muted">{service.number}</span>
              <h3 className="font-display text-xl text-text">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              <div className="mt-2">
                <p className="text-xs text-muted mb-2">{service.listLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {service.list.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full border border-card-border text-text/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
