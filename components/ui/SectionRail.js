"use client";
import { useEffect, useState } from "react";
import useToneAt from "./useToneAt";

const viewportCentre = () => window.innerHeight / 2;

const sections = [
  { id: "home", ordinal: "01", name: "Intro" },
  { id: "work", ordinal: "02", name: "Work" },
  { id: "experience", ordinal: "03", name: "Experience" },
  { id: "skills", ordinal: "04", name: "Skills" },
  { id: "contact", ordinal: "05", name: "Contact" },
];

export default function SectionRail() {
  const [active, setActive] = useState("home");
  const tone = useToneAt(viewportCentre);

  useEffect(() => {
    // Collapse the root to a zero-height band at the viewport centre, which is
    // where the rail sits. Whatever crosses it is what the rail is over.
    // Ratio-based detection fails here: a section taller than the viewport
    // never reaches a high ratio, so Experience never became active.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    const observed = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className={`tone-${tone} fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block`}
    >
      <ul className="flex flex-col items-end gap-5">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center justify-end gap-3"
              >
                <span
                  className={`label transition-all duration-500 ${
                    isActive
                      ? "text-accent opacity-100"
                      : "text-ink-muted opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  {section.name}
                </span>
                <span
                  className={`ordinal transition-colors duration-500 ${
                    isActive ? "text-accent" : "text-ink-muted"
                  }`}
                >
                  {section.ordinal}
                </span>
                <span
                  className={`h-px transition-all duration-500 ${
                    isActive ? "w-8 bg-accent" : "w-3 bg-rule-strong"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
