import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      }
    ],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm]
  }
})

export default withMDX(nextConfig);
