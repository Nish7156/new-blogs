import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "any_id",
    name: "Next.js PWA - Tutorial",
    short_name: "Next PWA",
    description: "This next.js app is a PWA.",
    icons: [
      {
        src: "./logo72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "./logo192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./logo384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "./logo512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    start_url: "/",
    scope: ".",
    display: "standalone",
    orientation: "portrait",
  };
}
