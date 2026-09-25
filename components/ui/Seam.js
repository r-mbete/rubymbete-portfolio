"use client";
import { useEffect, useMemo, useRef } from "react";
import EditorialGrid from "./EditorialGrid";

const COLS = 48;
const ROWS = 4;

// Seeded so the server and client draw the same pattern.
function mulberry32(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildCells(seed) {
  const rand = mulberry32(seed);
  return Array.from({ length: COLS * ROWS }, (_, k) => {
    const row = Math.floor(k / COLS);
    // Each row down carries more of the next colour, so the field dissolves rather than cuts.
    const on = rand() < (row + 0.5) / ROWS;
    const delay = Math.round((row * 0.12 + rand() * 0.55) * 1000);
    return { on, delay };
  });
}

// The band between two fields: grid cells of the next colour scattered over this one.
export default function Seam({ from, seed = 1 }) {
  const ref = useRef(null);
  const cells = useMemo(() => buildCells(seed), [seed]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Hide the cells only once JS can bring them back, then pop them in on first view.
    el.classList.add("armed");
    void el.offsetWidth;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("in");
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Hovering flips a cell to the other colour, so visitors can draw into the seam.
  const flip = (e) => {
    if (e.target.classList.contains("seam-cell")) {
      e.target.classList.toggle("on");
    }
  };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-field={from}
      className={`seam field tone-${from} overflow-hidden`}
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative aspect-[4/1]">
          <div className="seam-cells" onPointerOver={flip}>
            {cells.map((c, i) => (
              <div
                key={i}
                className={`seam-cell ${c.on ? "on" : ""}`}
                style={{ "--d": `${c.delay}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
      <EditorialGrid />
    </div>
  );
}
