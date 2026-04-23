"use client";
import { motion } from "framer-motion";
import { experienceElements } from "@/components/ui/FloatingElements";

const experiences = [
  {
    company: "Savannah Informatics",
    role: "Software Engineer",
    period: "Mar 2025 — Present",
    current: true,
    description:
      "Building and optimizing frontend systems for production-level healthtech platforms used in real clinical environments across Kenya.",
    tech: ["Angular", "TypeScript", "RESTful APIs", "FHIR", "Git", "Figma"],
    bullets: [
      "Built frontend modules for Slade360 Advantage, a comprehensive Medical Service Provider suite improving hospital efficiency and patient intake speed.",
      "Developed and optimized the UI for Empower, a cancer screening platform, integrating FHIR standards for structured clinical data exchange.",
      "Deployed the Empower platform live at Kijabe Hospital, conducted technical demos for clinicians, and gathered direct user feedback for UI/UX improvements.",
      "Connected RESTful APIs to ensure smooth, real-time data flow between backend services and user interfaces.",
    ],
  },
  {
    company: "Spacia",
    role: "IT Support Intern",
    period: "Jan 2024 — Mar 2024",
    current: false,
    description:
      "Supported a space aggregator startup by conducting usability testing, managing customer outreach, and bridging client needs with the development team.",
    tech: [
      "Usability Testing",
      "QA Research",
      "Technical Sales",
      "Product Feedback",
    ],
    bullets: [
      "Conducted usability testing and research for the Work, Stay and Play platform, identifying system gaps to improve dependability and functionality.",
      "Supported startup scaling by managing customer outreach and technical sales efforts.",
      "Bridged the gap between client-facing needs and the development team to influence feature updates.",
    ],
  },
];

const education = [
  {
    school: "Strathmore University",
    degree: "BSc Informatics & Computer Science",
    detail: "Second Class Honours, Upper Division",
    period: "2021 — 2025",
  },
  {
    school: "Moringa School",
    degree: "UI/UX Design",
    detail: "User-centered design, Figma prototyping, wireframing",
    period: "2024",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      {/* Floating patches */}
      {experienceElements}

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-purple-primary dark:bg-purple-light" />
            <p className="section-subtitle mb-0">Work Experience</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-lavender-100 leading-tight">
            Experiences that
            <span className="text-purple-primary dark:text-purple-light">
              {" "}
              shaped me.
            </span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card group relative overflow-hidden"
            >
              {exp.current && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-primary/50 dark:via-purple-light/50 to-transparent" />
              )}

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-lavender-100 group-hover:text-purple-primary dark:group-hover:text-purple-light transition-colors duration-300">
                      {exp.company}git add .
git commit -m "feat: add RM favicon and set dark mode as default"
git push origin main
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-purple-primary dark:text-purple-light">
                    {exp.role}
                  </p>
                </div>
                <span className="text-xs font-medium flex-shrink-0 w-fit px-3 py-1.5 rounded-full bg-lavender-100/60 dark:bg-dark-border/60 text-gray-500 dark:text-lavender-300 border border-lavender-200/60 dark:border-dark-border">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-gray-500 dark:text-lavender-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-lavender-200"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-primary/40 dark:bg-purple-light/40" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-lavender-200/40 dark:border-dark-border/40">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-lavender-100/60 dark:bg-dark-border/60 text-gray-500 dark:text-lavender-300 border border-lavender-200/60 dark:border-dark-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-purple-primary dark:bg-purple-light" />
            <p className="section-subtitle mb-0">Where I Learned</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-primary/30 dark:via-purple-light/30 to-transparent" />
                <span className="text-xs font-medium px-3 py-1 rounded-full inline-block mb-3 bg-lavender-200/50 dark:bg-dark-border text-gray-500 dark:text-lavender-300 border border-lavender-200 dark:border-dark-border">
                  {edu.period}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-lavender-100 mb-1 group-hover:text-purple-primary dark:group-hover:text-purple-light transition-colors duration-300">
                  {edu.school}
                </h3>
                <p className="text-sm font-semibold text-purple-primary dark:text-purple-light mb-2">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-500 dark:text-lavender-300">
                  {edu.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
