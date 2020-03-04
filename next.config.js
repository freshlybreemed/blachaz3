/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',

  // Enable static exports if needed
  // output: 'export',
};

module.exports = nextConfig;
