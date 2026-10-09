import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nicole Fong · AI/ML Engineer & Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#211D1A",
          color: "#EDE6DB",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontFamily: "monospace",
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#D28E9A",
            marginBottom: 24,
          }}
        >
          AI / ML · Full Stack · Engineer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Nicole Fong
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#B9AFA3",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          UC San Diego · ACM AI Events Director · DiamondHacks 2026 Winner
        </div>
      </div>
    ),
    { ...size }
  );
}
