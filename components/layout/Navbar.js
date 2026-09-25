"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ScrollProgress from "../ui/ScrollProgress";
import useToneAt from "../ui/useToneAt";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// Sample just below the bar, so it takes the colour of whatever it is about to cover.
const belowBar = () => 72;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tone = useToneAt(belowBar);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`tone-${tone} fixed top-0 left-0 right-0 z-50 text-ink transition-colors duration-500 ${
        scrolled || isOpen
          ? "bg-ground/85 backdrop-blur-md border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <ScrollProgress />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="display text-2xl text-accent transition-opacity duration-300 hover:opacity-80"
          >
            Ruby Mbete
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="label link-sweep text-ink-muted transition-colors duration-300 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-[0.625rem] border border-rule-strong p-2 text-accent"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 pb-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="label rule-t py-4 text-ink transition-colors duration-300 hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
