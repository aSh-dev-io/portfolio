"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const navItems = [
  { name: "Home", href: "#intro" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-auto mt-5 flex h-16 w-[92%] max-w-7xl items-center justify-between rounded-2xl px-8">

        {/* Logo */}

        <Link
          href="#intro"
          className="text-xl font-bold tracking-wide"
          style={{ color: "var(--foreground)" }}
        >
          Ashwin<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Navigation */}

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative text-sm transition-all duration-300 hover:text-white"
                style={{ color: "var(--muted)" }}
              >
                {item.name}

                <motion.span
                  layoutId="navbarHover"
                  className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume */}

        <a
          href="https://drive.google.com/file/d/1q0PhNqjIfc-SdtzN9pcNBeexDeORDaNd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden lg:flex"
        >
          <Download size={16} />
          Resume
        </a>
      </nav>
    </header>
  );
}