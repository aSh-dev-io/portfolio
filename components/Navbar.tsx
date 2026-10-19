"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";


const primaryNavLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Publications", href: "#publications" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      /*
       * Keep the navbar hidden while the Hero
       * is visible.
       *
       * It appears after approximately 85%
       * of the viewport height has been scrolled.
       */
      const triggerPoint = window.innerHeight * 0.85;

      setShowNavbar(window.scrollY > triggerPoint);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{
            opacity: 0,
            y: -20,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -14,
            scale: 0.98,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            left-0
            right-0
            top-3
            z-50
            px-3
            sm:px-5
          "
        >
          <div className="section-container">

            {/* =================================================
                MAIN NAVBAR
            ================================================= */}

            <div
              className="
                mx-auto
                flex
                items-center
                justify-between
                rounded-full
                border
                border-[rgba(255,250,0,0.16)]
                bg-[#383838]/95
                px-3
                py-1.5
                backdrop-blur-2xl
                shadow-[0_8px_35px_rgba(0,0,0,0.45)]
                ring-1
                ring-[#FFFA00]/5
                transition-all
                duration-300
              "
            >

              {/* =================================================
                  LOGO
              ================================================= */}

              <a
                href="#intro"
                aria-label="Back to introduction"
                className="
                  flex
                  size-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFFA00]
                  text-sm
                  font-bold
                  text-[#2E2E2E]
                  shadow-[0_0_20px_rgba(255,250,0,0.2)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_28px_rgba(45,212,191,0.4)]
                "
              >
                AM
              </a>

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================= */}

              <nav
                aria-label="Primary navigation"
                className="
                  hidden
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  gap-0.5
                  md:flex
                  lg:gap-1
                "
              >
                {primaryNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="
                      rounded-full
                      px-2
                      py-1.5
                      text-xs
                      lg:px-3
                      lg:text-sm
                      text-[#C6C6C6]
                      transition-all
                      duration-300
                      hover:bg-[#FFFA00]/10
                      hover:text-[#FFFA00]
                    "
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* =================================================
                  CONTACT BUTTON
              ================================================= */}

              <div className="hidden shrink-0 md:block">
                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#FFFA00]/30
                    bg-[#FFFA00]
                    !px-4
                    !py-2
                    text-[13px]
                    font-semibold
                    text-[#2E2E2E]
                    shadow-[0_0_20px_rgba(45,212,191,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_0_28px_rgba(45,212,191,0.35)]
                  "
                >
                  Contact Me
                </a>
              </div>

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================= */}

              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="
                  flex
                  size-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[rgba(255,250,0,0.16)]
                  bg-[#FFFA00]/5
                  text-[#FFFFFF]
                  transition-all
                  duration-300
                  hover:border-[#FFFA00]/40
                  hover:bg-[#FFFA00]/10
                  hover:text-[#FFFA00]
                  md:hidden
                "
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* =====================================================
              MOBILE MENU
          ===================================================== */}

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="
                  section-container
                  mt-2
                  md:hidden
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-[rgba(255,250,0,0.16)]
                    bg-[#383838]/98
                    p-3
                    shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                    backdrop-blur-2xl
                  "
                >
                  <div className="flex flex-col gap-1">

                    {primaryNavLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="
                          rounded-xl
                          px-4
                          py-3
                          text-sm
                          text-[#C6C6C6]
                          transition-all
                          duration-300
                          hover:bg-[#FFFA00]/10
                          hover:text-[#FFFA00]
                        "
                      >
                        {link.label}
                      </a>
                    ))}

                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="
                        mt-2
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#FFFA00]/30
                        bg-[#FFFA00]
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-[#2E2E2E]
                        shadow-[0_0_20px_rgba(45,212,191,0.18)]
                        transition-all
                        duration-300
                        hover:shadow-[0_0_28px_rgba(45,212,191,0.35)]
                      "
                    >
                      Contact Me
                    </a>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
