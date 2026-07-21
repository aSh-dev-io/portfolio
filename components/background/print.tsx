export default function BlueprintGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.045]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,229,255,0.10) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,255,0.10) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}