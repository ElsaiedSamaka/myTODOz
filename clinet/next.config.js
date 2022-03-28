/** @type {import('next').NextConfig} */
const fs = require('fs');
const nextConfig = {
  env: {
    util: fs.readFileSync('./static/util.js').toString()
  },
  reactStrictMode: true,
}

module.exports = nextConfig
