import { ImageResponse } from "next/og";

export const alt = "CAV Brand - Creating Content. Building Influence. Driving Results.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "radial-gradient(circle at 18% 15%, rgba(246,200,53,0.28), transparent 28%), radial-gradient(circle at 85% 85%, rgba(157,98,20,0.24), transparent 36%), #0b0c0c",
          color: "#e4e1dd",
          padding: "56px 64px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#f6c835",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "linear-gradient(120deg,#F6C835,#9A5E08,#9D6214)",
            }}
          />
          CAV Brand
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 980 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 800 }}>
            Content That Gets Attention.
            <br />
            Videos That Drive Results.
          </div>
          <div style={{ fontSize: 30, color: "#d5d1cd", lineHeight: 1.35 }}>
            Creating Content. Building Influence. Driving Results.
          </div>
        </div>
      </div>
    ),
    size
  );
}
