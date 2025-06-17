import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/studio', // Replace 'studio' with your repository name
  images: {
    unoptimized: true, // Required for static export
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
      }
    ],
  },
};

export default nextConfig;
