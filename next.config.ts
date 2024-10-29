import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'], // Add both domains
  },
};

export default nextConfig;
