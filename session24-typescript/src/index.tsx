import React from "react"
import ReactDOM from "react-dom"
// import './index.css';
import reportWebVitals from "./reportWebVitals"
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom"
import {GNotFound} from "./components/GNotFound"
import {GHeader} from "./components/GHeader"
import {Container} from "@mui/material"
import {GAbout} from "./components/GAbout"
import {GTodos} from "./components/GTodos"
import App from "./App"





ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            <App/>
          </BrowserRouter>,
        </React.StrictMode>,
        document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
