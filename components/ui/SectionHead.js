"use client";
import { motion } from "framer-motion";

// Ordinal, label and rule on one line, then the two-part display heading.
export default function SectionHead({ ordinal, label, title, em }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16 sm:mb-20"
    >
      <div className="mb-8 flex items-center gap-5">
        <span className="ordinal text-accent">{ordinal}</span>
        <span className="label text-ink-muted">{label}</span>
        <span className="h-px flex-1 bg-rule-strong" />
      </div>
      {title && (
        <h2 className="display display-2 max-w-3xl">
          {title} <span className="display-em">{em}</span>
        </h2>
      )}
    </motion.header>
  );
}
