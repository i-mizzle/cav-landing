import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://cav.ng/sitemap.xml",
    host: "https://cav.ng",
  };
}
