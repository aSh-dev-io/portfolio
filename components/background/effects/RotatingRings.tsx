"use client";

import { motion } from "framer-motion";

export default function RotatingRings() {
  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className="absolute h-[360px] w-[360px] rounded-full"
        style={{
          border: "1px solid rgba(0,229,255,.18)",
        }}
      />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
        className="absolute h-[330px] w-[330px] rounded-full"
        style={{
          border: "1px dashed rgba(0,229,255,.12)",
        }}
      />

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute h-[300px] w-[300px] rounded-full"
        style={{
          border: "1px solid rgba(255,255,255,.08)",
        }}
      />
    </>
  );
}