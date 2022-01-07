import React from "react"
import "./App.css"
import "@fontsource/roboto/400.css"
import "react-toastify/dist/ReactToastify.css"
import {Outlet} from "react-router-dom"
import {GHome} from "./pages/GHome"
import {Provider} from "react-redux"
import {store} from "./g-store/store"



function App() {
  return (
          <>
            <Provider store={store}>
              <GHome/>
              <Outlet/>
            </Provider>
          </>
  )
}

export default App
