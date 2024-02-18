/** @type {import('next').NextConfig} */

import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  cacheOnFrontEndNav: true,
  swSrc: "src/sw.ts", // add the path where you create sw.ts
  swDest: "public/sw.js",
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development", // to disable pwa in development
});

const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.dummyjson.com"],
  },
};

export default withSerwist(nextConfig);
