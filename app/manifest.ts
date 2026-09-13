import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reinaldo Silva Mejía",
    short_name: "Reinaldo Silva",
    description:
      "Ingeniero informático especializado en optimización de procesos — travel tech, fintech y aerolíneas.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f6f6",
    theme_color: "#012033",
    icons: [
      {
        src: "/img/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/img/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
