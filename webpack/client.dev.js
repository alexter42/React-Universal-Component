const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")


modeule.expoertss ={
    name:"client",
    target:"web",
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use:"babel-loader"
        },
        {
            test: /\.css$/,
            use: ExtractCssChunks.extract({
                use: "css-loader",
            }),
        }
    ]
    },
    devtool: "eval",
    entry: path.resolve(_dirname,"../src/index.js"),
    plugins: [
        new HtmlWebpackPlugin(),
        new webpackOptimizeCommonsChunksPlugins({
            names:[bootstrap],
            filename:"[name].js",
            minchunks: Infinity
        }),
    ],
    output:{
        filename: "[name].js",
        chunkFilename : "[name].js",
        path:path.resolve(_dirname,"../buildClient.js"), 
        publicPath: '/static/'
    }

}