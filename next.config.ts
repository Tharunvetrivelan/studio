import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Output a static HTML export for GitHub Pages
  output: 'export', // Add this line

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Disable Next.js Image Optimization for static export
    // GitHub Pages doesn't have a Node.js server to run the optimization
    unoptimized: true, // Add this line
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// Only add basePath and assetPrefix in production (for GitHub Pages project pages)
if (process.env.NODE_ENV === 'production') {
  // basePath is the path prefix for all links and assets in the application
  nextConfig.basePath = '/studio'; // Replace 'studio' with your actual repository name

  // assetPrefix is used for serving assets like images, fonts, etc.
  // It should typically match basePath for static exports on GitHub Pages
  nextConfig.assetPrefix = '/studio/'; // Add a trailing slash here
}

export default nextConfig;
