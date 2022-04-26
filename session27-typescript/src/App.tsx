import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css"
import {Home} from "./components/Home"
import {Users} from "./components/Users"

function App() {
  return (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="users" element={<Users/>}/>
              </Routes>
            </BrowserRouter>,

          </div>
  )
}

export default App
