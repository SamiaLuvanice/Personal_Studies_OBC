/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images-assets.nasa.gov"
      }
    ]
  }
};

export default nextConfig;