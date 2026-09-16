"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    id: "frontend",
    icon: Code2,
    category: "Frontend",
    tagline: "Building what people see and interact with",
    align: "left",
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
    id: "design",
    icon: Palette,
    category: "Design",
    tagline: "Crafting experiences that feel right",
    align: "right",
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
    id: "backend",
    icon: Database,
    category: "Backend",
    tagline: "Connecting data to the real world",
    align: "left",
    skills: ["Python", "RESTful APIs", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    id: "tools",
    icon: Wrench,
    category: "Tools",
    tagline: "The things that keep everything running smoothly",
    align: "right",
    skills: ["Git & GitHub", "Linux", "GitLab", "VS Code", "Figma Dev Mode"],
  },
];

export default function Skills() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Floating patches */}

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <p className="section-subtitle mb-0">What I Work With</p>
          </div>
          <h2 className="display display-2">
            Tools I use to
            <span className="display-em">
              {" "}
              bring ideas to life.
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const isActive = activeId === group.id;
            const isRight = group.align === "right";

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex ${isRight ? "justify-end" : "justify-start"}`}
              >
                <div
                  onMouseEnter={() => setActiveId(group.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(group.id)}
                  onBlur={() => setActiveId(null)}
                  onTouchStart={() => setActiveId(group.id)}
                  onTouchEnd={() => setTimeout(() => setActiveId(null), 800)}
                  className={`
                    card cursor-default relative overflow-hidden
                    w-full sm:w-3/4 lg:w-2/3
                    transition-all duration-500
                    ${isActive ? "border-accent/40" : ""}
                  `}
                >
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                  />

                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isActive ? "bg-accent" : "bg-surface"}`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-white" : "text-accent"}`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-base leading-tight transition-colors duration-300 ${isActive ? "text-accent" : "text-ink"}`}
                      >
                        {group.category}
                      </h3>
                      <p className="text-xs text-ink-muted mt-0.5">
                        {group.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        animate={{
                          opacity: isActive ? 1 : 0.5,
                          y: isActive ? 0 : 2,
                          scale: isActive ? 1 : 0.97,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isActive ? i * 0.04 : 0,
                        }}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-300 ${isActive ? "bg-accent/10 text-accent border-accent/20" : "bg-surface/40 text-ink-muted border-rule/40"}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ fontFamily: "var(--font-caveat)" }}
          className="text-center mt-16 text-xl text-ink-muted"
        >
          and always learning more ✦
        </motion.p>
      </div>
    </section>
  );
}
