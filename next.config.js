/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ui-avatars.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/confession",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
