
/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  
  const customCorsHeaders = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, PUT, DELETE, OPTIONS',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization',
            },
            {
              key: 'Cache-Control',
              value: 'public, max-age=604800', // Cache de una semana para JS y CSS
            },
          ],
        },
        {
          source: '/public/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=604800', // Cache de una semana para imágenes
            },
          ],
        },
      ];
    },
  };
  
  const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ['rickandmortyapi.com', 'fakestoreapi.com'],
    },
    ...customCorsHeaders,
  };
  
  module.exports = withBundleAnalyzer(nextConfig);
  
