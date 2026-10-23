import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Página única: a landing é a única URL que deve aparecer nas buscas.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/` }];
}
