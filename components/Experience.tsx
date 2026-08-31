"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-28 md:py-36 bg-bg-secondary">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-text mb-16"
        >
          Experience
        </motion.h2>

        <div className="flex flex-col">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 py-10 border-t border-card-border last:border-b"
            >
              <div>
                <p className="text-sm text-muted">{item.period}</p>
                <h3 className="font-display text-xl text-text mt-2">{item.role}</h3>
                <p className="text-muted text-sm mt-1">{item.organization}</p>
              </div>
              <div className="flex flex-wrap gap-2 content-start">
                {item.focus.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1.5 rounded-full border border-card-border text-text/80"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
