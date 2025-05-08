/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // ✅ Enables Server Actions
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'images.clerk.dev',
      },
    ],
  },
};

export default nextConfig;
