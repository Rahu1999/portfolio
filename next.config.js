/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  output: 'export',
  // distDir: 'dist',
  images : {
    unoptimized: true
  }
};

module.exports = nextConfig;
