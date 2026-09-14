"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";

import GradientBackground from "./background/GradientBackground";
import BlueprintGrid from "./background/print";
import PCBTraces from "./background/PCBTraces";
import MouseSpotlight from "./background/effects/cursorspotlight";

export default function Hero() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );

      setDate(
        now
          .toLocaleDateString("en-IN", {
            weekday: "short",
            day: "2-digit",
            month: "2-digit",
          })
          .toUpperCase()
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="intro"
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-background
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <GradientBackground />
      <BlueprintGrid />
      <PCBTraces />
      <MouseSpotlight />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1500px]
          items-center
          px-6
          pb-20
          pt-28

          min-[768px]:px-10
          min-[768px]:pt-24

          min-[1024px]:px-14
          min-[1024px]:pt-20

          min-[1280px]:px-16
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-14

            min-[768px]:grid-cols-[1.05fr_0.95fr]
            min-[768px]:gap-12

            min-[1024px]:gap-16

            min-[1280px]:grid-cols-[1fr_0.9fr]
            min-[1280px]:gap-24
          "
        >
          {/* =====================================================
              LEFT — INTRODUCTION
          ===================================================== */}

          <div className="w-full min-w-0">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="chip font-mono uppercase tracking-[0.14em] text-[10px]">R&amp;D portfolio</span>
              <span className="chip font-mono uppercase tracking-[0.14em] text-[10px]">Systems / software</span>
            </div>

            {/* CLOCK */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 min-[768px]:mb-10"
            >
              <div
                className="
                  font-mono
                  text-4xl
                  font-semibold
                  tracking-tight

                  min-[480px]:text-5xl
                  min-[768px]:text-5xl
                  min-[1024px]:text-6xl
                "
                style={{
                  color: "var(--foreground)",
                }}
              >
                {time}
              </div>

              <div
                className="
                  mt-2
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]

                  min-[768px]:mt-3
                  min-[768px]:text-xs
                "
                style={{
                  color: "var(--muted)",
                }}
              >
                {date}
              </div>
            </motion.div>

            {/* MAIN HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[700px]
                text-5xl
                font-bold
                leading-[1.05]
                tracking-[-0.035em]

                min-[480px]:text-6xl

                min-[768px]:text-6xl

                min-[1024px]:text-7xl

                min-[1280px]:text-[5.2rem]
              "
              style={{
                color: "var(--foreground)",
              }}
            >
              I turn ideas
              <br />
              into reliable
              <br />
              solutions.
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-6
                max-w-[650px]
                text-sm
                leading-7

                min-[480px]:text-base

                min-[768px]:mt-7
                min-[768px]:text-base
                min-[768px]:leading-8

                min-[1024px]:text-lg
              "
              style={{
                color: "var(--muted)",
              }}
            >
              I believe great engineering starts with thoughtful design,
              continuous learning, and attention to detail. Every project is
              a chance to innovate, improve, and make technology more reliable.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.32,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-3

                min-[768px]:mt-10
                min-[768px]:gap-4
              "
            >
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                Explore Projects
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://drive.google.com/file/d/1q0PhNqjIfc-SdtzN9pcNBeexDeORDaNd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download size={17} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — HERO VIDEO
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.18,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              w-full
              items-center
              justify-center

              min-[768px]:justify-end
            "
          >
            {/* VERY SUBTLE ACCENT GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                h-[240px]
                w-[240px]
                rounded-full
                blur-[110px]
                opacity-[0.13]

                min-[768px]:h-[320px]
                min-[768px]:w-[320px]
              "
              style={{
                background: "var(--accent)",
              }}
            />

            {/* VIDEO */}

            <div
              className="
                relative
                w-full
                max-w-[360px]

                min-[480px]:max-w-[400px]

                min-[768px]:max-w-[430px]

                min-[1024px]:max-w-[480px]

                min-[1280px]:max-w-[540px]
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border

                  min-[768px]:rounded-[24px]
                "
                style={{
                  borderColor: "rgba(255,255,255,0.62)",
                  background: "rgba(5,18,32,0.15)",
                }}
              >
                <video
                  src="/mp4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="
                    block
                    aspect-square
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* SYSTEM ONLINE */}

              <div
                className="
                  absolute
                  -bottom-5
                  left-5
                  rounded-lg
                  border
                  px-4
                  py-2.5
                  backdrop-blur-md

                  min-[768px]:left-6
                  min-[768px]:px-5
                "
                style={{
                  borderColor: "rgba(255,255,255,0.7)",
                  background: "rgba(5,18,32,0.9)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 0 8px var(--accent)",
                    }}
                  />

                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]

                      min-[768px]:text-[10px]
                    "
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    SYSTEM / ONLINE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
