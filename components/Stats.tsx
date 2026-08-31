"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

type Stat = {
  value: number | string;
  suffix?: string;
  label: string;
};

export const statsData: Stat[] = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Core Technologies" },
  { value: "AI + WEB", label: "Primary Focus" },
  { value: "24/7", label: "Curiosity" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="px-6 md:px-10 py-16 border-y border-card-border">
      <div className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {statsData.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-display text-3xl md:text-4xl text-text">
              {typeof stat.value === "number" ? (
                <Counter value={stat.value} suffix={stat.suffix} />
              ) : (
                stat.value
              )}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
