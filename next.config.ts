import type { NextConfig } from "next";

/**
 * Security + caching headers for Lighthouse Best Practices / SEOKit.
 * Compression (Gzip/Brotli) is enabled by the Node/Next runtime and by
 * hosting platforms (Vercel) automatically - do not disable `compress`.
 */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
  },
  async redirects() {
    return [
      {
        source: "/solutions",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/nabhi-persona",
        destination: "/products/nabhi-persona",
        permanent: true,
      },
      {
        source: "/solutions/nabhi-persona",
        destination: "/products/nabhi-persona",
        permanent: true,
      },
      {
        source: "/nabhi-cares",
        destination: "/products/nabhi-cares",
        permanent: true,
      },
      {
        source: "/nabhi-care",
        destination: "/products/nabhi-cares",
        permanent: true,
      },
      {
        source: "/products/nabhi-care",
        destination: "/products/nabhi-cares",
        permanent: true,
      },
      {
        source: "/solutions/nabhi-cares",
        destination: "/products/nabhi-cares",
        permanent: true,
      },
      {
        source: "/solutions/second-brain",
        destination: "/products/nabhi-persona",
        permanent: true,
      },
      {
        source: "/solutions/enterprise-knowledge-management",
        destination: "/services/enterprise-knowledge-management",
        permanent: true,
      },
      {
        source: "/industries",
        destination: "/products/nabhi-cares",
        permanent: true,
      },
      {
        source: "/industries/healthcare-ai",
        destination: "/products/nabhi-cares",
        permanent: true,
      },
      {
        source: "/resources/enterprise-second-brain-playbook",
        destination: "/resources/enterprise-nabhi-persona-playbook",
        permanent: true,
      },
      {
        source: "/ai-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/software-development",
        destination: "/services",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
