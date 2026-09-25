"use client";
import { useEffect, useState } from "react";

/** Tone ("plum" | "peri") of the field under a fixed point, for overlays that float above the page. */
export default function useToneAt(getY, fallback = "plum") {
  const [tone, setTone] = useState(fallback);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const field = document
        .elementsFromPoint(window.innerWidth / 2, getY())
        .map((el) => el.closest("[data-field]"))
        .find(Boolean);
      if (field) setTone(field.dataset.field);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [getY]);

  return tone;
}
