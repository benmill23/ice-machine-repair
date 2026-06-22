import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — brand blue with a white snowflake (solid bg, iOS-safe). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb 0%, #1d4fd0 100%)",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 40 40"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
        >
          <line x1="20" y1="5" x2="20" y2="35" />
          <line x1="7" y1="12.5" x2="33" y2="27.5" />
          <line x1="7" y1="27.5" x2="33" y2="12.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
