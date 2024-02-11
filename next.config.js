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
  target: 'serverless', // Required for static HTML export
  // Add any other configuration options you need

  // Configure Next.js to use output: export
  output: {
    // Set the exportPathMap option to define the routes to export
    // This example exports only the index route '/'
    // You can add more routes as needed
    exportPathMap: function() {
      return {
        '/': { page: '/' },
      };
    },
  },
};

module.exports = nextConfig;
