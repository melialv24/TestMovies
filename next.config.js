/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    API_KEY: process.env.NEXT_PUBLIC_API_KEY
  }
}

module.exports = nextConfig
