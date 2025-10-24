"use client";

import { motion } from "framer-motion";

export default function MetricBadge({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 border border-white/15 mr-2 mb-2"
    >
      <span className="text-xs text-white/70">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </motion.div>
  );
}
