// Mirrors EditorialGrid's box: max-w-6xl (72rem) with px-6 (1.5rem) gutters.
export const CELLS_PER_ROW = 16;

/** Left edge of the grid and the side of one cell, for a full-bleed element of this width. */
export function gridMetrics(width) {
  const box = Math.min(width, 1152);
  return { left: (width - box) / 2 + 24, cell: (box - 48) / CELLS_PER_ROW };
}
