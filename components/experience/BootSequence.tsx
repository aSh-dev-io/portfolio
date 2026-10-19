"use client";

import { useEffect, useState } from "react";

type BootSequenceProps = { onReady: () => void };

export default function BootSequence({ onReady }: BootSequenceProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true);
      onReady();
    }, 850);
    return () => window.clearTimeout(timer);
  }, [onReady]);

  return (
    <div className={`boot-sequence ${ready ? "boot-sequence--exit" : ""}`} aria-hidden="true">
      <div className="boot-grid" />
      <div className="boot-signal" />
      <div className="boot-core">
        <span className="boot-mark">AM</span>
        <span className="instrument-label">Engineering system</span>
        <strong>ENGINEERING / EMBEDDED / AUTOMATION</strong>
        <div className="boot-rule"><i /></div>
      </div>
    </div>
  );
}
