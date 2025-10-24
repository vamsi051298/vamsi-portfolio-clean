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
        className="fixed top-5 right-5 z-40 rounded-2xl glass px-4 py-2 text-sm shadow-glow hover:shadow-lg hover:shadow-emerald-400/20"
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
            className="fixed top-0 right-0 z-30 h-full w-[280px] glass border-l border-white/10 p-6"
          >
            <h3 className="text-lg mb-4 text-glow">Navigate</h3>
            <ul className="space-y-3">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Core Principles", "#principles"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a className="block rounded-lg px-3 py-2 hover:bg-white/10" href={href} onClick={() => setOpen(false)}>
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
