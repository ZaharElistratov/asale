/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'sass',)],
    prependData: `@import "@/styles/variables.scss";`,
  },
}

module.exports = nextConfig
