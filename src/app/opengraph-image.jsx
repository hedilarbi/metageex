// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 56,
          fontWeight: 700,
          background: "linear-gradient(135deg, #6BC1FF 0%, #0994F8 100%)",
          color: "white",
        }}
      >
        Metageex — Agence Dev Web & Mobile
      </div>
    ),
    size
  );
}
