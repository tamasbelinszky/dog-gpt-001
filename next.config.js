/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        port: '',
        pathname: '/breeds/**/*.{jpg,png}',
      },
    ],
  },
}

module.exports = nextConfig
