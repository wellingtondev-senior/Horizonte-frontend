/** @type {import('next').NextConfig} */

const nextConfig = {
    skipMiddlewareUrlNormalize: true,
    reactStrictMode: true,
    env: {
        CODE_CHAT_URL:process.env.CODE_CHAT_URL,
        CODE_CHAT_KEY: process.env.CODE_CHAT_KEY,
        API_URL:process.env.API_URL
    },
    images: {
        domains: []
    },
 
}

module.exports = nextConfig
