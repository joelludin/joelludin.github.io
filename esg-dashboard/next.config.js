/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/esg-dashboard',
  assetPrefix: '/esg-dashboard/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    // Temporarily ignore type errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore eslint errors during build
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;