const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            "window.hljs": "highlight.js",
        }),
    ],
};
