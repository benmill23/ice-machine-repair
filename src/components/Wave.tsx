/**
 * Curved SVG divider that blends one section's background into the next.
 * Place inside a `relative overflow-hidden` section and set `fill` to the
 * color of the ADJACENT section the wave should flow toward.
 */
type WaveProps = {
  fill?: string;
  position?: "top" | "bottom";
  layered?: boolean;
  className?: string;
};

export default function Wave({
  fill = "#ffffff",
  position = "bottom",
  layered = false,
  className = "",
}: WaveProps) {
  const posClass = position === "bottom" ? "bottom-0" : "top-0 rotate-180";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${posClass} leading-[0] ${className}`}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="block h-[45px] w-full md:h-[80px]"
      >
        {layered && (
          <path
            fill={fill}
            opacity={0.35}
            d="M0,50 C220,10 420,90 700,70 C960,52 1180,8 1440,46 L1440,110 L0,110 Z"
          />
        )}
        <path
          fill={fill}
          d="M0,46 C200,96 400,96 600,64 C800,32 1000,4 1180,26 C1320,42 1400,72 1440,62 L1440,110 L0,110 Z"
        />
      </svg>
    </div>
  );
}
