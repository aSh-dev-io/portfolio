"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CircuitBoard,
  Code2,
  Cpu,
  Network,
  Terminal,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "EMBEDDED",
    subtitle: "SYSTEMS",
    description:
      "Designing and programming embedded platforms that connect sensors, devices, and software.",
    icon: Cpu,
    skills: [
      "ESP32",
      "STM32",
      "Arduino",
      "Raspberry Pi",
      "Embedded C",
      "Microcontrollers",
    ],
  },
  {
    number: "02",
    title: "HARDWARE",
    subtitle: "ENGINEERING",
    description:
      "Developing practical electronic systems from circuit concepts to PCB implementation.",
    icon: CircuitBoard,
    skills: [
      "PCB Design",
      "KiCad",
      "EasyEDA",
      "Digital Electronics",
      "Instrumentation",
      "Circuit Simulation",
    ],
  },
  {
    number: "03",
    title: "SOFTWARE",
    subtitle: "DEVELOPMENT",
    description:
      "Using programming and engineering tools to build, simulate, analyze, and test systems.",
    icon: Code2,
    skills: [
      "C",
      "C++",
      "Python",
      "MATLAB",
      "Git",
      "GitHub",
    ],
  },
  {
    number: "04",
    title: "SYSTEM",
    subtitle: "INTEGRATION",
    description:
      "Combining hardware, connectivity, automation, and intelligent technologies into complete solutions.",
    icon: Network,
    skills: [
      "IoT",
      "Automation",
      "Sensor Integration",
      "Data Acquisition",
      "Machine Learning",
      "Control Systems",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background py-28 md:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(34, 230, 195, 0.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(34, 230, 195, 0.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Main glow */}

        <motion.div
          animate={{
            opacity: [0.06, 0.1, 0.06],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[5%]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            blur-[180px]
          "
          style={{
            background: "var(--accent)",
          }}
        />

        {/* Blue secondary glow */}

        <motion.div
          animate={{
            opacity: [0.035, 0.07, 0.035],
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[5%]
            right-0
            h-[420px]
            w-[420px]
            rounded-full
            blur-[170px]
          "
          style={{
            background: "#27a9ff",
          }}
        />

        {/* Technical cross */}

        <motion.div
          animate={{
            opacity: [0.07, 0.14, 0.07],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[8%]
            top-[18%]
            hidden
            h-40
            w-40
            lg:block
          "
        >
          <div
            className="absolute left-1/2 top-0 h-full w-px"
            style={{
              background: "var(--accent)",
            }}
          />

          <div
            className="absolute left-0 top-1/2 h-px w-full"
            style={{
              background: "var(--accent)",
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-2
              w-2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
            "
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 20px var(--accent)",
            }}
          />
        </motion.div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="section-container relative z-10">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-4">
            <span
              className="
                font-mono
                text-xs
                font-semibold
                tracking-[0.35em]
                md:text-sm
              "
              style={{
                color: "var(--accent)",
              }}
            >
              EXPERTISE / 01
            </span>

            <div
              className="h-px w-20"
              style={{
                background:
                  "linear-gradient(to right, var(--accent), transparent)",
              }}
            />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

            <h2
              className="
                max-w-6xl
                text-[clamp(3.7rem,8.5vw,9rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.065em]
              "
              style={{
                color: "var(--foreground)",
              }}
            >
              I DESIGN.
              <br />

              <span
                style={{
                  color: "var(--accent)",
                  textShadow:
                    "0 0 45px rgba(34,230,195,0.18)",
                }}
              >
                I BUILD.
              </span>

              <br />

              I CONNECT.
            </h2>

            <div className="max-w-sm lg:pb-3">

              <div className="mb-5 flex items-center gap-3">
                <Terminal
                  size={18}
                  style={{
                    color: "var(--accent)",
                  }}
                />

                <span
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.25em]
                  "
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  ENGINEERING STACK
                </span>
              </div>

              <p
                className="text-base leading-8 md:text-lg"
                style={{
                  color: "var(--muted)",
                }}
              >
                A practical combination of hardware, software,
                embedded systems, and connected technologies used
                to turn ideas into working systems.
              </p>

            </div>
          </div>
        </motion.div>

        {/* ===================================================
            CAPABILITY ARCHITECTURE
        =================================================== */}

        <div className="relative mt-28">

          {/* Top engineering line */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              hidden
              h-px
              lg:block
            "
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(34,230,195,0.3), transparent)",
            }}
          />

          {/* TOP ROW */}

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

            <CapabilityBlock
              item={capabilities[0]}
              index={0}
              large
            />

            <CapabilityBlock
              item={capabilities[1]}
              index={1}
            />

          </div>

          {/* CENTER CONNECTION */}

          <div className="relative hidden h-24 lg:block">

            <motion.div
              animate={{
                opacity: [0.15, 0.5, 0.15],
                scaleX: [0.96, 1, 0.96],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[25%]
                right-[25%]
                top-1/2
                h-px
                origin-center
              "
              style={{
                background:
                  "linear-gradient(to right, rgba(34,230,195,0.05), rgba(34,230,195,0.5), rgba(34,230,195,0.05))",
              }}
            />

            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
              "
              style={{
                background: "var(--accent)",
                boxShadow:
                  "0 0 0 5px rgba(34,230,195,0.08), 0 0 25px rgba(34,230,195,0.6)",
              }}
            />

            <motion.div
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-12
                w-px
                -translate-x-1/2
              "
              style={{
                background:
                  "linear-gradient(to bottom, rgba(34,230,195,0.4), transparent)",
              }}
            />
          </div>

          {/* BOTTOM ROW */}

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">

            <CapabilityBlock
              item={capabilities[2]}
              index={2}
            />

            <CapabilityBlock
              item={capabilities[3]}
              index={3}
              large
            />

          </div>
        </div>

        {/* ===================================================
            SYSTEM INTEGRATION
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mt-20
            overflow-hidden
            border
            border-cyan-300/20
            bg-gradient-to-r
            from-cyan-400/[0.07]
            via-cyan-400/[0.025]
            to-transparent
            px-7
            py-10
            md:px-12
            md:py-12
          "
        >
          {/* Animated accent edge */}

          <motion.div
            animate={{
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-0
              left-0
              top-0
              w-[2px]
            "
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--accent), transparent)",
              boxShadow: "0 0 20px var(--accent)",
            }}
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <div className="flex items-center gap-3">

                <motion.span
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: "var(--accent)",
                    boxShadow: "0 0 12px var(--accent)",
                  }}
                />

                <span
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.3em]
                  "
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  SYSTEM INTEGRATION
                </span>

              </div>

              <h3
                className="
                  mt-5
                  max-w-3xl
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-[-0.035em]
                  md:text-5xl
                "
                style={{
                  color: "var(--foreground)",
                }}
              >
                Different technologies.
                <br />

                <span
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  One working system.
                </span>
              </h3>

            </div>

            {/* Moving technology stream */}

            <div className="max-w-md overflow-hidden">

              <motion.div
                animate={{
                  x: [0, -18, 0, 12, 0],
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  w-max
                  flex-wrap
                  gap-x-4
                  gap-y-2
                  font-mono
                  text-sm
                "
                style={{
                  color: "var(--muted)",
                }}
              >
                <span>IoT</span>
                <span>•</span>
                <span>Automation</span>
                <span>•</span>
                <span>Embedded</span>
                <span>•</span>
                <span>Control</span>
                <span>•</span>
                <span>Data</span>
                <span>•</span>
                <span>ML</span>
              </motion.div>

            </div>

          </div>
        </motion.div>

        {/* ===================================================
            NEXT SECTION
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-16
            flex
            items-center
            justify-between
            border-t
            pt-8
          "
          style={{
            borderColor: "var(--border)",
          }}
        >
          <div>

            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.3em]
              "
              style={{
                color: "var(--muted)",
              }}
            >
              NEXT / 02
            </p>

            <p
              className="mt-2 text-sm md:text-base"
              style={{
                color: "var(--foreground)",
              }}
            >
              See how these capabilities become real projects.
            </p>

          </div>

          <a
            href="#projects"
            className="
              group
              flex
              items-center
              gap-3
              font-mono
              text-xs
              font-medium
              uppercase
              tracking-[0.15em]
              md:text-sm
            "
            style={{
              color: "var(--accent)",
            }}
          >
            Projects

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

/* ============================================================
   CAPABILITY BLOCK
============================================================ */

function CapabilityBlock({
  item,
  index,
  large = false,
}: {
  item: (typeof capabilities)[number];
  index: number;
  large?: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className={`
        group
        relative
        overflow-hidden
        border
        border-white/[0.09]
        bg-[#07131D]
        p-7
        transition-colors
        duration-500
        hover:border-cyan-300/35
        hover:bg-[#091923]
        md:p-9
        ${large ? "min-h-[390px]" : "min-h-[340px]"}
      `}
    >
      {/* =====================================================
          FLOATING AMBIENT LAYER
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -4, 0, 3, 0],
          x: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 10 + index * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.8,
        }}
        className="pointer-events-none absolute inset-0"
      >
        {/* Subtle internal glow */}

        <motion.div
          animate={{
            opacity: [0.025, 0.07, 0.025],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 7 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            blur-[100px]
          "
          style={{
            background: "var(--accent)",
          }}
        />
      </motion.div>

      {/* =====================================================
          TOP ACCENT LINE
      ===================================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-0
          transition-all
          duration-500
          group-hover:w-full
        "
        style={{
          background:
            "linear-gradient(to right, var(--accent), transparent)",
          boxShadow: "0 0 18px rgba(34,230,195,0.7)",
        }}
      />

      {/* =====================================================
          NUMBER + ICON
      ===================================================== */}

      <div className="relative z-10 flex items-start justify-between">

        <div className="flex items-center gap-4">

          {/* Floating number */}

          <motion.span
            animate={{
              y: [0, -2, 0],
              opacity: [0.72, 1, 0.72],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            className="
              font-mono
              text-4xl
              font-bold
              tracking-[-0.05em]
            "
            style={{
              color: "var(--accent)",
              textShadow:
                "0 0 25px rgba(34,230,195,0.3)",
            }}
          >
            {item.number}
          </motion.span>

          <div
            className="
              h-px
              w-12
            "
            style={{
              background:
                "linear-gradient(to right, var(--accent), transparent)",
            }}
          />

        </div>

        {/* Icon */}

        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.7,
          }}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            border
            border-white/[0.08]
            bg-white/[0.025]
            text-slate-500
            transition-all
            duration-300
            group-hover:border-cyan-300/30
            group-hover:bg-cyan-300/10
            group-hover:text-cyan-300
          "
        >
          <Icon
            size={20}
            strokeWidth={1.5}
          />
        </motion.div>

      </div>

      {/* =====================================================
          TITLE
      ===================================================== */}

      <div className="relative z-10 mt-16">

        <h3
          className={`
            font-bold
            leading-[0.9]
            tracking-[-0.045em]
            ${
              large
                ? "text-5xl md:text-6xl"
                : "text-4xl md:text-5xl"
            }
          `}
          style={{
            color: "var(--foreground)",
          }}
        >
          {item.title}
        </h3>

        <h4
          className={`
            mt-2
            font-bold
            leading-[0.9]
            tracking-[-0.045em]
            ${
              large
                ? "text-5xl md:text-6xl"
                : "text-4xl md:text-5xl"
            }
          `}
          style={{
            color: "var(--accent)",
          }}
        >
          {item.subtitle}
        </h4>

      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          relative
          z-10
          mt-7
          max-w-xl
          text-sm
          leading-7
          md:text-base
        "
        style={{
          color: "var(--muted)",
        }}
      >
        {item.description}
      </p>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          my-7
          h-px
        "
        style={{
          background:
            "linear-gradient(to right, var(--border), transparent)",
        }}
      />

      {/* =====================================================
          TECHNOLOGY TAGS
      ===================================================== */}

      <div className="relative z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, -8, 0, 6, 0],
          }}
          transition={{
            duration: 14 + index * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.7,
          }}
          className="flex flex-wrap gap-2.5"
        >
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-md
                border
                border-white/[0.10]
                bg-white/[0.025]
                px-3
                py-1.5
                font-mono
                text-sm
                font-medium
                tracking-wide
                text-slate-300
                transition-all
                duration-300
                group-hover:border-cyan-300/25
                group-hover:bg-cyan-300/[0.06]
                group-hover:text-cyan-200
              "
            >
              {skill}
            </span>
          ))}
        </motion.div>

      </div>

      {/* =====================================================
          BOTTOM ARROW
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 2, 0],
          y: [0, -2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
        className="
          absolute
          bottom-7
          right-7
          opacity-40
          transition-opacity
          duration-300
          group-hover:opacity-100
          md:bottom-9
          md:right-9
        "
      >
        <ArrowUpRight
          size={20}
          className="
            text-cyan-400
            transition-transform
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
          "
        />
      </motion.div>

    </motion.article>
  );
}