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
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: "file-loader?name=images/[name].[ext]"
            }
        ]
    },
    resolve: {
        alias: {
            styles: path.join(__dirname, "app", "styles"),
            assets: path.join(__dirname, "assets")
        }
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}