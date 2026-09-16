"use client";
import { motion, useReducedMotion } from "framer-motion";
import EditorialGrid from "@/components/ui/EditorialGrid";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Reduced motion: returns nothing, so the element just renders in place.
  const rise = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <EditorialGrid />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Ordinal marker and rule, as in the reference */}
        <motion.div
          {...rise(0.1)}
          className="mb-20 flex items-center gap-5 sm:mb-28"
        >
          <span className="ordinal text-accent">01</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="label hidden text-ink-muted sm:block">
            Nairobi, Kenya
          </span>
        </motion.div>

        <div className="text-center">
          <motion.p {...rise(0.2)} className="label mb-7 text-ink-muted">
            Software Engineer
          </motion.p>

          <motion.h1
            {...rise(0.3)}
            className="display text-[clamp(3.25rem,13vw,10.5rem)] text-ink"
          >
            Ruby Mbete
          </motion.h1>

          <motion.p {...rise(0.4)} className="label mt-7 text-accent">
            UI &middot; UX Designer
          </motion.p>
        </div>

        <motion.div
          {...rise(0.55)}
          className="mt-20 flex flex-col items-center gap-10 sm:mt-28"
        >
          <p className="max-w-sm text-center text-[0.9375rem] leading-relaxed text-ink-muted">
            I care about the people behind every screen, crafting interfaces
            that feel intuitive and delightful to use.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#work" className="btn-primary">
              View the work
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue: the page says there is more without saying it */}
      <motion.div
        {...rise(0.8)}
        className="absolute inset-x-0 bottom-10 z-10 flex justify-center"
      >
        <span className="label text-ink-muted">Scroll</span>
      </motion.div>
    </section>
  );
}
