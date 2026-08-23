"use client";

import { motion } from "framer-motion";

type SectionGeometryProps = {
  variant:
    | "about"
    | "skills"
    | "projects"
    | "experience"
    | "education"
    | "achievements"
    | "certifications"
    | "publications"
    | "contact";
};

export default function SectionGeometry({
  variant,
}: SectionGeometryProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* =====================================================
          ABOUT — LARGE PRECISION CIRCLE
      ===================================================== */}

      {variant === "about" && (
        <>
          <motion.div
            animate={{
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-[240px]
              top-[12%]
              h-[620px]
              w-[620px]
              rounded-full
              border
              border-cyan-300/[0.035]
            "
          />

          <div
            className="
              absolute
              left-[5%]
              top-[18%]
              h-px
              w-[22%]
              bg-cyan-300/[0.08]
            "
          />
        </>
      )}

      {/* =====================================================
          SKILLS — TECHNICAL GRID
      ===================================================== */}

      {variant === "skills" && (
        <>
          <div
            className="
              absolute
              inset-x-0
              top-[25%]
              h-[50%]
              opacity-[0.025]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(56,242,255,0.8) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(56,242,255,0.8) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "70px 70px",
            }}
          />

          <motion.div
            animate={{
              x: ["-20%", "120%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-[50%]
              h-px
              w-[30%]
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(56,242,255,0.25), transparent)",
            }}
          />
        </>
      )}

      {/* =====================================================
          PROJECTS — LARGE RINGS
      ===================================================== */}

      {variant === "projects" && (
        <>
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -left-[220px]
              top-[10%]
              h-[520px]
              w-[520px]
              rounded-full
              border
              border-cyan-300/[0.04]
            "
          />

          <div
            className="
              absolute
              -right-[150px]
              bottom-[5%]
              h-[400px]
              w-[400px]
              rounded-full
              border
              border-blue-400/[0.035]
            "
          />
        </>
      )}

      {/* =====================================================
          EXPERIENCE — ENGINEERING TIMELINE
      ===================================================== */}

      {variant === "experience" && (
        <>
          <div
            className="
              absolute
              left-[8%]
              top-[18%]
              h-[65%]
              w-px
              bg-cyan-300/[0.07]
            "
          />

          {[20, 42, 64, 84].map((top, index) => (
            <motion.div
              key={index}
              animate={{
                opacity: [0.2, 0.65, 0.2],
              }}
              transition={{
                duration: 4,
                delay: index * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[calc(8%-4px)]
                h-2
                w-2
                rounded-full
                bg-cyan-300
              "
              style={{
                top: `${top}%`,
              }}
            />
          ))}
        </>
      )}

      {/* =====================================================
          EDUCATION — BLUEPRINT CORNERS
      ===================================================== */}

      {variant === "education" && (
        <>
          <div className="absolute left-[5%] top-[15%] h-28 w-28 border-l border-t border-cyan-300/[0.07]" />

          <div className="absolute right-[5%] bottom-[15%] h-28 w-28 border-b border-r border-cyan-300/[0.07]" />
        </>
      )}

      {/* =====================================================
          ACHIEVEMENTS — RADIAL
      ===================================================== */}

      {variant === "achievements" && (
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-300/[0.035]
          "
        >
          <div className="absolute inset-[100px] rounded-full border border-cyan-300/[0.025]" />
          <div className="absolute inset-[200px] rounded-full border border-cyan-300/[0.02]" />
        </motion.div>
      )}

      {/* =====================================================
          CERTIFICATIONS — DOCUMENT GRID
      ===================================================== */}

      {variant === "certifications" && (
        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(56,242,255,0.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "160px 100%",
          }}
        />
      )}

      {/* =====================================================
          PUBLICATIONS — EDITORIAL LINE
      ===================================================== */}

      {variant === "publications" && (
        <>
          <div
            className="
              absolute
              left-[5%]
              right-[5%]
              top-[20%]
              h-px
              bg-cyan-300/[0.06]
            "
          />

          <div
            className="
              absolute
              left-[5%]
              top-[20%]
              h-16
              w-px
              bg-cyan-300/[0.06]
            "
          />
        </>
      )}

      {/* =====================================================
          CONTACT — RADIAL FOCUS
      ===================================================== */}

      {variant === "contact" && (
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.025, 0.05, 0.025],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-300
          "
        />
      )}
    </div>
  );
}