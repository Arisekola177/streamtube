/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org', 'i.ibb.co'],
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'image.tmdb.org',
            pathname: '/t/p/original/**',
          },
        ],
      },
};

export default nextConfig;
