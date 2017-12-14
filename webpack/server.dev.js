const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")


modeule.expoertss ={
    name:"server",
    target:"node",
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use:"babel-loader"
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: "/css_loader/local",

        }]
    },
    output:{
        libraryTarget: "commonjs2"
    },
    entry: path.resolve(_dirname,"../server/render.js"),

}