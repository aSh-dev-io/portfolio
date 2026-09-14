"use client";

import { useEffect, useState } from "react";

type BootSequenceProps = {
  sceneReady: boolean;
  onReady: () => void;
};

export default function BootSequence({ sceneReady, onReady }: BootSequenceProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const safetyTimer = window.setTimeout(() => {
      setReady(true);
      onReady();
    }, 3000);

    if (sceneReady) {
      const exitTimer = window.setTimeout(() => {
        setReady(true);
        onReady();
      }, 420);
      return () => {
        window.clearTimeout(safetyTimer);
        window.clearTimeout(exitTimer);
      };
    }

    return () => window.clearTimeout(safetyTimer);
  }, [onReady, sceneReady]);

  return (
    <div className={`boot-sequence ${ready ? "boot-sequence--exit" : ""}`} aria-hidden="true">
      <div className="boot-grid" />
      <div className="boot-signal" />
      <div className="boot-core">
        <span className="boot-mark">AM</span>
        <span className="instrument-label">Engineering system</span>
        <strong>{ready ? "System ready" : sceneReady ? "Core online" : "Initializing"}</strong>
        <div className="boot-rule"><i /></div>
        <div className="boot-states">
          <span><i className={sceneReady ? "is-ready" : ""} />System</span>
          <span><i className={sceneReady ? "is-ready" : ""} />WebGL</span>
          <span><i className={ready ? "is-ready" : ""} />Ready</span>
        </div>
        <span className="boot-status">SYS / 03.14.26 / ONLINE</span>
      </div>
      <span className="boot-coordinate boot-coordinate--one">X 04.218 / Y 98.004</span>
      <span className="boot-coordinate boot-coordinate--two">CORE / 01</span>
    </div>
  );
}
