"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Database, Wrench } from "lucide-react";
import Field from "@/components/ui/Field";
import SectionHead from "@/components/ui/SectionHead";

const skillGroups = [
  {
    icon: Code2,
    category: "Frontend",
    tagline: "Building what people see and interact with",
    skills: [
      "Angular",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Responsive Design",
    ],
  },
  {
    icon: Palette,
    category: "Design",
    tagline: "Crafting experiences that feel right",
    skills: [
      "Figma",
      "Prototyping",
      "Wireframing",
      "User Research",
      "Design Systems",
      "Interaction Design",
    ],
  },
  {
    icon: Database,
    category: "Backend",
    tagline: "Connecting data to the real world",
    skills: ["Python", "RESTful APIs", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    icon: Wrench,
    category: "Tools",
    tagline: "The things that keep everything running smoothly",
    skills: ["Git & GitHub", "Linux", "GitLab", "VS Code", "Figma Dev Mode"],
  },
];

export default function Skills() {
  return (
    <Field id="skills" tone="peri" innerClassName="section-container">
      <SectionHead
        ordinal="04"
        label="What I Work With"
        title="Tools I use to"
        em="bring ideas to life."
      />

      {/* One group per grid column; each flips to the other colour when hovered. */}
      <div className="rule-t rule-b grid sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              tabIndex={0}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flip group flex min-h-[24rem] flex-col p-6 outline-none max-sm:rule-b"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="ordinal text-ink-muted">
                  04.{index + 1}
                </span>
                <Icon className="h-5 w-5 text-accent transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <h3 className="display display-3">{group.category}</h3>
              <p className="display display-em mt-3 text-lg leading-snug">
                {group.tagline}
              </p>
              <ul className="mt-auto pt-10">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="label rule-t py-2 text-ink-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <p className="display display-em mt-16 text-center text-2xl text-ink-muted">
        and always learning more ✦
      </p>
    </Field>
  );
}
