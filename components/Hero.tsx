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
      className="relative min-h-screen overflow-hidden"
    >
      {/* =========================================================
          BACKGROUND — KEEPING EXISTING PORTFOLIO BACKGROUND
      ========================================================= */}

      <GradientBackground />
      <BlueprintGrid />
      <PCBTraces />
      <MouseSpotlight />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="section-container relative z-10 w-full pt-28 pb-20">
        <div className="grid min-h-[75vh] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div>

            {/* CLOCK */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div
                className="font-mono text-5xl font-semibold tracking-tight sm:text-6xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                {time}
              </div>

              <div
                className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.35em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                {date}
              </div>
            </motion.div>

            {/* =================================================
                MAIN STATEMENT
            ================================================= */}

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="max-w-[650px] text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              I turn ideas
              <br />
              into reliable
              <br />
              <span
                style={{
                  color: "var(--foreground)",
                }}
              >
                solutions.
              </span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-7 max-w-[620px] text-base leading-8 sm:text-lg"
              style={{
                color: "var(--muted)",
              }}
            >
              I believe great engineering starts with thoughtful
              design, continuous learning, and attention to detail.
              Every project is a chance to innovate, improve, and
              make technology more reliable.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-10 flex flex-wrap gap-4"
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
              RIGHT SIDE — LOOPING VIDEO
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative flex items-center justify-center lg:justify-end"
          >

            {/* Very subtle glow */}

            <div
              className="pointer-events-none absolute h-[300px] w-[300px] rounded-full blur-[120px] opacity-20"
              style={{
                background: "var(--accent)",
              }}
            />

            {/* =================================================
                VIDEO FRAME
            ================================================= */}

            <div className="relative w-full max-w-[430px]">

              <div
                className="relative overflow-hidden rounded-[24px] border"
                style={{
                  borderColor: "rgba(255,255,255,0.65)",
                  background: "transparent",
                }}
              >

                <video
                  src="/mp4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="aspect-square w-full object-cover"
                />

              </div>

              {/* =================================================
                  SYSTEM ONLINE LABEL
              ================================================= */}

              <div
                className="absolute -bottom-5 left-6 rounded-lg border px-5 py-2.5 backdrop-blur-md"
                style={{
                  borderColor: "rgba(255,255,255,0.75)",
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
                    className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]"
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