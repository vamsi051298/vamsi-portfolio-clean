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
        className="fixed top-5 right-5 z-40 rounded-lg bg-white border border-gray-200 px-4 py-2 text-sm shadow-sm hover:shadow-md transition-shadow"
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
            className="fixed top-0 right-0 z-30 h-full w-[280px] bg-white border-l border-gray-200 p-6 shadow-lg"
          >
            <h3 className="text-lg mb-4 font-semibold">Navigate</h3>
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
                  <a className="block rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors" href={href} onClick={() => setOpen(false)}>
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
