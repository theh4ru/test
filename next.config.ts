import type { NextConfig } from "next";

const repo = 'test';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/utils/my-loader.ts',
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
