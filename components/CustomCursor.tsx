"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='view']")) {
        setLabel("VIEW");
      } else if (target.closest("a, button")) {
        setLabel("•");
      } else {
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] flex items-center justify-center rounded-full border border-accent/70 text-[10px] tracking-wide text-accent font-display mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: label === "VIEW" ? 56 : label ? 18 : 10,
        height: label === "VIEW" ? 56 : label ? 18 : 10,
      }}
      transition={{ duration: 0.2 }}
    >
      {label === "VIEW" ? "VIEW" : null}
    </motion.div>
  );
}
