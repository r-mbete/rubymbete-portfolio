"use client";
import { MotionConfig } from "framer-motion";

// reducedMotion="user" makes every motion component honour the OS setting,
// including sections whose animations predate this redesign.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
