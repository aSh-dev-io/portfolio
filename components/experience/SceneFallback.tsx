"use client";

export default function SceneFallback() {
  return (
    <div className="scene-fallback" aria-hidden="true">
      <div className="fallback-trace fallback-trace--one" />
      <div className="fallback-trace fallback-trace--two" />
      <div className="fallback-pcb"><span>AM / MCU-01</span><i /><i /><i /></div>
      <div className="fallback-display"><span>LIVE SIGNAL</span><div className="fallback-wave" /></div>
      <div className="fallback-readout"><b>SYSTEM</b><span>READY</span></div>
    </div>
  );
}

