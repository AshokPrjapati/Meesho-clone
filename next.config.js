/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig


const withImages = require("next-images")
module.exports = withImages({})