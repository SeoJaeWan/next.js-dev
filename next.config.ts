import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: 'standalone' as const,
  reactStrictMode: false,
};

export default nextConfig;
