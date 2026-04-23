"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
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
          ? "bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm border-b border-lavender-200 dark:border-dark-border"
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
              text-xl font-bold
              text-purple-primary dark:text-purple-light
              tracking-wide hover:opacity-80
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
                  text-gray-700 dark:text-lavender-200
                  hover:text-purple-primary dark:hover:text-purple-light
                  font-medium text-sm
                  transition-colors duration-300
                  relative group
                "
              >
                {link.name}
                {/* Underline animation */}
                <span
                  className="
                  absolute -bottom-1 left-0 w-0 h-0.5
                  bg-purple-primary dark:bg-purple-light
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
                bg-lavender-200 dark:bg-dark-card
                border border-lavender-300 dark:border-dark-border
                hover:bg-lavender-300 dark:hover:bg-dark-border
                transition-all duration-300
              "
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-purple-primary dark:text-purple-light" />
              ) : (
                <Menu className="w-5 h-5 text-purple-primary dark:text-purple-light" />
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
        bg-white/95 dark:bg-dark-bg/95
        backdrop-blur-md
        border-b border-lavender-200 dark:border-dark-border
      `}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="
                text-gray-700 dark:text-lavender-200
                hover:text-purple-primary dark:hover:text-purple-light
                hover:bg-lavender-100 dark:hover:bg-dark-card
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
