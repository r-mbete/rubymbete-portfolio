"use client";
import { useEffect, useRef, useState } from "react";
import { Bookmark } from "lucide-react";

// Browsers won't let a page bookmark itself, so this tells the visitor the shortcut instead.
export default function SaveForLater({ className = "" }) {
  const [hint, setHint] = useState("");
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const showHint = () => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    const mac = /Mac|iPhone|iPad/.test(navigator.userAgent);
    setHint(touch ? "Share → Add to Home Screen" : mac ? "Press ⌘ + D" : "Press Ctrl + D");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setHint(""), 3200);
  };

  return (
    <button
      type="button"
      onClick={showHint}
      className={`label group inline-flex items-center gap-2 text-ink ${className}`}
    >
      <span aria-live="polite">{hint || "Save for later"}</span>
      <Bookmark className="h-4 w-4 fill-current transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
