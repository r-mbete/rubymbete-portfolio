"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-surface border border-rule hover:bg-surface transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 text-yellow-400 hidden dark:block" />
      <Moon className="w-5 h-5 text-accent dark:hidden" />
    </button>
  );
}
