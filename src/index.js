import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
//reset.css rem.js
import "./assets/css/reset.css"
import "./assets/js/rem"
import { HashRouter } from "react-router-dom"
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  ,
  document.getElementById('root')
);


