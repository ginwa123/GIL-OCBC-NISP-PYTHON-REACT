import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import {GDialogForm} from "./components/g-dialog/GDialogForm"

// @ts-ignore
ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/home">
                <Route path="" element={<App/>}>
                  <Route path="dialog" >
                    <Route path=":mode" element={<GDialogForm/>}>
                      <Route path=":index" element={<GDialogForm/>}/>
                    </Route>
                  </Route>
                </Route>
              </Route>
              <Route
                      path="*"
                      element={<Navigate to="/home"/>}
              />
            </Routes>
          </BrowserRouter>

        </React.StrictMode>,
        document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
