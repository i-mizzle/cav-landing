import { ImageResponse } from "next/og";

export const alt = "CAV Brand - Premium creator-focused video and content services.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 12% 18%, rgba(246,200,53,0.24), transparent 25%), radial-gradient(circle at 86% 78%, rgba(157,98,20,0.2), transparent 32%), #0b0c0c",
          color: "#e4e1dd",
          padding: "54px 58px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#f6c835",
          }}
        >
          CAV Brand
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 66, lineHeight: 1.06, fontWeight: 780, maxWidth: 1020 }}>
            Strategic Video Content for Brands, Creators, and Organizations.
          </div>
          <div style={{ fontSize: 28, color: "#d1ccc7" }}>
            Event Coverage • Content Strategy • Social Media Content
          </div>
        </div>
      </div>
    ),
    size
  );
}
