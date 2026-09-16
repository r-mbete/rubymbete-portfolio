"use client";
import { useEffect, useState } from "react";

// Sections painted with .block-invert, where the rail must flip colours.
const blockSections = new Set(["experience"]);

const sections = [
  { id: "home", ordinal: "01", name: "Intro" },
  { id: "work", ordinal: "02", name: "Work" },
  { id: "experience", ordinal: "03", name: "Experience" },
  { id: "skills", ordinal: "04", name: "Skills" },
  { id: "contact", ordinal: "05", name: "Contact" },
];

export default function SectionRail() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(best.target.id);
      },
      { threshold: [0.2, 0.4, 0.6, 0.8], rootMargin: "-15% 0px -15% 0px" },
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
      className={`fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block ${
        blockSections.has(active) ? "on-block" : ""
      }`}
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
