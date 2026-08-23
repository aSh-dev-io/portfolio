"use client";

import { motion } from "framer-motion";

export default function GeometricBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* =====================================================
          BASE GRID
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(40, 220, 200, 0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(40, 220, 200, 0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* =====================================================
          LARGE GEOMETRIC CIRCLE — TOP LEFT
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -left-[220px]
          top-[8%]
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-cyan-300/[0.055]
        "
      >
        <div
          className="
            absolute
            inset-[70px]
            rounded-full
            border
            border-cyan-300/[0.035]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-cyan-300/20
          "
        />
      </motion.div>

      {/* =====================================================
          HEXAGON — TOP RIGHT
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [0, -360],
          y: [0, 12, 0],
        }}
        transition={{
          rotate: {
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          -right-[120px]
          top-[12%]
          h-[360px]
          w-[360px]
          opacity-[0.055]
        "
        style={{
          clipPath:
            "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
          border: "1px solid rgba(40,220,200,0.25)",
        }}
      >
        <div
          className="absolute inset-[35px]"
          style={{
            clipPath:
              "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
            border: "1px solid rgba(40,220,200,0.18)",
          }}
        />
      </motion.div>

      {/* =====================================================
          DIAGONAL ENGINEERING LINE — LEFT
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[42%]
          h-px
          w-[45%]
          rotate-[-18deg]
          bg-cyan-300/20
        "
      />

      {/* =====================================================
          CONNECTED NODE SYSTEM — RIGHT
      ===================================================== */}

      <div className="absolute right-[6%] top-[45%] h-[220px] w-[280px]">

        <svg
          viewBox="0 0 280 220"
          className="h-full w-full opacity-[0.09]"
          fill="none"
        >
          <path
            d="M20 180 L100 130 L155 155 L230 80 L270 110"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan-300"
          />

          <path
            d="M100 130 L105 50 L190 30 L230 80"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan-300"
          />

          <circle
            cx="20"
            cy="180"
            r="3"
            fill="currentColor"
            className="text-cyan-300"
          />

          <circle
            cx="100"
            cy="130"
            r="3"
            fill="currentColor"
            className="text-cyan-300"
          />

          <circle
            cx="155"
            cy="155"
            r="3"
            fill="currentColor"
            className="text-cyan-300"
          />

          <circle
            cx="230"
            cy="80"
            r="3"
            fill="currentColor"
            className="text-cyan-300"
          />

          <circle
            cx="190"
            cy="30"
            r="3"
            fill="currentColor"
            className="text-cyan-300"
          />
        </svg>
      </div>

      {/* =====================================================
          LARGE PARTIAL CIRCLE — BOTTOM LEFT
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-[280px]
          -left-[150px]
          h-[560px]
          w-[560px]
          rounded-full
          border
          border-cyan-300/[0.045]
        "
      />

      {/* =====================================================
          SMALL GEOMETRIC CROSS MARKS
      ===================================================== */}

      <div className="absolute inset-0">

        <span
          className="
            absolute
            left-[8%]
            top-[24%]
            h-5
            w-5
            opacity-[0.12]
          "
        >
          <span className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-cyan-300" />
          <span className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-cyan-300" />
        </span>

        <span
          className="
            absolute
            right-[18%]
            top-[70%]
            h-4
            w-4
            opacity-[0.1]
          "
        >
          <span className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-cyan-300" />
          <span className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-cyan-300" />
        </span>

        <span
          className="
            absolute
            left-[46%]
            top-[82%]
            h-3
            w-3
            rounded-full
            border
            border-cyan-300/20
          "
        />
      </div>

      {/* =====================================================
          VERY SUBTLE CENTRAL GLOW
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.015, 0.035, 0.015],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[180px]
        "
        style={{
          background: "var(--accent)",
        }}
      />
    </div>
  );
}