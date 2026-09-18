import type { NextConfig } from 'next';

/**
 * Enterprise security headers configuration (HSTS, CSP, XFO, Sniffing protection).
 */
const nextConfig: NextConfig = {
  // Disables standalone output on Vercel to fix the missing .nft.json file trace error,
  // while keeping standalone output active when running inside Docker.
  output: process.env.VERCEL ? undefined : 'standalone',
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https: data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;