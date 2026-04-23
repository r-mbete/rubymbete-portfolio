"use client";
import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Patch 1 — Top Left Purple */}
      <motion.div
        animate={{
          x: [0, 40, -20, 30, 0],
          y: [0, -30, 20, -40, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute -top-40 -left-40
          w-[500px] h-[500px] rounded-full
          bg-purple-400/25 dark:bg-purple-900/20
          blur-[80px]
        "
      />

      {/* Patch 2 — Top Right Pink */}
      <motion.div
        animate={{
          x: [0, -50, 30, -20, 0],
          y: [0, 40, -30, 20, 0],
          scale: [1, 0.9, 1.2, 1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="
          absolute -top-20 right-0
          w-[450px] h-[450px] rounded-full
          bg-pink-300/20 dark:bg-pink-900/15
          blur-[80px]
        "
      />

      {/* Patch 3 — Middle Left Blue */}
      <motion.div
        animate={{
          x: [0, 30, -40, 20, 0],
          y: [0, -20, 40, -30, 0],
          scale: [1, 1.1, 0.95, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="
          absolute top-1/3 -left-20
          w-[400px] h-[400px] rounded-full
          bg-blue-300/20 dark:bg-blue-900/15
          blur-[80px]
        "
      />

      {/* Patch 4 — Middle Right Lavender */}
      <motion.div
        animate={{
          x: [0, -30, 20, -40, 0],
          y: [0, 30, -20, 40, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
        className="
          absolute top-1/2 right-10
          w-[350px] h-[350px] rounded-full
          bg-violet-300/25 dark:bg-violet-900/15
          blur-[80px]
        "
      />

      {/* Patch 5 — Bottom Left Pink */}
      <motion.div
        animate={{
          x: [0, 50, -30, 40, 0],
          y: [0, -40, 30, -20, 0],
          scale: [1, 0.95, 1.2, 1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="
          absolute bottom-1/4 -left-10
          w-[380px] h-[380px] rounded-full
          bg-fuchsia-300/20 dark:bg-fuchsia-900/15
          blur-[80px]
        "
      />

      {/* Patch 6 — Bottom Right Purple */}
      <motion.div
        animate={{
          x: [0, -40, 20, -30, 0],
          y: [0, 20, -40, 30, 0],
          scale: [1, 1.1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 9,
        }}
        className="
          absolute -bottom-20 right-1/4
          w-[420px] h-[420px] rounded-full
          bg-purple-300/20 dark:bg-purple-800/15
          blur-[80px]
        "
      />
    </div>
  );
}
