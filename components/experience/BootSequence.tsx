"use client";

import { useEffect, useState } from "react";

export default function BootSequence({ onReady }: { onReady: () => void }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true);
      onReady();
    }, 2800);
    return () => window.clearTimeout(timer);
  }, [onReady]);

  return (
    <div className={`boot-sequence ${ready ? "boot-sequence--exit" : ""}`} aria-hidden="true">
      <div className="boot-grid" />
      <div className="boot-crosshair boot-crosshair--one" />
      <div className="boot-crosshair boot-crosshair--two" />
      <div className="boot-signal" />
      <div className="boot-core">
        <span className="boot-mark">AM</span>
        <span className="instrument-label">Engineering system</span>
        <strong>{ready ? "System ready" : "Initializing..."}</strong>
        <div className="boot-progress"><i /></div>
        <span className="boot-status">SYS / 03.14.26 / ONLINE</span>
      </div>
      <span className="boot-coordinate boot-coordinate--one">X 04.218 / Y 98.004</span>
      <span className="boot-coordinate boot-coordinate--two">CALIBRATION 100%</span>
    </div>
  );
}

