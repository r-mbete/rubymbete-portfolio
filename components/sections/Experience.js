"use client";
import { motion } from "framer-motion";
import Field from "@/components/ui/Field";
import SectionHead from "@/components/ui/SectionHead";

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
    period: "2025",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function Experience() {
  return (
    <Field id="experience" tone="plum" innerClassName="section-container">
      <SectionHead
        ordinal="03"
        label="Experience"
        title="Experiences that"
        em="shaped me."
      />

      <div className="rule-t mb-24">
        {experiences.map((exp) => (
          <motion.article
            key={exp.company}
            {...reveal}
            className="rule-b grid gap-6 py-12 md:grid-cols-4 md:gap-0"
          >
            <div className="flex items-start gap-3 md:flex-col md:pr-8">
              <p className="ordinal pt-1 text-ink-muted">{exp.period}</p>
              {exp.current && <span className="chip">Now</span>}
            </div>

            <div className="md:col-span-3">
              <h3 className="display display-3">{exp.company}</h3>
              <p className="label mt-3 text-ink-muted">{exp.role}</p>
              <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed">
                {exp.description}
              </p>

              <ul className="mt-6 max-w-2xl space-y-3">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted"
                  >
                    {/* A single grid cell as the bullet. */}
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <SectionHead ordinal="03.1" label="Where I Learned" />

      <div className="grid gap-4 md:grid-cols-2 md:gap-0">
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            {...reveal}
            className={`card ${index === 0 ? "md:mr-6" : "md:ml-6"}`}
          >
            <span className="chip mb-6">{edu.period}</span>
            <h3 className="display text-3xl">{edu.school}</h3>
            <p className="label mt-3 text-accent">{edu.degree}</p>
            <p className="mt-4 text-sm text-ink-muted">{edu.detail}</p>
          </motion.div>
        ))}
      </div>
    </Field>
  );
}
