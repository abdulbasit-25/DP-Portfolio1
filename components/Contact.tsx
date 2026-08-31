"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-text mb-6"
          >
            Have an idea? Let&apos;s build it.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-lg leading-relaxed max-w-md mb-10"
          >
            Tell me what you&apos;re trying to build, and let&apos;s turn the
            idea into something real.
          </motion.p>

          <div className="flex flex-col gap-4 text-sm">
            <a href="mailto:hello@abdulbasit.dev" className="text-text/90 hover:text-accent transition-colors">
              hello@abdulbasit.dev
            </a>
            <a href="https://linkedin.com" className="text-text/90 hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" className="text-text/90 hover:text-accent transition-colors">
              GitHub
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-card-border bg-card p-8 md:p-10 flex flex-col gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-muted">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-xl bg-bg-secondary border border-card-border px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs text-muted">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-xl bg-bg-secondary border border-card-border px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent outline-none"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="project-type" className="text-xs text-muted">Project Type</label>
              <select
                id="project-type"
                name="projectType"
                className="rounded-xl bg-bg-secondary border border-card-border px-4 py-3 text-sm text-text focus:border-accent outline-none"
              >
                <option>Web Development</option>
                <option>AI Solution</option>
                <option>Full-Stack App</option>
                <option>Digital Product</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-xs text-muted">Budget</label>
              <select
                id="budget"
                name="budget"
                className="rounded-xl bg-bg-secondary border border-card-border px-4 py-3 text-sm text-text focus:border-accent outline-none"
              >
                <option>Under $1,000</option>
                <option>$1,000 – $5,000</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs text-muted">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="rounded-xl bg-bg-secondary border border-card-border px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent outline-none resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-bg px-6 py-3.5 font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Start a Conversation <span aria-hidden="true">→</span>
          </button>

          {status === "submitted" && (
            <p role="status" className="text-sm text-accent">
              Thanks — your message has been noted. I&apos;ll get back to you soon.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
