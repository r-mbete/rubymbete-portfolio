"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-lavender-200 dark:bg-dark-card border border-lavender-300 dark:border-dark-border hover:bg-lavender-300 dark:hover:bg-dark-border transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 text-yellow-400 hidden dark:block" />
      <Moon className="w-5 h-5 text-purple-primary dark:hidden" />
    </button>
  );
}
