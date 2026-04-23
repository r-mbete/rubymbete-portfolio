"use client";
import { motion } from "framer-motion";

// Floating elements config — position, size, type, animation timing
const floatingElements = [
  // Soft orbs
  {
    type: "orb",
    top: "12%",
    left: "8%",
    size: 8,
    duration: 6,
    delay: 0,
    opacity: 0.4,
  },
  {
    type: "orb",
    top: "70%",
    left: "6%",
    size: 5,
    duration: 7,
    delay: 1.5,
    opacity: 0.3,
  },
  {
    type: "orb",
    top: "20%",
    left: "88%",
    size: 10,
    duration: 8,
    delay: 0.8,
    opacity: 0.35,
  },
  {
    type: "orb",
    top: "75%",
    left: "85%",
    size: 6,
    duration: 6.5,
    delay: 2,
    opacity: 0.3,
  },
  {
    type: "orb",
    top: "45%",
    left: "4%",
    size: 4,
    duration: 9,
    delay: 3,
    opacity: 0.25,
  },
  {
    type: "orb",
    top: "55%",
    left: "93%",
    size: 5,
    duration: 7.5,
    delay: 1,
    opacity: 0.3,
  },
  {
    type: "orb",
    top: "85%",
    left: "45%",
    size: 4,
    duration: 8,
    delay: 2.5,
    opacity: 0.2,
  },
  {
    type: "orb",
    top: "8%",
    left: "52%",
    size: 3,
    duration: 6,
    delay: 4,
    opacity: 0.25,
  },

  // Rings (hollow circles)
  {
    type: "ring",
    top: "18%",
    left: "18%",
    size: 18,
    duration: 10,
    delay: 1,
    opacity: 0.2,
  },
  {
    type: "ring",
    top: "65%",
    left: "78%",
    size: 24,
    duration: 12,
    delay: 2.5,
    opacity: 0.15,
  },
  {
    type: "ring",
    top: "80%",
    left: "20%",
    size: 14,
    duration: 9,
    delay: 0.5,
    opacity: 0.18,
  },
  {
    type: "ring",
    top: "10%",
    left: "72%",
    size: 20,
    duration: 11,
    delay: 3,
    opacity: 0.15,
  },

  // Sparkle dots (tiny bright pinpoints)
  {
    type: "sparkle",
    top: "30%",
    left: "12%",
    size: 3,
    duration: 4,
    delay: 0,
    opacity: 0.6,
  },
  {
    type: "sparkle",
    top: "22%",
    left: "80%",
    size: 2,
    duration: 3.5,
    delay: 1.2,
    opacity: 0.55,
  },
  {
    type: "sparkle",
    top: "60%",
    left: "15%",
    size: 2,
    duration: 5,
    delay: 2,
    opacity: 0.5,
  },
  {
    type: "sparkle",
    top: "72%",
    left: "60%",
    size: 3,
    duration: 4.5,
    delay: 0.8,
    opacity: 0.45,
  },
  {
    type: "sparkle",
    top: "38%",
    left: "90%",
    size: 2,
    duration: 3,
    delay: 3.5,
    opacity: 0.5,
  },
  {
    type: "sparkle",
    top: "88%",
    left: "70%",
    size: 2,
    duration: 4,
    delay: 1.8,
    opacity: 0.4,
  },
  {
    type: "sparkle",
    top: "15%",
    left: "40%",
    size: 2,
    duration: 5,
    delay: 2.8,
    opacity: 0.35,
  },

  // Plus signs
  {
    type: "plus",
    top: "25%",
    left: "92%",
    size: 10,
    duration: 8,
    delay: 0.5,
    opacity: 0.25,
  },
  {
    type: "plus",
    top: "78%",
    left: "10%",
    size: 8,
    duration: 9,
    delay: 2,
    opacity: 0.2,
  },
  {
    type: "plus",
    top: "50%",
    left: "96%",
    size: 6,
    duration: 7,
    delay: 1,
    opacity: 0.2,
  },
  {
    type: "plus",
    top: "5%",
    left: "30%",
    size: 8,
    duration: 10,
    delay: 3,
    opacity: 0.18,
  },
];

function FloatingElement({ el }) {
  const baseAnim = {
    y: [0, -12, 0],
    opacity: [el.opacity * 0.4, el.opacity, el.opacity * 0.4],
  };

  if (el.type === "orb") {
    return (
      <motion.div
        animate={baseAnim}
        transition={{
          duration: el.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: el.delay,
        }}
        className="absolute rounded-full pointer-events-none"
        style={{
          top: el.top,
          left: el.left,
          width: el.size,
          height: el.size,
          background:
            "radial-gradient(circle, rgba(216,180,254,0.9) 0%, rgba(168,85,247,0.6) 50%, transparent 100%)",
          boxShadow: `0 0 ${el.size * 2}px rgba(192,132,252,0.5)`,
        }}
      />
    );
  }

  if (el.type === "ring") {
    return (
      <motion.div
        animate={{
          ...baseAnim,
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: el.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: el.delay,
        }}
        className="absolute rounded-full pointer-events-none"
        style={{
          top: el.top,
          left: el.left,
          width: el.size,
          height: el.size,
          border: `1px solid rgba(167,139,250,${el.opacity})`,
          boxShadow: `0 0 8px rgba(167,139,250,${el.opacity * 0.4})`,
        }}
      />
    );
  }

  if (el.type === "sparkle") {
    return (
      <motion.div
        animate={{
          opacity: [0, el.opacity, 0],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: el.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: el.delay,
        }}
        className="absolute rounded-full pointer-events-none"
        style={{
          top: el.top,
          left: el.left,
          width: el.size,
          height: el.size,
          background: "rgba(245,208,254,1)",
          boxShadow: `0 0 ${el.size * 4}px rgba(245,208,254,0.8), 0 0 ${el.size * 8}px rgba(216,180,254,0.4)`,
        }}
      />
    );
  }

  if (el.type === "plus") {
    return (
      <motion.div
        animate={{
          ...baseAnim,
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: el.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: el.delay,
        }}
        className="absolute pointer-events-none"
        style={{ top: el.top, left: el.left, opacity: el.opacity }}
      >
        {/* Horizontal bar */}
        <div
          className="absolute bg-purple-300/60 dark:bg-purple-400/40 rounded-full"
          style={{
            width: el.size,
            height: el.size * 0.2,
            top: "50%",
            left: "0%",
            transform: "translateY(-50%)",
          }}
        />
        {/* Vertical bar */}
        <div
          className="absolute bg-purple-300/60 dark:bg-purple-400/40 rounded-full"
          style={{
            width: el.size * 0.2,
            height: el.size,
            top: "0%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </motion.div>
    );
  }

  return null;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating decorative elements */}
      {floatingElements.map((el, i) => (
        <FloatingElement key={i} el={el} />
      ))}

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 dark:text-lavender-100 mb-4 leading-none"
          >
            Ruby Mbete
          </motion.h1>

          {/* Roles */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm font-semibold tracking-wide text-purple-primary dark:text-purple-light mb-8"
          >
            Software Engineer{" "}
            <span className="text-gray-400 dark:text-dark-border mx-1">✦</span>{" "}
            UI/UX Designer
          </motion.p>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-500 dark:text-lavender-300 max-w-md mb-10 leading-relaxed"
          >
            I care about the people behind every screen, crafting interfaces
            that feel intuitive and delightful to use.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#experience" className="btn-outline">
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
