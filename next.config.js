/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["help.twitter.com", "cdn.cmjornal.pt"]
  }
}

module.exports = nextConfig
