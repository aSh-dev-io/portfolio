"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const nodes = [
  [24, 72],
  [118, 42],
  [188, 86],
  [282, 34],
  [356, 104],
];

export default function EngineeringWorkbench() {
  const { scrollYProgress } = useScroll();
  const [reducedMotion, setReducedMotion] = useState(false);
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const y = useTransform(smoothScroll, [0, 1], [0, -34]);
  const opacity = useTransform(smoothScroll, [0, 0.25, 0.7, 1], [0.72, 0.5, 0.3, 0.12]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (reducedMotion) return null;

  return (
    <motion.div className="engineering-workbench" style={{ y, opacity }} aria-hidden="true">
      <div className="workbench-frame" />
      <div className="workbench-display">
        <div className="instrument-label">SYS / SIGNAL INTEGRITY</div>
        <svg viewBox="0 0 420 150" className="workbench-waveform" fill="none">
          <path d="M0 90 H42 L56 28 L70 120 L84 70 H130 L144 90 H188 L201 48 L214 90 H270 L284 18 L298 112 L314 90 H420" stroke="currentColor" strokeWidth="2" />
          <path d="M0 132 H420" stroke="currentColor" strokeOpacity=".22" />
          <path d="M0 54 H420" stroke="currentColor" strokeOpacity=".14" />
        </svg>
        <div className="workbench-readout"><span>CH-01</span><span>2.40 V</span><span>1.00 μs</span></div>
      </div>
      <motion.div className="workbench-pcb" animate={{ rotate: [0, 0.6, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
        <div className="pcb-chip">MCU</div>
        <div className="pcb-trace trace-a" />
        <div className="pcb-trace trace-b" />
        {nodes.map(([cx, cy], index) => <span key={index} className="pcb-node" style={{ left: `${cx}px`, top: `${cy}px` }} />)}
      </motion.div>
      <div className="workbench-blueprint"><span>R&amp;D / 04</span><span>REV. 2.6</span><i /></div>
    </motion.div>
  );
}
