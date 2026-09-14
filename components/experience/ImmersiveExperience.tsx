"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import BootSequence from "./BootSequence";
import SceneFallback from "./SceneFallback";

const EngineeringScene = dynamic(() => import("./EngineeringScene"), { ssr: false, loading: () => <SceneFallback /> });

export default function ImmersiveExperience({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webgl, setWebgl] = useState(true);
  const handleReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(reduced);
    try {
      const canvas = document.createElement("canvas");
      setWebgl(Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
    } catch { setWebgl(false); }
    if (reduced) setReady(true);
  }, []);

  return (
    <>
      {!reducedMotion && <BootSequence onReady={handleReady} />}
      <div className={`experience-world ${ready ? "experience-world--ready" : ""}`}>
        {webgl && !reducedMotion ? <EngineeringScene /> : <SceneFallback />}
      </div>
      <div className={`portfolio-content ${ready ? "portfolio-content--ready" : ""}`}>{children}</div>
    </>
  );
}

