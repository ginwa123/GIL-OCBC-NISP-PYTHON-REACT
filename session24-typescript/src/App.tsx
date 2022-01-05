import React from "react"
import "./App.css"
import {Navigate, Route, Routes, useNavigate} from "react-router-dom"
import {GHeader} from "./components/GHeader"
import {Container} from "@mui/material"
import {GTodos} from "./components/GTodos"
import {GTodo} from "./components/GTodo"
import {GAbout} from "./components/GAbout"
import {GNotFound} from "./components/GNotFound"

const pages = ["Todos", "About",]

function App() {

  const navigate = useNavigate()

  const setOnNavMenuClickListener = (event: string) => {
    console.log("nav menu click listener emitted")
    navigate(`/${event}`)
  }

  const setOnTodoItemClickListener = (id: string) => {
    console.log(`item clicked ${id}`)
    navigate(`/todos/${id}`)
    // navigate("/about")
  }

  return (
          <>
            <div>
              <GHeader pTitle={"App Bar"} pPages={pages} pNavMenuClickListener={setOnNavMenuClickListener}/>
              <Container maxWidth="md" sx={{
                marginTop: 10
              }}>
                <Routes>
                  <Route path="/">
                    <Route path="" element={<Navigate to={"/todos"}/>}/>
                    <Route path="todos" element={<GTodos pItemClickListener={setOnTodoItemClickListener}/>}/>
                    <Route path="todos/:id" element={<GTodo/>}/>
                    <Route path="about" element={<GAbout/>}/>
                  </Route>
                  <Route path="*" element={<GNotFound/>}/>
                </Routes>
              </Container>
            </div>
          </>
  )
}

export default App
