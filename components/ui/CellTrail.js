"use client";
import { useEffect, useRef } from "react";
import { gridMetrics } from "./grid";

// Lights the grid cell under the cursor in the field's opposite colour, then lets it fade.
export default function CellTrail() {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    const field = layer?.parentElement;
    if (!field) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = "";

    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      const rect = field.getBoundingClientRect();
      const { left, cell } = gridMetrics(rect.width);
      const col = Math.floor((e.clientX - rect.left - left) / cell);
      const row = Math.floor((e.clientY - rect.top) / cell);
      const key = `${col}:${row}`;
      if (key === last) return;
      last = key;

      const el = document.createElement("span");
      el.className = "trail-cell";
      el.style.left = `${left + col * cell}px`;
      el.style.top = `${row * cell}px`;
      el.style.width = el.style.height = `${cell}px`;
      el.addEventListener("animationend", () => el.remove(), { once: true });
      layer.appendChild(el);
    };
    const onLeave = () => {
      last = "";
    };

    field.addEventListener("pointermove", onMove);
    field.addEventListener("pointerleave", onLeave);
    return () => {
      field.removeEventListener("pointermove", onMove);
      field.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
