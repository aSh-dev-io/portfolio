"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

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
            top-4
            z-50
            px-4
            sm:px-6
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
                border-cyan-400/20
                bg-gradient-to-r
                from-[#061525]/95
                via-[#0A2036]/95
                to-[#061525]/95
                px-4
                py-2.5
                backdrop-blur-2xl
                shadow-[0_8px_35px_rgba(0,0,0,0.45)]
                ring-1
                ring-cyan-400/5
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
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-300
                  via-cyan-400
                  to-teal-400
                  text-sm
                  font-bold
                  text-[#04111F]
                  shadow-[0_0_20px_rgba(45,212,191,0.25)]
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
                  items-center
                  gap-1
                  lg:flex
                "
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="
                      rounded-full
                      px-3.5
                      py-2
                      text-sm
                      text-slate-400
                      transition-all
                      duration-300
                      hover:bg-cyan-400/10
                      hover:text-cyan-200
                    "
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* =================================================
                  CONTACT BUTTON
              ================================================= */}

              <div className="hidden lg:block">
                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-cyan-300/20
                    bg-gradient-to-r
                    from-cyan-400
                    to-teal-400
                    !px-5
                    !py-2.5
                    text-[13px]
                    font-semibold
                    text-[#04111F]
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
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/5
                  text-slate-200
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-cyan-200
                  lg:hidden
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
                  lg:hidden
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-gradient-to-b
                    from-[#081B2E]/98
                    to-[#061525]/98
                    p-3
                    shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                    backdrop-blur-2xl
                  "
                >
                  <div className="flex flex-col gap-1">

                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="
                          rounded-xl
                          px-4
                          py-3
                          text-sm
                          text-slate-400
                          transition-all
                          duration-300
                          hover:bg-cyan-400/10
                          hover:text-cyan-200
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
                        border-cyan-300/20
                        bg-gradient-to-r
                        from-cyan-400
                        to-teal-400
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-[#04111F]
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