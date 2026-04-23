"use client";
import { motion } from "framer-motion";

const COLORS = {
  purple: "rgba(168, 85,  247, VAL)",
  violet: "rgba(139, 92,  246, VAL)",
  pink: "rgba(236, 72,  153, VAL)",
  fuchsia: "rgba(232, 121, 249, VAL)",
  blue: "rgba(147, 197, 253, VAL)",
  lavender: "rgba(196, 181, 253, VAL)",
};

function rgba(color, opacity) {
  return COLORS[color].replace("VAL", opacity);
}

function Patch({
  top,
  left,
  right,
  bottom,
  size,
  mobileSize,
  color,
  duration,
  delay,
  blur,
  opacity,
}) {
  return (
    <>
      {/* Desktop */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.12, 1],
          opacity: [opacity * 0.7, opacity, opacity * 0.7],
        }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className="absolute rounded-full pointer-events-none hidden sm:block"
        style={{
          top,
          left,
          right,
          bottom,
          width: size,
          height: size,
          background: `radial-gradient(circle, ${rgba(color, opacity + 0.2)} 0%, ${rgba(color, opacity)} 40%, ${rgba(color, opacity * 0.4)} 70%, transparent 100%)`,
          filter: `blur(${blur}px)`,
        }}
      />
      {/* Mobile — smaller and fewer */}
      {mobileSize && (
        <motion.div
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.08, 1],
            opacity: [opacity * 0.5, opacity * 0.75, opacity * 0.5],
          }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
          className="absolute rounded-full pointer-events-none block sm:hidden"
          style={{
            top,
            left,
            right,
            bottom,
            width: mobileSize,
            height: mobileSize,
            background: `radial-gradient(circle, ${rgba(color, opacity + 0.1)} 0%, ${rgba(color, opacity * 0.8)} 40%, ${rgba(color, opacity * 0.3)} 70%, transparent 100%)`,
            filter: `blur(${blur + 4}px)`,
          }}
        />
      )}
    </>
  );
}

function Ring({
  top,
  left,
  right,
  bottom,
  size,
  mobileSize,
  color,
  duration,
  delay,
  opacity,
  hideMobile,
}) {
  return (
    <>
      {/* Desktop */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 360],
          opacity: [opacity * 0.6, opacity, opacity * 0.6],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className={`absolute rounded-full pointer-events-none ${hideMobile ? "hidden sm:block" : "hidden sm:block"}`}
        style={{
          top,
          left,
          right,
          bottom,
          width: size,
          height: size,
          border: `1.5px solid ${rgba(color, opacity)}`,
          boxShadow: `0 0 10px ${rgba(color, opacity * 0.5)}, inset 0 0 10px ${rgba(color, opacity * 0.2)}`,
        }}
      />
      {/* Mobile — only show if not hideMobile and mobileSize provided */}
      {!hideMobile && mobileSize && (
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 360],
            opacity: [opacity * 0.4, opacity * 0.7, opacity * 0.4],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
          className="absolute rounded-full pointer-events-none block sm:hidden"
          style={{
            top,
            left,
            right,
            bottom,
            width: mobileSize,
            height: mobileSize,
            border: `1px solid ${rgba(color, opacity * 0.8)}`,
            boxShadow: `0 0 6px ${rgba(color, opacity * 0.3)}`,
          }}
        />
      )}
    </>
  );
}

