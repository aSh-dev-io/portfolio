"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  GraduationCap,
  Target,
  Lightbulb,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="eyebrow">ABOUT</p>

          <h2 className="section-title">
            The Engineer Behind the Projects
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl leading-8"
            style={{ color: "var(--muted)" }}
          >
            Passionate about building dependable electronic systems by
            combining hardware, software, and continuous learning.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* Who I Am */}
            <div className="card p-8">

              <div className="mb-5 flex items-center gap-3">
                <Cpu size={22} color="var(--accent)" />

                <h3 className="text-2xl font-semibold">
                  Who I Am
                </h3>
              </div>

              <p
                className="leading-8"
                style={{ color: "var(--muted)" }}
              >
                I enjoy creating solutions where electronics and software
                work together seamlessly. My interests span Embedded
                Systems, PCB Design, Digital Electronics, IoT, and
                automation.

                <br />
                <br />

                I believe every project is an opportunity to learn,
                improve, and design systems that are reliable,
                efficient, and meaningful.
              </p>

            </div>

            {/* Career Goal */}
            <div className="card p-8">

              <div className="mb-5 flex items-center gap-3">
                <Target size={22} color="var(--accent)" />

                <h3 className="text-2xl font-semibold">
                  Career Goal
                </h3>
              </div>

              <p
                className="leading-8"
                style={{ color: "var(--muted)" }}
              >
                My goal is to become a versatile hardware engineer with
                expertise in Embedded Systems, Digital Design, PCB
                Development, and Semiconductor Technologies. I strive to
                create innovative, reliable, and efficient engineering
                solutions while continuously expanding my technical
                knowledge and contributing to impactful real-world
                projects.
              </p>

            </div>

          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* Journey */}
            <div className="card p-8">

              <div className="mb-8 flex items-center gap-3">
                <GraduationCap size={22} color="var(--accent)" />

                <h3 className="text-2xl font-semibold">
                  Engineering Journey
                </h3>
              </div>

              <div className="space-y-8">

                <div className="flex gap-5">

                  <div className="flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-cyan-400"></div>
                    <div className="h-20 w-[2px] bg-white/10"></div>
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Diploma
                    </h4>

                    <p style={{ color: "var(--muted)" }}>
                      Instrumentation & Control Engineering
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-cyan-400"></div>
                    <div className="h-20 w-[2px] bg-white/10"></div>
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Bachelor's Degree
                    </h4>

                    <p style={{ color: "var(--muted)" }}>
                      Electronics & Communication Engineering
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-cyan-400"></div>
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Looking Ahead
                    </h4>

                    <p style={{ color: "var(--muted)" }}>
                      Embedded Systems • RTL Design • VLSI • Semiconductor Engineering
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >

              <div className="mb-5 flex items-center gap-3">
                <Lightbulb size={22} color="var(--accent)" />

                <h3 className="text-2xl font-semibold">
                  Engineering Philosophy
                </h3>
              </div>

              <blockquote
                className="text-lg italic leading-9"
                style={{ color: "var(--muted)" }}
              >
                "I believe engineering is about transforming ideas into
                practical solutions through thoughtful design,
                continuous learning, and attention to detail. Every
                project is an opportunity to innovate, improve, and make
                technology more reliable."
              </blockquote>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}