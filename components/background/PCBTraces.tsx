export default function PCBTraces() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
    >
      <defs>

        <linearGradient id="trace" x1="0" x2="1">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.15" />
        </linearGradient>

      </defs>

      {/* Top Left */}
      <path
        d="M0 150 H250 V250 H420"
        stroke="url(#trace)"
        strokeWidth="2"
        fill="none"
      />

      <circle cx="250" cy="150" r="4" fill="#00E5FF" opacity=".35"/>
      <circle cx="250" cy="250" r="4" fill="#00E5FF" opacity=".35"/>
      <circle cx="420" cy="250" r="4" fill="#00E5FF" opacity=".35"/>

      {/* Bottom Left */}
      <path
        d="M0 720 H320 V600 H500"
        stroke="url(#trace)"
        strokeWidth="2"
        fill="none"
      />

      <circle cx="320" cy="720" r="4" fill="#00E5FF" opacity=".35"/>
      <circle cx="320" cy="600" r="4" fill="#00E5FF" opacity=".35"/>
      <circle cx="500" cy="600" r="4" fill="#00E5FF" opacity=".35"/>

      {/* Top Right */}
      <path
        d="M1600 120 H1350 V240 H1180"
        stroke="url(#trace)"
        strokeWidth="2"
        fill="none"
      />

      <circle cx="1350" cy="120" r="4" fill="#00E5FF" opacity=".35"/>
      <circle cx="1350" cy="240" r="4" fill="#00E5FF" opacity=".35"/>
      <circle cx="1180" cy="240" r="4" fill="#00E5FF" opacity=".35"/>

      {/* Bottom Right */}
      <path
        d="M1600 760 H1320 V640 H1080"
        stroke="url(#trace)"
        strokeWidth="2"
        fill="none"
      />

      <circle cx="1320" cy="760" r="4" fill="#00E5FF" opacity=".35"/>
      <circle cx="1320" cy="640" r="4" fill="#00E5FF" opacity=".35"/>
      <circle cx="1080" cy="640" r="4" fill="#00E5FF" opacity=".35"/>

    </svg>
  );
}