"use client";
import { motion } from "framer-motion";
import { heroElements } from "@/components/ui/FloatingElements";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {heroElements}

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 dark:text-lavender-100 mb-4 leading-none"
          >
            Ruby Mbete
          </motion.h1>

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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-500 dark:text-lavender-300 max-w-md mb-10 leading-relaxed"
          >
            I care about the people behind every screen, crafting interfaces
            that feel intuitive and delightful to use.
          </motion.p>

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
