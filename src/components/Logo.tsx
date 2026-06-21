/**
 * 1st Choice Ice Machine Repair — award-rosette logo, rendered as crisp,
 * scalable SVG (so the ribbon text is real text, not a baked-in raster).
 * A scalloped medallion reads "1st Choice"; the forked ribbon below reads
 * ICE (left) / MACHINE (right). Scale it with width/height or className.
 */

type LogoProps = {
  className?: string;
  /** Unique suffix for gradient ids when more than one logo is on a page. */
  id?: string;
  title?: string;
};

const CX = 110;
const CY = 86;

/** Build the scalloped (pleated) rosette outline as a star polygon. */
function scallopPath(points = 22, outer = 83, inner = 71): string {
  const step = (Math.PI * 2) / points;
  let d = "";
  for (let i = 0; i < points; i++) {
    const ao = i * step - Math.PI / 2;
    const ai = ao + step / 2;
    const ox = CX + outer * Math.cos(ao);
    const oy = CY + outer * Math.sin(ao);
    const ix = CX + inner * Math.cos(ai);
    const iy = CY + inner * Math.sin(ai);
    d += `${i === 0 ? "M" : "L"}${ox.toFixed(1)},${oy.toFixed(1)} L${ix.toFixed(1)},${iy.toFixed(1)} `;
  }
  return d + "Z";
}

export default function Logo({ className, id = "logo", title }: LogoProps) {
  const ring = `${id}-ring`;
  const disc = `${id}-disc`;
  const ribL = `${id}-ribL`;
  const ribR = `${id}-ribR`;

  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      role="img"
      aria-label={title ?? "1st Choice Ice Machine Repair"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={ring} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#93c5fd" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id={disc} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#0f3460" />
        </linearGradient>
        <linearGradient id={ribL} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#0f3460" />
        </linearGradient>
        <linearGradient id={ribR} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* ---- Award ribbons (behind the medallion) ---- */}
      {/* left ribbon: ICE */}
      <g transform="translate(64 184) rotate(-13)">
        <path d="M42,2 L55,9 L42,17 Z" fill="#0c2340" />
        <path d="M-42,0 L42,0 L42,30 L0,23 L-42,30 Z" fill={`url(#${ribL})`} />
        <text
          x="0"
          y="19"
          textAnchor="middle"
          fontFamily="var(--font-jakarta), sans-serif"
          fontSize="17"
          fontWeight="800"
          fill="#fff"
          letterSpacing="1"
        >
          ICE
        </text>
      </g>
      {/* right ribbon: MACHINE */}
      <g transform="translate(156 184) rotate(13)">
        <path d="M-42,2 L-55,9 L-42,17 Z" fill="#0c2340" />
        <path d="M-42,0 L42,0 L42,30 L0,23 L-42,30 Z" fill={`url(#${ribR})`} />
        <text
          x="0"
          y="18"
          textAnchor="middle"
          fontFamily="var(--font-jakarta), sans-serif"
          fontSize="13.5"
          fontWeight="800"
          fill="#fff"
          letterSpacing="0.3"
        >
          MACHINE
        </text>
      </g>

      {/* ---- Rosette medallion ---- */}
      <path d={scallopPath()} fill={`url(#${ring})`} />
      <circle cx={CX} cy={CY} r="67" fill={`url(#${disc})`} />
      <circle
        cx={CX}
        cy={CY}
        r="59"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />

      {/* snowflake mark */}
      <g
        stroke="#bfdbfe"
        strokeWidth="2.4"
        strokeLinecap="round"
        transform="translate(110 54) scale(0.85)"
      >
        <line x1="0" y1="-11" x2="0" y2="11" />
        <line x1="-9.5" y1="-5.5" x2="9.5" y2="5.5" />
        <line x1="-9.5" y1="5.5" x2="9.5" y2="-5.5" />
      </g>

      {/* "1st" */}
      <text
        x={CX}
        y="102"
        textAnchor="middle"
        fontFamily="var(--font-jakarta), sans-serif"
        fontSize="44"
        fontWeight="800"
        fill="#fff"
        letterSpacing="-1"
      >
        1
        <tspan fontSize="26" dy="-12">
          st
        </tspan>
      </text>

      {/* "CHOICE" with flanking rules */}
      <line x1="78" y1="120" x2="142" y2="120" stroke="#60a5fa" strokeWidth="1.2" />
      <text
        x={CX}
        y="135"
        textAnchor="middle"
        fontFamily="var(--font-jakarta), sans-serif"
        fontSize="15"
        fontWeight="700"
        fill="#dbeafe"
        letterSpacing="3"
      >
        CHOICE
      </text>
    </svg>
  );
}
