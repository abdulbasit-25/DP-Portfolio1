"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative px-6 md:px-10 py-32 md:py-44 overflow-hidden bg-bg-secondary">
      <motion.div
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "linear-gradient(135deg, #B6FF4A, #7C3AED)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="relative max-w-content mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-display font-medium text-3xl md:text-5xl leading-[1.2] text-text max-w-3xl mx-auto"
        >
          &ldquo;Good digital products don&apos;t start with code. They start
          with a problem worth solving.&rdquo;
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-muted text-lg"
        >
          I believe technology should simplify complexity, not add to it.
        </motion.p>
      </div>
    </section>
  );
}
