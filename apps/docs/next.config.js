/** @type {import('next').NextConfig} */
const path = require('path');

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  transpilePackages: ['opub-ui'],
};

module.exports = withNextra(nextConfig);
