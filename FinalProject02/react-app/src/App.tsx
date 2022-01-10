import React from "react"
import "./App.css"
import {Outlet} from "react-router-dom"
import {GHome} from "./pages/GHome"
import {ToastContainer} from "react-toastify"

function App() {

  return (
          <>
            <ToastContainer
                    position="top-right"
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    hideProgressBar={true}
                    autoClose={1000}/>
            <GHome/>
            <Outlet/>
          </>
  )
}

export default App
