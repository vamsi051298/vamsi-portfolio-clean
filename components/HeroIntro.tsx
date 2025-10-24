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
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_50%,rgba(0,0,0,0.4),rgba(0,0,0,0.9))]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center p-8"
      >
        <h1 className="text-4xl md:text-6xl font-semibold text-glow">{profile.name}</h1>
        <p className="mt-4 text-lg md:text-xl text-white/80">{profile.tagline}</p>
        <motion.button
          onClick={() => setEnter(true)}
          className="mt-8 rounded-2xl px-6 py-3 glass border border-white/20 hover:border-white/40"
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
