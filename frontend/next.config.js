const basePath = process.env.BASE_PATH ? '/' + process.env.BASE_PATH : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // ref. https://stackoverflow.com/questions/62866083/how-do-i-omit-the-html-extension-in-next-js
  trailingSlash: true,
  basePath: basePath,
  publicRuntimeConfig: {
    basePath,
  },
}

module.exports = nextConfig
