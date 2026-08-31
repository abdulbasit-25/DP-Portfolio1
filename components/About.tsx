"use client";

import { motion } from "framer-motion";

const timeline = [
  "Idea",
  "Strategy",
  "Design",
  "Build",
  "AI Integration",
  "Deploy",
  "Optimize",
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-semibold text-3xl md:text-[2.75rem] leading-tight tracking-tight text-text">
            More than a developer.
            <br />A digital producer.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-lg leading-relaxed max-w-xl"
          >
            I work across the entire digital production process — from
            defining an idea and designing the experience to developing the
            product, integrating AI, deploying the application, and
            continuously improving it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed max-w-xl"
          >
            My approach combines technical development with creative
            problem-solving. I enjoy turning complex requirements into
            simple, useful, and polished digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-4"
          >
            {timeline.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-card-border px-4 py-2 text-sm text-text/90">
                  {step}
                </span>
                {i < timeline.length - 1 && (
                  <span className="text-muted" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
