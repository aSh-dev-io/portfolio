"use client";

import { motion } from "framer-motion";

export default function GlobalGeometry() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* =====================================================
          BASE COLOR
      ===================================================== */}

      <div className="absolute inset-0 bg-[#050B12]" />

      {/* =====================================================
          VERY SUBTLE TECHNICAL GRID
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(80,200,210,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(80,200,210,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "110px 110px",
        }}
      />

      {/* =====================================================
          LARGE ARCHITECTURAL CIRCLE
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 140,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -left-[260px]
          top-[12%]
          h-[620px]
          w-[620px]
          rounded-full
          border
          border-cyan-300/[0.045]
        "
      >
        <div
          className="
            absolute
            inset-[90px]
            rounded-full
            border
            border-cyan-300/[0.025]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            h-3
            w-3
            -translate-x-1/2
            rounded-full
            bg-cyan-300/20
          "
        />
      </motion.div>

      {/* =====================================================
          LARGE CROPPED RING — RIGHT
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-[300px]
          top-[34%]
          h-[700px]
          w-[700px]
          rounded-full
          border
          border-cyan-300/[0.04]
        "
      >
        <div
          className="
            absolute
            inset-[120px]
            rounded-full
            border
            border-cyan-300/[0.025]
          "
        />
      </motion.div>

      {/* =====================================================
          TECHNICAL DIAGONAL
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.02, 0.07, 0.02],
          x: [0, 35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[55%]
          h-px
          w-[48%]
          rotate-[-15deg]
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,242,255,0.25), transparent)",
        }}
      />

      {/* =====================================================
          TECHNICAL NODE NETWORK
      ===================================================== */}

      <svg
        className="
          absolute
          right-[3%]
          top-[20%]
          h-[300px]
          w-[360px]
          opacity-[0.055]
        "
        viewBox="0 0 360 300"
        fill="none"
      >
        <path
          d="M20 230 L95 175 L155 195 L225 105 L330 65"
          stroke="currentColor"
          strokeWidth="1"
          className="text-cyan-300"
        />

        <path
          d="M95 175 L105 65 L185 40 L225 105"
          stroke="currentColor"
          strokeWidth="1"
          className="text-cyan-300"
        />

        <path
          d="M155 195 L190 270 L290 220 L330 65"
          stroke="currentColor"
          strokeWidth="1"
          className="text-cyan-300"
        />

        {[
          [20, 230],
          [95, 175],
          [155, 195],
          [225, 105],
          [330, 65],
          [105, 65],
          [185, 40],
          [190, 270],
          [290, 220],
        ].map(([cx, cy], index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r="3"
            fill="currentColor"
            className="text-cyan-300"
          />
        ))}
      </svg>

      {/* =====================================================
          SMALL CROSS MARKS
      ===================================================== */}

      <div
        className="
          absolute
          left-[8%]
          top-[32%]
          h-5
          w-5
          opacity-[0.08]
        "
      >
        <span className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-cyan-300" />
        <span className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-cyan-300" />
      </div>

      <div
        className="
          absolute
          right-[12%]
          top-[72%]
          h-4
          w-4
          opacity-[0.08]
        "
      >
        <span className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-cyan-300" />
        <span className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-cyan-300" />
      </div>

      {/* =====================================================
          SMALL ACCENT NODE
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.15, 0.5, 0.15],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[48%]
          top-[62%]
          h-2
          w-2
          rounded-full
          bg-cyan-300
        "
        style={{
          boxShadow: "0 0 18px rgba(56,242,255,0.5)",
        }}
      />
    </div>
  );
}