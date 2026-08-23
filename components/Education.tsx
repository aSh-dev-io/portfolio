"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-32 md:py-44"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Central glow */}
        <motion.div
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
            background:
              "radial-gradient(circle, rgba(34,211,238,0.08), transparent 68%)",
          }}
          animate={{
            opacity: [0.3, 0.55, 0.3],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(60,190,220,0.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(60,190,220,0.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Large subtle circles */}

        <div
          className="
            absolute
            -left-48
            top-[15%]
            h-[520px]
            w-[520px]
            rounded-full
            border
            border-cyan-400/[0.035]
          "
        />

        <div
          className="
            absolute
            -right-56
            bottom-[10%]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-cyan-400/[0.035]
          "
        />
      </div>

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="ACADEMIC JOURNEY"
          title="Education"
          description="A foundation built through electronics, automation, embedded systems, and continuous learning."
        />
      </div>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <div className="relative z-10 mx-auto mt-28 max-w-7xl px-6">

        {/* ===================================================
            DESKTOP
        =================================================== */}

        <div className="relative hidden min-h-[980px] md:block">

          {/* -------------------------------------------------
              WAVE
          ------------------------------------------------- */}

          <svg
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-full
              w-[900px]
              -translate-x-1/2
              overflow-visible
            "
            viewBox="0 0 900 980"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Soft wave */}

            <path
              d="
                M450 0
                C450 130 680 150 680 245
                C680 365 220 390 220 490
                C220 590 680 615 680 735
                C680 830 450 850 450 980
              "
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />

            {/* Animated wave */}

            <motion.path
              d="
                M450 0
                C450 130 680 150 680 245
                C680 365 220 390 220 490
                C220 590 680 615 680 735
                C680 830 450 850 450 980
              "
              stroke="rgba(34,211,238,0.42)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* =================================================
              EDUCATION ITEMS
          ================================================= */}

          <div className="relative h-full">

            {education.map((edu, index) => {

              const isRight = index % 2 === 0;

              /*
                IMPORTANT:
                These positions create the spacing.

                Card 1 → right
                Card 2 → left
                Card 3 → right
              */

              const positions = [
                "top-[40px]",
                "top-[350px]",
                "top-[660px]",
              ];

              return (
                <motion.div
                  key={edu.title}
                  initial={{
                    opacity: 0,
                    x: isRight ? 45 : -45,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    absolute
                    ${positions[index] ?? "top-[40px]"}
                    ${
                      isRight
                        ? "left-[calc(50%+110px)]"
                        : "right-[calc(50%+110px)]"
                    }
                    w-[420px]
                  `}
                >

                  {/* =================================================
                      CONNECTION NODE
                  ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12 + 0.2,
                    }}
                    className="
                      absolute
                      top-1/2
                      z-30
                      flex
                      h-11
                      w-11
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      bg-[#06111A]
                    "
                    style={{
                      [isRight ? "left" : "right"]:
                        "-132px",

                      borderColor:
                        "rgba(34,211,238,0.65)",

                      color:
                        "var(--accent)",

                      boxShadow:
                        "0 0 25px rgba(34,211,238,0.16)",
                    }}
                  >
                    <GraduationCap size={17} />

                    {/* pulse */}

                    <motion.span
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border
                      "
                      style={{
                        borderColor:
                          "rgba(34,211,238,0.55)",
                      }}
                      initial={{
                        scale: 0.8,
                        opacity: 0.7,
                      }}
                      whileInView={{
                        scale: [1, 1.6],
                        opacity: [0.5, 0],
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.5,
                        delay:
                          index * 0.12 + 0.25,
                      }}
                    />
                  </motion.div>

                  {/* =================================================
                      CONNECTOR LINE
                  ================================================= */}

                  <div
                    className={`
                      absolute
                      top-1/2
                      h-px
                      w-[115px]
                      -translate-y-1/2
                      ${
                        isRight
                          ? "-left-[115px]"
                          : "-right-[115px]"
                      }
                    `}
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(34,211,238,0.4), rgba(34,211,238,0.04))",
                    }}
                  />

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.012,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="
                      group
                      relative
                      min-h-[275px]
                      overflow-hidden
                      rounded-2xl
                      border
                      bg-[#07131D]/95
                      p-7
                      backdrop-blur-xl
                    "
                    style={{
                      borderColor:
                        "rgba(255,255,255,0.085)",

                      boxShadow:
                        "0 25px 70px rgba(0,0,0,0.25)",
                    }}
                  >

                    {/* Top accent */}

                    <motion.div
                      className="
                        absolute
                        left-0
                        top-0
                        h-[2px]
                      "
                      style={{
                        background:
                          "linear-gradient(90deg, var(--accent), transparent)",
                      }}
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "100%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                        delay:
                          index * 0.12 + 0.15,
                      }}
                    />

                    {/* subtle hover glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-48
                        w-48
                        rounded-full
                        opacity-0
                        blur-3xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                      style={{
                        background:
                          "rgba(34,211,238,0.07)",
                      }}
                    />

                    {/* PERIOD */}

                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-cyan-300/15
                        bg-cyan-300/[0.05]
                        px-3.5
                        py-1.5
                        font-mono
                        text-[10px]
                        tracking-[0.14em]
                        text-cyan-200/80
                      "
                    >
                      {edu.period}
                    </span>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-5
                        text-xl
                        font-semibold
                        leading-snug
                        text-foreground
                      "
                    >
                      {edu.title}
                    </h3>

                    {/* ORGANIZATION */}

                    <p
                      className="
                        mt-3
                        text-sm
                        font-medium
                      "
                      style={{
                        color:
                          "var(--accent)",
                      }}
                    >
                      {edu.org}
                    </p>

                    {/* LOCATION */}

                    <p
                      className="
                        mt-2
                        flex
                        items-center
                        gap-1.5
                        text-xs
                      "
                      style={{
                        color:
                          "var(--muted)",
                      }}
                    >
                      <MapPin size={13} />
                      {edu.location}
                    </p>

                    {/* DIVIDER */}

                    <div
                      className="my-5 h-px"
                      style={{
                        background:
                          "rgba(255,255,255,0.07)",
                      }}
                    />

                    {/* RESULT */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-[0.22em]
                        "
                        style={{
                          color:
                            "var(--muted)",
                        }}
                      >
                        RESULT
                      </span>

                      <span
                        className="
                          text-base
                          font-semibold
                        "
                        style={{
                          color:
                            "var(--foreground)",
                        }}
                      >
                        {edu.score}
                      </span>
                    </div>

                    {/* LEARNING */}

                    {edu.learning.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {edu.learning.map(
                          (
                            item,
                            itemIndex
                          ) => (
                            <motion.span
                              key={item}
                              initial={{
                                opacity: 0,
                                y: 6,
                              }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration:
                                  0.35,
                                delay:
                                  index * 0.12 +
                                  itemIndex *
                                    0.04 +
                                  0.3,
                              }}
                              className="
                                rounded-md
                                border
                                border-white/[0.07]
                                bg-white/[0.025]
                                px-2.5
                                py-1.5
                                text-[10px]
                                text-slate-400
                                transition-colors
                                duration-300
                                group-hover:text-cyan-200
                              "
                            >
                              {item}
                            </motion.span>
                          )
                        )}
                      </div>
                    )}

                    {/* STATUS */}

                    <div className="mt-6 flex items-center gap-2">

                      <motion.span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                        "
                        style={{
                          background:
                            "var(--accent)",
                          boxShadow:
                            "0 0 9px var(--accent)",
                        }}
                        animate={{
                          opacity: [
                            0.35,
                            1,
                            0.35,
                          ],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                        }}
                      />

                      <span
                        className="
                          font-mono
                          text-[8px]
                          uppercase
                          tracking-[0.2em]
                        "
                        style={{
                          color:
                            "var(--muted)",
                        }}
                      >
                        Academic milestone
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            MOBILE
        =================================================== */}

        <div className="relative md:hidden">

          {/* vertical line */}

          <div
            className="
              absolute
              bottom-0
              left-[19px]
              top-0
              w-px
            "
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(34,211,238,0.25), transparent)",
            }}
          />

          <div className="space-y-10">

            {education.map((edu, index) => (

              <motion.div
                key={edu.title}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="relative pl-12"
              >

                {/* node */}

                <div
                  className="
                    absolute
                    left-0
                    top-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-[#07131D]
                  "
                  style={{
                    borderColor:
                      "rgba(34,211,238,0.6)",
                    color:
                      "var(--accent)",
                  }}
                >
                  <GraduationCap size={16} />
                </div>

                {/* card */}

                <div
                  className="
                    rounded-2xl
                    border
                    bg-[#07131D]/95
                    p-6
                    backdrop-blur-xl
                  "
                  style={{
                    borderColor:
                      "rgba(255,255,255,0.08)",
                  }}
                >

                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-cyan-300/15
                      bg-cyan-300/[0.05]
                      px-3
                      py-1
                      font-mono
                      text-[10px]
                      text-cyan-200/80
                    "
                  >
                    {edu.period}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {edu.title}
                  </h3>

                  <p
                    className="mt-2 text-sm"
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    {edu.org}
                  </p>

                  <p
                    className="
                      mt-2
                      flex
                      items-center
                      gap-1.5
                      text-xs
                    "
                    style={{
                      color:
                        "var(--muted)",
                    }}
                  >
                    <MapPin size={12} />
                    {edu.location}
                  </p>

                  <div
                    className="
                      mt-5
                      border-t
                      pt-4
                    "
                    style={{
                      borderColor:
                        "rgba(255,255,255,0.07)",
                    }}
                  >
                    <span
                      className="text-xs"
                      style={{
                        color:
                          "var(--muted)",
                      }}
                    >
                      RESULT
                    </span>

                    <span className="ml-3 text-sm font-semibold text-foreground">
                      {edu.score}
                    </span>
                  </div>

                  {edu.learning.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.learning.map(
                        (item) => (
                          <span
                            key={item}
                            className="
                              rounded-md
                              border
                              border-white/[0.07]
                              bg-white/[0.025]
                              px-2
                              py-1
                              text-[10px]
                              text-slate-400
                            "
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}