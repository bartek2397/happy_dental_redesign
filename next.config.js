/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'images.unsplash.com',
            'res.cloudinary.com',
            'lh3.googleusercontent.com'
        ],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/**',
            },
          ],
      }
}

module.exports = nextConfig
