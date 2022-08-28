const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: [
            "minio-cloud-s3.jidayyy.com",
            "avatarfiles.alphacoders.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
        ],
    },

    async rewrites() {
        return [
            {
                source: "/api/data",
                destination: process.env.SERVER_URL, // Proxy to Backend
            },
        ];
    },
});
