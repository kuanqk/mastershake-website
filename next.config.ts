import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;
