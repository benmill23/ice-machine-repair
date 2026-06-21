import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Commercial Ice Machine Repair in Nashville, TN`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #2563eb 0%, #1d4ed8 45%, #0c2340 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              color: "#2563eb",
            }}
          >
            ❄
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#bfdbfe",
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
        </div>

        <div
          style={{
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: "900px",
          }}
        >
          Commercial Ice Machine Repair
        </div>
        <div
          style={{
            fontSize: "40px",
            color: "#bfdbfe",
            marginTop: "24px",
          }}
        >
          Fast, reliable service across Nashville, TN
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "34px",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {site.phone.display} · Licensed &amp; Insured
        </div>
      </div>
    ),
    { ...size }
  );
}
