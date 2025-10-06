// app/manifest.ts

export default function manifest() {
  return {
    name: "Metageex — Agence de développement web & mobile",
    short_name: "Metageex",
    description:
      "Agence internationale de développement web, mobile, SaaS et sites vitrines.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0994F8",
    icons: [
      { src: "/images/metageex3.png", sizes: "192x192", type: "image/png" },
      { src: "/images/metageex3.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
