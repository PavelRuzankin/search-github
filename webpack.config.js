const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const isDev = process.env.NODE_ENV === "production"

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: ["./index.jsx"]
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3900,
        hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: "/node_modules/",
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react"
                        ],

                    }
                }
            }
        ]
        
    }
}