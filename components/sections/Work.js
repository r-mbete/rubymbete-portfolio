"use client";
import { motion, useReducedMotion } from "framer-motion";

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
    <section id="work" className="relative overflow-hidden py-28 sm:py-36">

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div {...reveal} className="mb-20 flex items-center gap-5">
          <span className="ordinal text-accent">02</span>
          <span className="label text-ink-muted">Selected Work</span>
          <span className="h-px flex-1 bg-rule" />
        </motion.div>

        <div className="flex flex-col gap-24 sm:gap-32">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              {...reveal}
              className="group grid gap-10 md:grid-cols-12 md:gap-12"
            >
              <div className="md:col-span-7">
                <div className="hatch rule-t rule-b rule-l rule-r aspect-[4/3] w-full transition-colors duration-500 group-hover:border-accent" />
              </div>

              <div className="flex flex-col justify-center md:col-span-5">
                <div className="mb-5 flex items-center gap-4">
                  <span className="ordinal text-ink-muted">
                    {project.ordinal}
                  </span>
                  <span className="label text-ink-muted">
                    {project.platform}
                  </span>
                  <span className="label rule-t rule-b rule-l rule-r px-2 py-1 text-accent">
                    {project.status}
                  </span>
                </div>

                <h3 className="display display-3 mb-5 transition-colors duration-500 group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mb-7 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="skill-badge transition-colors duration-300 group-hover:border-rule-strong">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
