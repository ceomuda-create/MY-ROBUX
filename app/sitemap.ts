import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://symphonious-pony-807542.netlify.app",
      lastModified: new Date(),
    },
  ];
}