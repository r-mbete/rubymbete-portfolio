"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${
        scrolled
          ? "bg-ground/85 backdrop-blur-md border-b border-rule"
          : "bg-transparent"
      }
    `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="
              display text-xl
              text-accent
              hover:opacity-80
              transition-opacity duration-300
            "
          >
            Ruby Mbete
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  label
                  text-ink-muted
                  hover:text-accent
                  transition-colors duration-300
                  relative group
                "
              >
                {link.name}
                {/* Underline animation */}
                <span
                  className="
                  absolute -bottom-1 left-0 w-0 h-px
                  bg-accent
                  group-hover:w-full
                  transition-all duration-300
                "
                />
              </a>
            ))}
          </div>

          {/* Right side — Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden p-2 rounded-full
                bg-surface
                border border-rule
                hover:bg-surface
                transition-all duration-300
              "
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-accent" />
              ) : (
                <Menu className="w-5 h-5 text-accent" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
        md:hidden
        transition-all duration-300 overflow-hidden
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        bg-white/95
        backdrop-blur-md
        border-b border-rule
      `}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="
                text-ink
                hover:text-accent
                hover:bg-surface
                font-medium text-sm
                px-4 py-3 rounded-xl
                transition-all duration-300
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
