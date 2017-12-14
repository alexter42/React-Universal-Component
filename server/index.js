const express = require("express")
const webpack = require("webpack")
const webpackDevMidleware = require("webpack-dev-middleware")
const webpackHotServerMiddleware = require("webpack-hot-server-middleware")
const clientConfig = require("../webpack/client.dev")


const app = express()

const compiler = webpack(clientConfig)
const clientCompiler = compiler

const publicPath = clientConfig.output.publicPath
const options =  {publicPath, stats: {colors: true}}

app.use(webpackDevMidleware(compiler, options))
app.use(webpackHotServerMiddleware(compiler))

app.liser(3000, () =>{
    console.log("Listening @ http://localhost:3000")
})