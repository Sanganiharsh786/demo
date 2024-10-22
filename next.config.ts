import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/about/:path*",
        destination: "/contact/:path*",
        permanent: true,
        locale: false,
      },
    ];
  },
};

export default nextConfig;
