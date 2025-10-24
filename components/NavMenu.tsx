"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);
  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="fixed top-5 right-5 z-40 rounded-lg glass-card px-4 py-2 text-sm hover:glow transition-all"
        style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.4)' }}
      >
        Menu
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="fixed top-0 right-0 z-30 h-full w-[280px] glass-card p-6 shadow-lg"
            style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}
          >
            <h3 className="text-lg mb-6 font-semibold" style={{ color: 'var(--text-primary)' }}>Navigate</h3>
            <ul className="space-y-3">
              {[
                ["Home", "#home"],
                ["Summary", "#summary"],
                ["Work Experience", "#experience"],
                ["Projects", "#projects"],
                ["Technical Skills", "#skills"],
                ["Education", "#education"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a className="block rounded-lg px-3 py-2 hover:bg-white hover:bg-opacity-10 transition-all interactive" href={href} onClick={() => setOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
