/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [

    ]
  }
}

module.exports = nextConfig


const withImages = require("next-images")
module.exports = withImages({})