/** @type {import('next').NextConfig} */

const nextConfig = {
    skipMiddlewareUrlNormalize: true,
    reactStrictMode: true,
    env: {
        API_URL:process.env.API_URL,
        UPLOAD_URL:process.env.UPLOAD_URL
    },
    images: {
        domains: []
    },
 
}

module.exports = nextConfig