function Sparkle({
  top,
  left,
  right,
  bottom,
  size,
  color,
  duration,
  delay,
  opacity,
  hideMobile,
}) {
  return (
    <motion.div
      animate={{
        opacity: [0, opacity, 0],
        scale: [0.4, 1.5, 0.4],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute rounded-full pointer-events-none ${hideMobile ? "hidden sm:block" : ""}`}
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        background: rgba(color, 1),
        boxShadow: `0 0 ${size * 5}px ${rgba(color, 0.9)}, 0 0 ${size * 12}px ${rgba(color, 0.5)}, 0 0 ${size * 20}px ${rgba(color, 0.2)}`,
      }}
    />
  );
}

// ── Hero ─────────────────────────────────────────────────────────
export const heroElements = [
  // Patches — desktop large, mobile smaller + only corners
  <Patch
    key="h1"
    top="5%"
    left="2%"
    size={180}
    mobileSize={90}
    color="purple"
    duration={7}
    delay={0}
    blur={14}
    opacity={0.65}
  />,
  <Patch
    key="h2"
    top="8%"
    right="2%"
    size={160}
    mobileSize={80}
    color="pink"
    duration={8}
    delay={1.5}
    blur={12}
    opacity={0.6}
  />,
  <Patch
    key="h3"
    bottom="8%"
    left="3%"
    size={170}
    mobileSize={85}
    color="violet"
    duration={9}
    delay={0.8}
    blur={14}
    opacity={0.62}
  />,
  <Patch
    key="h4"
    bottom="5%"
    right="2%"
    size={150}
    mobileSize={75}
    color="fuchsia"
    duration={7}
    delay={2}
    blur={12}
    opacity={0.58}
  />,
  // Side patches — desktop only
  <Patch
    key="h5"
    top="40%"
    left="0%"
    size={120}
    color="blue"
    duration={11}
    delay={1}
    blur={16}
    opacity={0.45}
  />,
  <Patch
    key="h6"
    top="40%"
    right="0%"
    size={120}
    color="lavender"
    duration={10}
    delay={2.5}
    blur={16}
    opacity={0.45}
  />,

  // Rings — desktop full set, mobile only 2
  <Ring
    key="h7"
    top="20%"
    left="8%"
    size={52}
    mobileSize={28}
    color="lavender"
    duration={12}
    delay={1}
    opacity={0.75}
  />,
  <Ring
    key="h8"
    bottom="18%"
    right="10%"
    size={60}
    mobileSize={30}
    color="pink"
    duration={14}
    delay={0.5}
    opacity={0.65}
  />,
  <Ring
    key="h9"
    top="12%"
    right="12%"
    size={40}
    hideMobile
    color="purple"
    duration={10}
    delay={2.5}
    opacity={0.7}
  />,
  <Ring
    key="h10"
    bottom="25%"
    left="14%"
    size={44}
    hideMobile
    color="fuchsia"
    duration={11}
    delay={3}
    opacity={0.65}
  />,
  <Ring
    key="h11"
    top="55%"
    left="5%"
    size={30}
    hideMobile
    color="violet"
    duration={9}
    delay={1.5}
    opacity={0.6}
  />,
  <Ring
    key="h12"
    top="30%"
    right="5%"
    size={36}
    hideMobile
    color="blue"
    duration={13}
    delay={0.8}
    opacity={0.6}
  />,

  // Sparkles — desktop all, mobile hide extras
  <Sparkle
    key="h13"
    top="35%"
    left="6%"
    size={5}
    color="lavender"
    duration={4}
    delay={0}
    opacity={1}
  />,
  <Sparkle
    key="h14"
    top="18%"
    right="18%"
    size={4}
    color="pink"
    duration={3.5}
    delay={1.2}
    opacity={1}
  />,
  <Sparkle
    key="h15"
    bottom="25%"
    left="14%"
    size={4.5}
    color="purple"
    duration={5}
    delay={2}
    opacity={1}
  />,
  <Sparkle
    key="h16"
    top="50%"
    right="6%"
    size={4}
    color="fuchsia"
    duration={4}
    delay={3}
    opacity={1}
    hideMobile
  />,
  <Sparkle
    key="h17"
    top="8%"
    left="42%"
    size={3.5}
    color="violet"
    duration={6}
    delay={1.5}
    opacity={0.95}
    hideMobile
  />,
  <Sparkle
    key="h18"
    bottom="40%"
    right="14%"
    size={3.5}
    color="lavender"
    duration={4.5}
    delay={0.5}
    opacity={0.95}
    hideMobile
  />,
  <Sparkle
    key="h19"
    top="70%"
    left="8%"
    size={3}
    color="pink"
    duration={3}
    delay={2.5}
    opacity={0.9}
    hideMobile
  />,
  <Sparkle
    key="h20"
    top="25%"
    left="20%"
    size={3}
    color="blue"
    duration={5}
    delay={3.5}
    opacity={0.9}
    hideMobile
  />,
];

// ── Experience ───────────────────────────────────────────────────
export const experienceElements = [
  <Patch
    key="e1"
    top="3%"
    right="2%"
    size={130}
    color="violet"
    duration={8}
    delay={0}
    blur={22}
    opacity={0.42}
  />,
  <Patch
    key="e2"
    top="35%"
    left="1%"
    size={100}
    color="purple"
    duration={9}
    delay={1.5}
    blur={20}
    opacity={0.4}
  />,
  <Patch
    key="e3"
    bottom="8%"
    right="2%"
    size={120}
    color="pink"
    duration={10}
    delay={0.8}
    blur={22}
    opacity={0.4}
  />,
  <Patch
    key="e4"
    bottom="30%"
    left="2%"
    size={85}
    color="fuchsia"
    duration={7}
    delay={2}
    blur={18}
    opacity={0.38}
  />,
  <Ring
    key="e5"
    top="12%"
    left="5%"
    size={30}
    color="purple"
    duration={11}
    delay={1}
    opacity={0.55}
  />,
  <Ring
    key="e6"
    top="50%"
    right="4%"
    size={38}
    color="lavender"
    duration={13}
    delay={2}
    opacity={0.5}
  />,
  <Ring
    key="e7"
    bottom="18%"
    left="6%"
    size={26}
    color="pink"
    duration={10}
    delay={3}
    opacity={0.5}
  />,
  <Ring
    key="e8"
    top="22%"
    right="8%"
    size={20}
    color="fuchsia"
    duration={9}
    delay={0.5}
    opacity={0.48}
  />,
  <Sparkle
    key="e9"
    top="18%"
    right="6%"
    size={4}
    color="lavender"
    duration={4}
    delay={0.5}
    opacity={0.9}
  />,
  <Sparkle
    key="e10"
    top="60%"
    left="4%"
    size={3}
    color="purple"
    duration={3.5}
    delay={1.8}
    opacity={0.85}
  />,
  <Sparkle
    key="e11"
    bottom="22%"
    right="8%"
    size={3.5}
    color="pink"
    duration={5}
    delay={2.5}
    opacity={0.8}
  />,
  <Sparkle
    key="e12"
    top="40%"
    right="3%"
    size={2.5}
    color="violet"
    duration={4}
    delay={1}
    opacity={0.8}
  />,
];

// ── Skills ───────────────────────────────────────────────────────
export const skillsElements = [
  <Patch
    key="s1"
    top="2%"
    left="2%"
    size={115}
    color="pink"
    duration={8}
    delay={0}
    blur={20}
    opacity={0.42}
  />,
  <Patch
    key="s2"
    top="2%"
    right="2%"
    size={95}
    color="purple"
    duration={9}
    delay={1}
    blur={18}
    opacity={0.4}
  />,
  <Patch
    key="s3"
    bottom="5%"
    left="3%"
    size={105}
    color="fuchsia"
    duration={10}
    delay={0.5}
    blur={20}
    opacity={0.4}
  />,
  <Patch
    key="s4"
    bottom="5%"
    right="2%"
    size={100}
    color="violet"
    duration={7}
    delay={2}
    blur={18}
    opacity={0.42}
  />,
  <Patch
    key="s5"
    top="45%"
    left="0%"
    size={70}
    color="blue"
    duration={11}
    delay={1.5}
    blur={16}
    opacity={0.35}
  />,
  <Patch
    key="s6"
    top="45%"
    right="0%"
    size={70}
    color="lavender"
    duration={9}
    delay={3}
    blur={16}
    opacity={0.35}
  />,
  <Ring
    key="s7"
    top="16%"
    left="6%"
    size={34}
    color="pink"
    duration={12}
    delay={0.8}
    opacity={0.55}
  />,
  <Ring
    key="s8"
    top="16%"
    right="6%"
    size={26}
    color="purple"
    duration={10}
    delay={2}
    opacity={0.5}
  />,
  <Ring
    key="s9"
    bottom="16%"
    left="6%"
    size={30}
    color="violet"
    duration={11}
    delay={1.5}
    opacity={0.5}
  />,
  <Ring
    key="s10"
    bottom="16%"
    right="6%"
    size={38}
    color="fuchsia"
    duration={13}
    delay={0}
    opacity={0.48}
  />,
  <Ring
    key="s11"
    top="48%"
    left="4%"
    size={22}
    color="blue"
    duration={9}
    delay={2.5}
    opacity={0.45}
  />,
  <Ring
    key="s12"
    top="48%"
    right="4%"
    size={22}
    color="lavender"
    duration={10}
    delay={1}
    opacity={0.45}
  />,
  <Sparkle
    key="s13"
    top="28%"
    left="4%"
    size={4}
    color="purple"
    duration={4}
    delay={0}
    opacity={0.9}
  />,
  <Sparkle
    key="s14"
    top="28%"
    right="4%"
    size={3}
    color="pink"
    duration={3.5}
    delay={1.5}
    opacity={0.85}
  />,
  <Sparkle
    key="s15"
    bottom="28%"
    left="5%"
    size={3.5}
    color="lavender"
    duration={5}
    delay={2}
    opacity={0.8}
  />,
  <Sparkle
    key="s16"
    bottom="28%"
    right="5%"
    size={4}
    color="fuchsia"
    duration={4.5}
    delay={0.8}
    opacity={0.85}
  />,
  <Sparkle
    key="s17"
    top="50%"
    left="2%"
    size={2.5}
    color="blue"
    duration={3}
    delay={3}
    opacity={0.8}
  />,
  <Sparkle
    key="s18"
    top="50%"
    right="2%"
    size={2.5}
    color="violet"
    duration={4}
    delay={1.2}
    opacity={0.8}
  />,
];

// ── Contact ──────────────────────────────────────────────────────
export const contactElements = [
  <Patch
    key="c1"
    top="6%"
    left="3%"
    size={110}
    color="fuchsia"
    duration={8}
    delay={0}
    blur={20}
    opacity={0.42}
  />,
  <Patch
    key="c2"
    top="6%"
    right="3%"
    size={100}
    color="purple"
    duration={9}
    delay={1}
    blur={18}
    opacity={0.4}
  />,
  <Patch
    key="c3"
    bottom="8%"
    left="4%"
    size={95}
    color="pink"
    duration={10}
    delay={1.5}
    blur={20}
    opacity={0.4}
  />,
  <Patch
    key="c4"
    bottom="8%"
    right="4%"
    size={105}
    color="violet"
    duration={7}
    delay={0.5}
    blur={18}
    opacity={0.42}
  />,
  <Ring
    key="c5"
    top="22%"
    left="8%"
    size={32}
    color="pink"
    duration={12}
    delay={1}
    opacity={0.55}
  />,
  <Ring
    key="c6"
    top="22%"
    right="8%"
    size={26}
    color="lavender"
    duration={10}
    delay={2}
    opacity={0.5}
  />,
  <Ring
    key="c7"
    bottom="22%"
    left="8%"
    size={40}
    color="fuchsia"
    duration={14}
    delay={0.5}
    opacity={0.48}
  />,
  <Ring
    key="c8"
    bottom="22%"
    right="8%"
    size={30}
    color="purple"
    duration={11}
    delay={3}
    opacity={0.5}
  />,
  <Sparkle
    key="c9"
    top="38%"
    left="6%"
    size={4}
    color="purple"
    duration={4}
    delay={0}
    opacity={0.9}
  />,
  <Sparkle
    key="c10"
    top="38%"
    right="6%"
    size={3.5}
    color="pink"
    duration={3.5}
    delay={1.5}
    opacity={0.85}
  />,
  <Sparkle
    key="c11"
    bottom="38%"
    left="6%"
    size={3}
    color="fuchsia"
    duration={5}
    delay={2}
    opacity={0.8}
  />,
  <Sparkle
    key="c12"
    bottom="38%"
    right="6%"
    size={4}
    color="lavender"
    duration={4.5}
    delay={0.8}
    opacity={0.85}
  />,
  <Sparkle
    key="c13"
    top="15%"
    left="45%"
    size={2.5}
    color="violet"
    duration={3}
    delay={2.5}
    opacity={0.8}
  />,
];
