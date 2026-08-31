"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, constellationNodes } from "@/data/skills";

export default function Skills() {
  const [active, setActive] = useState(constellationNodes[0].id);
  const activeNode = constellationNodes.find((n) => n.id === active)!;

  const radius = 150;
  const center = 190;

  return (
    <section id="skills" className="px-6 md:px-10 py-28 md:py-36 bg-bg-secondary">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-text mb-16"
        >
          My digital toolkit
        </motion.h2>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto"
            style={{ width: center * 2, height: center * 2 }}
          >
            <svg
              viewBox={`0 0 ${center * 2} ${center * 2}`}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {constellationNodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = center + radius * Math.cos(rad);
                const y = center + radius * Math.sin(rad);
                return (
                  <line
                    key={node.id}
                    x1={center}
                    y1={center}
                    x2={x}
                    y2={y}
                    stroke={node.id === active ? "#B6FF4A" : "#22252B"}
                    strokeWidth={1}
                  />
                );
              })}
            </svg>

            <button
              className="absolute flex items-center justify-center rounded-full border border-accent/60 bg-bg text-center px-4"
              style={{
                width: 120,
                height: 120,
                left: center - 60,
                top: center - 60,
              }}
              aria-hidden="true"
              tabIndex={-1}
            >
              <span className="font-display text-xs text-text leading-tight">
                Digital
                <br />
                Production
              </span>
            </button>

            {constellationNodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = center + radius * Math.cos(rad);
              const y = center + radius * Math.sin(rad);
              const isActive = node.id === active;
              return (
                <button
                  key={node.id}
                  onClick={() => setActive(node.id)}
                  aria-pressed={isActive}
                  className={`absolute flex h-16 w-16 items-center justify-center rounded-full border text-xs font-display transition-colors duration-300 ${
                    isActive
                      ? "border-accent bg-accent text-bg"
                      : "border-card-border bg-card text-text hover:border-accent/60"
                  }`}
                  style={{ left: x - 32, top: y - 32 }}
                >
                  {node.label}
                </button>
              );
            })}
          </motion.div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="section-label uppercase mb-3">{activeNode.label}</p>
                <div className="flex flex-wrap gap-3">
                  {activeNode.related.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-4 py-2 rounded-full border border-card-border text-text/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <p className="text-sm text-muted mb-4">{cat.label}</p>
              <ul className="flex flex-col gap-2">
                {cat.skills.map((s) => (
                  <li key={s} className="text-text/90 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
