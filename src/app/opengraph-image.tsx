import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Commercial Ice Machine Repair in Nashville, TN`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STAR =
  "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

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
          padding: "76px",
          position: "relative",
          background:
            "linear-gradient(135deg, #1d4fd0 0%, #1d44a8 55%, #0f2a63 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* yellow accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "14px",
            background: "#ffc733",
          }}
        />

        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "36px" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "16px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 40 40" fill="none" stroke="#2563eb" strokeWidth="2.6" strokeLinecap="round">
              <line x1="20" y1="6" x2="20" y2="34" />
              <line x1="8" y1="13" x2="32" y2="27" />
              <line x1="8" y1="27" x2="32" y2="13" />
            </svg>
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "1px",
              color: "#bdd4fd",
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
        </div>

        <div style={{ fontSize: "78px", fontWeight: 800, lineHeight: 1.04, maxWidth: "960px" }}>
          Commercial Ice Machine Repair
        </div>
        <div style={{ fontSize: "40px", color: "#bdd4fd", marginTop: "20px" }}>
          Nashville, TN · Same-Day Service · All Major Brands
        </div>

        {/* rating + phone */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px", marginTop: "52px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "999px",
              padding: "14px 26px",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            <div style={{ display: "flex", gap: "3px" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="30" height="30" viewBox="0 0 24 24" fill="#ffc733">
                  <path d={STAR} />
                </svg>
              ))}
            </div>
            <span>{site.rating.value} on Google</span>
          </div>
          <div style={{ fontSize: "34px", fontWeight: 800 }}>{site.phone.display}</div>
        </div>

        <div style={{ position: "absolute", bottom: "44px", left: "76px", fontSize: "22px", color: "#90b6fb" }}>
          Licensed &amp; Insured · A division of First Choice Appliance
        </div>
      </div>
    ),
    { ...size }
  );
}
