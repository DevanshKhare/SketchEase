/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "liveblocks.io", port: "" },
    ],
  },
  webpack: (config, { webpack }) => {
    config.externals.push({
      canvas: "commonjs canvas",
    });
    return config;
  },
};

export default nextConfig;
