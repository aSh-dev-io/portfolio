export default function GradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* ================= Base Background ================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,#07182D 0%,#081B33 35%,#081A30 65%,#060F1E 100%)",
        }}
      />

      {/* ================= Center Blue Bloom ================= */}
      <div
        className="
          absolute
          left-1/2
          top-[45%]
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[170px]
          opacity-40
        "
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.22) 0%, rgba(0,150,255,0.10) 35%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* ================= Right Glow ================= */}
      <div
        className="
          absolute
          right-[-180px]
          top-1/2
          h-[700px]
          w-[700px]
          -translate-y-1/2
          rounded-full
          blur-[140px]
          opacity-35
        "
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.25) 0%, rgba(0,130,255,0.10) 45%, rgba(0,0,0,0) 80%)",
        }}
      />

      {/* ================= Left Fill Light ================= */}
      <div
        className="
          absolute
          left-[-180px]
          top-[35%]
          h-[600px]
          w-[600px]
          rounded-full
          blur-[150px]
          opacity-20
        "
        style={{
          background:
            "radial-gradient(circle, rgba(80,180,255,0.12) 0%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* ================= Top Ambient ================= */}
      <div
        className="
          absolute
          left-1/2
          top-[-280px]
          h-[700px]
          w-[1200px]
          -translate-x-1/2
          blur-[170px]
          opacity-25
        "
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.18) 0%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* ================= Bottom Fade ================= */}
      <div
        className="absolute inset-x-0 bottom-0 h-[320px]"
        style={{
          background:
            "linear-gradient(to top, rgba(4,8,18,1), rgba(4,8,18,0))",
        }}
      />

      {/* ================= Corner Vignette ================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.28) 100%)",
        }}
      />

    </div>
  );
}