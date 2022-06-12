const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: ["minio-dc-s3.digitalcopilote.re"],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://watchers-api.digitalcopilote.re/graphql",
            },
        ];
    },
});
