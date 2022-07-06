const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: [
            "minio-dc-s3.digitalcopilote.re",
            "avatarfiles.alphacoders.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
        ],
    },

    async rewrites() {
        return [
            {
                source: "/api/data",
                destination: "https://watchers-api.digitalcopilote.re/graphql", // Proxy to Backend
            },
        ];
    },
});
