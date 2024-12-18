/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/esg-dashboard/:path*',
        destination: '/esg-dashboard/:path*',
      },
    ]
  },
};

export default nextConfig;
