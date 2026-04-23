import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
      border-t border-lavender-200/50 dark:border-dark-border
      py-8
    "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p
            className="
            text-gray-500 dark:text-lavender-300
            text-sm flex items-center gap-1
          "
          >
            &copy; 2026 Ruby Mbete
          </p>
        </div>
      </div>
    </footer>
  );
}
