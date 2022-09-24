/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // ref. https://stackoverflow.com/questions/62866083/how-do-i-omit-the-html-extension-in-next-js
  trailingSlash: true,
}

module.exports = nextConfig
