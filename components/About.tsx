"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section
  id="about"
  className="
    relative
    overflow-hidden
    py-28
    md:py-36
  "
>
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Left ambient glow */}

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            opacity: [0.025, 0.055, 0.025],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-[25%]
            h-[420px]
            w-[420px]
            rounded-full
            blur-[160px]
          "
          style={{
            background: "var(--accent)",
          }}
        />

        {/* Right ambient glow */}

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            opacity: [0.02, 0.045, 0.02],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            blur-[170px]
          "
          style={{
            background: "#27a9ff",
          }}
        />

        {/* Very subtle technical grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(34,230,195,0.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(34,230,195,0.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Moving horizontal technical line */}

        <motion.div
          animate={{
            x: ["-10%", "110%"],
            opacity: [0, 0.25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-0
            top-[35%]
            h-px
            w-[25%]
          "
          style={{
            background:
              "linear-gradient(to right, transparent, var(--accent), transparent)",
          }}
        />

      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="section-container relative z-10">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            ease,
          }}
          className="mb-16 text-center md:mb-20"
        >
          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.05em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.22em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="
              text-xs
              font-medium
              uppercase
              md:text-sm
            "
            style={{
              color: "var(--accent)",
            }}
          >
            ABOUT
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="
              mt-3
              text-3xl
              font-medium
              tracking-tight
              md:text-4xl
            "
            style={{
              color: "var(--foreground)",
            }}
          >
            The Engineer Behind the Projects
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              md:text-base
              md:leading-8
            "
            style={{
              color: "var(--muted)",
            }}
          >
            Passionate about building dependable systems by combining
            hardware, software, practical thinking, and continuous learning.
          </motion.p>
        </motion.div>

        {/* ===================================================
            ABOUT GRID
        =================================================== */}

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-20
          "
        >

          {/* =================================================
              LEFT — ABOUT CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -55,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#07131D]
              p-8
              transition-colors
              duration-500
              hover:border-cyan-300/20
              md:p-10
            "
          >

            {/* Animated top edge */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease,
              }}
              className="
                absolute
                left-0
                top-0
                h-px
                w-full
                origin-left
              "
              style={{
                background:
                  "linear-gradient(to right, var(--accent), transparent)",
              }}
            />

            {/* Internal glow */}

            <motion.div
              animate={{
                opacity: [0.02, 0.06, 0.02],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-72
                w-72
                rounded-full
                blur-[120px]
              "
              style={{
                background: "var(--accent)",
              }}
            />

            <div className="relative z-10">

              {/* Heading */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease,
                }}
              >
                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    md:text-3xl
                  "
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Who I Am
                </h3>

                <div
                  className="mt-4 h-px w-16"
                  style={{
                    background:
                      "linear-gradient(to right, var(--accent), transparent)",
                  }}
                />
              </motion.div>

              {/* Paragraph 1 */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.3,
                  ease,
                }}
                className="
                  mt-8
                  text-base
                  leading-8
                  md:text-lg
                "
                style={{
                  color: "var(--muted)",
                }}
              >
                I enjoy creating solutions where electronics and software
                work together. My interests include Embedded Systems,
                PCB Design, Digital Electronics, IoT, Cyber Security,
                and Automation.
              </motion.p>

              {/* Paragraph 2 */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.42,
                  ease,
                }}
                className="
                  mt-7
                  text-base
                  leading-8
                  md:text-lg
                "
                style={{
                  color: "var(--muted)",
                }}
              >
                I like understanding how systems work from the ground up
                and turning ideas into practical solutions that are reliable,
                useful, and easy to improve.
              </motion.p>

              {/* Philosophy line */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.55,
                  ease,
                }}
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  font-mono
                  text-xs
                  font-medium
                  tracking-[0.25em]
                "
                style={{
                  color: "var(--accent)",
                }}
              >
                <motion.span
                  animate={{
                    scaleX: [1, 1.35, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-px w-8 origin-left"
                  style={{
                    background: "var(--accent)",
                  }}
                />

                BUILD

                <span className="opacity-40">•</span>

                LEARN

                <span className="opacity-40">•</span>

                IMPROVE
              </motion.div>

            </div>
          </motion.div>

          {/* =================================================
              RIGHT — PROFILE IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 55,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[440px]
              lg:mx-0
              lg:ml-auto
            "
          >

            {/* Outer breathing glow */}

            <motion.div
              animate={{
                opacity: [0.12, 0.22, 0.12],
                scale: [0.98, 1.015, 0.98],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-[2rem]
                blur-2xl
              "
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,230,195,0.35), rgba(39,169,255,0.12), transparent)",
              }}
            />

            {/* Image frame */}

            <motion.div
              animate={{
                y: [0, -5, 0, 4, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/[0.14]
                bg-[#07131D]
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              "
            >

              {/* Image */}

              <img
                src="/profile.png"
                alt="Ashwin Moorthy"
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-[1.025]
                "
              />

              {/* Dark cinematic gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-transparent
                "
              />

              {/* Very subtle scanning light */}

              <motion.div
                animate={{
                  y: ["-120%", "120%"],
                  opacity: [0, 0.15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 3,
                }}
                className="
                  pointer-events-none
                  absolute
                  left-0
                  right-0
                  h-1/3
                  bg-gradient-to-b
                  from-transparent
                  via-cyan-300/20
                  to-transparent
                "
              />

              {/* Profile badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.65,
                  ease,
                }}
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-xl
                  border
                  border-white/15
                  bg-black/55
                  px-5
                  py-4
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.28em]
                  "
                  style={{
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  ENGINEERING / PROFILE
                </p>

                <div className="mt-1 flex items-center justify-between">

                  <p
                    className="
                      text-lg
                      font-semibold
                    "
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    Ashwin M
                  </p>

                  <motion.span
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 0 12px var(--accent)",
                    }}
                  />

                </div>
              </motion.div>

            </motion.div>

            {/* Technical corner markers */}

            <motion.div
              animate={{
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-3
                top-8
                h-12
                w-12
                border-r
                border-t
                border-cyan-300/30
              "
            />

            <motion.div
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="
                absolute
                -bottom-3
                left-8
                h-12
                w-12
                border-b
                border-l
                border-cyan-300/30
              "
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}