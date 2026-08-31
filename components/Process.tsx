"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "Understand the problem, audience, and business goal." },
  { number: "02", title: "Plan", description: "Define features, architecture, technology, and roadmap." },
  { number: "03", title: "Design", description: "Create the user experience and visual direction." },
  { number: "04", title: "Build", description: "Develop, integrate APIs, implement AI, test, and optimize." },
  { number: "05", title: "Launch", description: "Deploy the product and prepare it for real users." },
];

export default function Process() {
  return (
    <section id="process" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-text mb-16 max-w-2xl"
        >
          How I turn ideas into products
        </motion.h2>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid grid-cols-5 gap-6 relative">
          <div className="absolute top-5 left-0 right-0 h-px bg-card-border" />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col gap-4"
            >
              <span
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-display text-xs bg-bg ${
                  i === 0 ? "border-accent text-accent" : "border-card-border text-muted"
                }`}
              >
                {step.number}
              </span>
              <h3 className="font-display text-lg text-text">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-display text-xs ${
                    i === 0 ? "border-accent text-accent" : "border-card-border text-muted"
                  }`}
                >
                  {step.number}
                </span>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-card-border my-2" />}
              </div>
              <div className="pb-10">
                <h3 className="font-display text-lg text-text mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
