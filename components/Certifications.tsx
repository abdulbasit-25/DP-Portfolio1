"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 border-y border-card-border">
      <div className="max-w-content mx-auto px-6 md:px-10 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-text"
        >
          Certifications
        </motion.h2>
      </div>

      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-6 px-6 md:px-10 w-max">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              className="shrink-0 w-72 rounded-2xl border border-card-border bg-card p-6 card-hover hover:border-accent/50"
            >
              <p className="text-xs text-muted mb-6">{cert.year}</p>
              <h3 className="font-display text-lg text-text mb-1">{cert.name}</h3>
              <p className="text-sm text-muted">{cert.provider}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
