const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

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
                use: ExtractTextPlugin.extract({
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            }
        ]
    },
    resolve: {
        alias: {
            styles: path.join(__dirname, "app", "styles")
        }
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}