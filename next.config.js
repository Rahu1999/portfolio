/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //   ],
  // },
  experimental: {
    serverActions: true,
  },
  // Add any other configuration options you need

  // Configure Next.js to use output: export
  trailingSlash: true,
  output: 'export',
  
};

module.exports = nextConfig;
