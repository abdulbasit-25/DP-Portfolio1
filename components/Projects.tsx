"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-text mb-16"
        >
          Selected work
        </motion.h2>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-3xl border border-card-border bg-card overflow-hidden card-hover hover:border-accent/60"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-bg-secondary">
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${
                      project.accent === "lime"
                        ? "bg-gradient-to-br from-[#B6FF4A]/15 to-transparent"
                        : "bg-gradient-to-br from-[#7C3AED]/25 to-transparent"
                    }`}
                  >
                    {project.pipeline ? (
                      <div className="flex flex-col gap-3 px-8">
                        {project.pipeline.map((stage, idx) => (
                          <div key={stage} className="flex items-center gap-3">
                            <span className="text-xs text-muted font-display w-5">
                              {idx + 1}
                            </span>
                            <span className="text-sm text-text/90">{stage}</span>
                            {idx < project.pipeline!.length - 1 && (
                              <span className="text-muted" aria-hidden="true">↓</span>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="font-display text-6xl text-text/10 select-none">
                        {project.number}
                      </span>
                    )}
                  </div>
                  <span className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-bg/70 backdrop-blur text-text opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                    ↗
                  </span>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <p className="section-label uppercase mb-3">{project.category}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-text mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6 max-w-md">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded-full border border-card-border text-text/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-sm font-medium text-text inline-flex items-center gap-2 hover:text-accent transition-colors"
                      >
                        Live Project <span aria-hidden="true">→</span>
                      </a>
                    )}
                    {project.caseStudyUrl && (
                      <a
                        href={project.caseStudyUrl}
                        className="text-sm font-medium text-muted inline-flex items-center gap-2 hover:text-text transition-colors"
                      >
                        View Case Study <span aria-hidden="true">→</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-sm font-medium text-muted inline-flex items-center gap-2 hover:text-text transition-colors"
                      >
                        GitHub <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
