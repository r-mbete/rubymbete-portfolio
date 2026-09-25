"use client";
import { motion, useReducedMotion } from "framer-motion";
import Field from "@/components/ui/Field";
import SectionHead from "@/components/ui/SectionHead";

const projects = [
  {
    ordinal: "01",
    title: "Kanga Archive",
    platform: "Web",
    status: "In progress",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    description:
      "Kanga cloth carries a printed Swahili proverb — the pattern and the message are one object. An interactive archive of the designs, their sayings, and what they mean.",
  },
  {
    ordinal: "02",
    title: "Around Nairobi",
    platform: "Mobile",
    status: "In progress",
    stack: ["React Native", "Expo", "Maps API"],
    description:
      "What is happening in the city this week, built offline-first so it still works on a patchy connection or a dead data bundle.",
  },
];

export default function Work() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <Field
      id="work"
      tone="peri"
      innerClassName="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32"
    >
      <SectionHead ordinal="02" label="Selected Work" />

      <div className="flex flex-col gap-24 sm:gap-32">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            {...reveal}
            className="group grid gap-10 md:grid-cols-4 md:gap-0"
          >
            {/* Plates alternate sides, so the two projects read as a spread. */}
            <div
              className={`md:col-span-2 ${i % 2 ? "md:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[0.75rem] border border-rule-strong hatch">
                <div className="absolute inset-0 flex items-end bg-opposite p-6 transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0)]">
                  <span className="display display-em text-4xl text-ground sm:text-5xl">
                    {project.title}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col justify-center md:col-span-2 ${
                i % 2 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="ordinal text-ink-muted">
                  {project.ordinal}
                </span>
                <span className="label text-ink-muted">{project.platform}</span>
                <span className="chip">{project.status}</span>
              </div>

              <h3 className="display display-3 mb-5">{project.title}</h3>

              <p className="mb-7 text-[0.9375rem] leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Field>
  );
}
