"use client";

import { motion } from "framer-motion";

export default function SignalPulse() {
  return (
    <>
      {/* Top Left */}
      <motion.circle
        cx="0"
        cy="150"
        r="4"
        fill="#00E5FF"
        animate={{ cx: [0, 250, 250, 420] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Bottom Left */}
      <motion.circle
        cx="0"
        cy="720"
        r="4"
        fill="#00E5FF"
        animate={{ cx: [0, 320, 320, 500] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      {/* Top Right */}
      <motion.circle
        cx="1600"
        cy="120"
        r="4"
        fill="#00E5FF"
        animate={{ cx: [1600, 1350, 1350, 1180] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Bottom Right */}
      <motion.circle
        cx="1600"
        cy="760"
        r="4"
        fill="#00E5FF"
        animate={{ cx: [1600, 1320, 1320, 1080] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />
    </>
  );
}