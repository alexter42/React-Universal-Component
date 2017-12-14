import React from "react"
import ReactDom from "react-dom/server"
import {
    flushChunkNames
} from 'react-universal-component/server'
import flushChunks from 'webpak-flush-chunks'
import App from '../src/components/App'
export default ({ clientStats }) => (req, res) => {
    const app = ReactDOM.renderToString(<App />)
    const chunkNames = flushChunkNames()



    const {
        js,
        styles,
        cssHash,
        scripts,
        stylesheets
    } = flushChunks(clientStats, { chunkNames })

    console.log('Dinamic Chunk Names rendered', chunkNames)
    console.log("Scripts", scripts)
    console.log('stylesheets', stylesheets)
}


res.send(
    `<!doctype html>
        <html>
            <head>
                <meta charset=utf-8">
                <title>React Universal App</title>
                ${styles}
            </head>
        <body>
            </body>
            <div id="root">${app}</div>
            ${cssHash}
            ${js}
            </body>
        </html>
         `
)