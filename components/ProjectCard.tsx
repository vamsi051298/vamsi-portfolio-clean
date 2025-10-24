"use client";

import { motion } from "framer-motion";
import MetricBadge from "./MetricBadge";

export default function ProjectCard({
  name,
  tech,
  bullets,
  metrics,
}: {
  name: string;
  tech: string[];
  bullets: string[];
  metrics: { label: string; value: string }[];
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-5 border border-white/10 shadow-glow"
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t) => (
          <span key={t} className="text-xs rounded-full bg-white/10 px-2 py-1 border border-white/15">{t}</span>
        ))}
      </div>
      <ul className="list-disc pl-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="mt-3">
        {metrics.map((m) => (
          <MetricBadge key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
    </motion.div>
  );
}
