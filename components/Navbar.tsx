"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-card-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a
          href="#home"
          className="font-display font-semibold text-lg tracking-tight text-text"
        >
          John Doe
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full border border-card-border px-5 py-2.5 text-sm font-body text-text hover:border-accent hover:text-accent transition-colors duration-300"
        >
          Let&apos;s Work Together <span aria-hidden="true">→</span>
        </a>

        <button
          className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-6 bg-text transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-bg border-b border-card-border"
          >
            <ul className="flex flex-col px-6 py-6 gap-5 font-body text-lg">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-text/90 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex mt-2 items-center gap-2 rounded-full bg-accent text-bg px-5 py-3 text-sm font-medium"
                >
                  Let&apos;s Work Together →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
