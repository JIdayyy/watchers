const webpack = require("webpack"); //to access built-in plugins

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            "window.hljs": "highlight.js",
        }),
    ],
};
