const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
};

try {
  module.exports = withContentlayer(nextConfig);
} catch (error) {
  // Ensure error is a proper Error instance
  if (!(error instanceof Error)) {
    const err = new Error(String(error));
    err.stack = error?.stack;
    throw err;
  }
  throw error;
}
