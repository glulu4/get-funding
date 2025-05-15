/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  redirects: async () => {
    return [];
  },

  // redirects: async () => {
  //   return [
  //     {
  //       source: "/:path*", // Redirect all pages
  //       // source: "/((?!dvd$).*)", // Match everything EXCEPT "/dvd"

  //       destination: "https://www.nytimes.com", // Redirect to a notice page
  //       permanent: false,
  //     },
  //   ];
  // },
  
};

export default nextConfig;
