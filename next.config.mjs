/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
     images: { 
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
      },
    ],
     unoptimized: true,
  },
    assetPrefix: isProd ? '/inv-pages/' : '',
  basePath: isProd ? '/inv-pages' : '',
  output: 'export'
};

export default nextConfig;
