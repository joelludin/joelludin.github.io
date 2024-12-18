/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  // Add rewrites to handle both main site and dashboard
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: '/esg-dashboard',
        destination: '/esg-dashboard/index.html',
      },
    ];
  },
};

export default nextConfig;
