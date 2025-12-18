/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    serverComponentsExternalPackages: ['@sparticuz/chromium'],
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), '@sparticuz/chromium'];
    return config;
  },
};

export default config;
