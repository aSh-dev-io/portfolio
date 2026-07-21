"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

import GradientBackground from "./background/GradientBackground";
import BlueprintGrid from "./background/print";
import PCBTraces from "./background/PCBTraces";
import RotatingRings from "./background/effects/RotatingRings";
import MouseSpotlight from "./background/effects/cursorspotlight";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* ================= Background ================= */}

      <GradientBackground />
      <BlueprintGrid />
      <PCBTraces />
      <MouseSpotlight />

      {/* ================= Main Content ================= */}

      <div className="section-container relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

        {/* ==========================================================
            LEFT CONTENT
        ========================================================== */}

        <div>
          {/* Greeting */}

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm"
            style={{ color: "var(--muted)" }}
          >
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ background: "var(--accent)" }}
            />
            Hello, I'm
          </motion.p>

          {/* Name */}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
            style={{ color: "var(--foreground)" }}
          >
            Ashwin M
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-lg font-medium"
            style={{ color: "var(--accent)" }}
          >
            Electronics • Embedded Systems • PCB Design • IoT
          </motion.p>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl leading-8"
            style={{ color: "var(--muted)" }}
          >
            Electronics and Communication Engineering undergraduate passionate
            about Embedded Systems, PCB Design, IoT, and Automation.
            I enjoy transforming innovative ideas into reliable engineering
            solutions while continuously learning emerging technologies.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="https://drive.google.com/file/d/1q0PhNqjIfc-SdtzN9pcNBeexDeORDaNd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Download size={18} />
              Resume
            </a>

            <a href="#contact" className="btn-secondary">
              <Mail size={18} />
              Contact
            </a>
          </motion.div>
        </div>

        {/* ==========================================================
            RIGHT CONTENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mx-auto flex items-center justify-center"
        >
          {/* Ambient Glow */}

          <div
            className="absolute h-[430px] w-[430px] rounded-full blur-[120px]"
            style={{
              background: "var(--accent-glow)",
            }}
          />

          {/* Ring Container */}

          <div className="relative flex h-[380px] w-[380px] items-center justify-center">

            {/* Rotating Rings */}

            <RotatingRings />

            {/* Profile Image */}

            <div
              className="relative h-80 w-80 overflow-hidden rounded-full"
              style={{
                border: "4px solid var(--accent)",
                boxShadow: "0 0 45px var(--accent-glow)",
              }}
            >
              <Image
                src="/profile.png"
                alt="Ashwin M"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}