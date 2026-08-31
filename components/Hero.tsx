"use client";

import { motion } from "framer-motion";

const workflow = ["Idea", "Design", "AI", "Development", "Launch"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-content mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label uppercase mb-6"
          >
            Digital Producer / AI × Web × Product
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-[2.6rem] leading-[1.08] md:text-6xl md:leading-[1.05] tracking-tight text-text max-w-xl"
          >
            I build digital products that turn ideas into{" "}
            <span className="text-gradient">impact</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-muted text-lg max-w-md leading-relaxed"
          >
            I design, develop, and launch intelligent digital experiences
            using modern web technologies, artificial intelligence, and
            product thinking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-bg px-6 py-3.5 font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View My Work
              <motion.span
                aria-hidden="true"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-card-border px-6 py-3.5 font-medium text-sm text-text hover:border-accent hover:text-accent transition-colors"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <div className="text-sm">
              <p className="text-text/90">Available for selected projects</p>
              <p className="text-muted text-xs">Remote · Worldwide</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-card-border bg-card/60 backdrop-blur-sm p-8 md:p-10">
            <p className="section-label uppercase mb-8">Production Flow</p>
            <div className="flex flex-col gap-0">
              {workflow.map((step, i) => (
                <div key={step} className="flex flex-col items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex items-center gap-4"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-display ${
                        i === 2
                          ? "border-accent text-accent"
                          : "border-card-border text-muted"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-display text-lg text-text">
                      {step}
                    </span>
                  </motion.div>
                  {i < workflow.length - 1 && (
                    <div className="ml-5 h-8 w-px bg-card-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute -top-6 -right-6 hidden md:flex h-20 w-20 items-center justify-center rounded-2xl border border-card-border bg-card font-display text-xs text-accent"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            AI
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-6 hidden md:flex h-16 w-16 items-center justify-center rounded-2xl border border-card-border bg-card font-display text-xs text-accent-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
          >
            WEB
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
