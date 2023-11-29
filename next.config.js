/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecssen.ca",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
