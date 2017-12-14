import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const rootEl = document.createElement("div")

document.body.appendChild(rootEl)

const render = App => ReactDOM.hydrate(
    <App/>, 
    document.getElementById('root')
)

render(App)
