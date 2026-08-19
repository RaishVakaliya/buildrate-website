import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BuildRate — Construction Material Price Comparison",
    short_name: "BuildRate",
    description:
      "Compare construction material prices and discover verified suppliers with transparent market rates.",
    start_url: "/",
    display: "standalone",
    background_color: "#161922",
    theme_color: "#c47a1e",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
