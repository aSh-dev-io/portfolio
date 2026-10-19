"use client";

import { useCallback, useEffect, useState } from "react";
import BootSequence from "./BootSequence";

export default function ImmersiveExperience({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setReady(true);
  }, []);

  return (
    <>
      {!ready && <BootSequence onReady={handleReady} />}
      <div className={`portfolio-content ${ready ? "portfolio-content--ready" : ""}`}>
        {children}
      </div>
    </>
  );
}
