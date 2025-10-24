"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export default function HeroIntro() {
  const [enter, setEnter] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(m.matches);
    const listener = () => setPrefersReduced(m.matches);
    m.addEventListener("change", listener);
    return () => m.removeEventListener("change", listener);
  }, []);

  if (enter) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${prefersReduced ? "reduced-motion" : ""}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center p-8"
      >
        <h1 className="text-4xl md:text-6xl font-semibold" style={{ color: 'var(--text-primary)' }}>{profile.name}</h1>
        <p className="mt-4 text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>{profile.tagline}</p>
        <motion.button
          onClick={() => setEnter(true)}
          className="mt-8 rounded-lg px-6 py-3 glass-card hover:glow transition-all"
          style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.4)' }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Enter Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
}
