const path = require("path")

module.exports = {
    entry: "./app/Entry.jsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public", "build"),
        publicPath: "/build/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        alias: {
            styles: path.join(__dirname, "app", "styles")
        }
    }
}