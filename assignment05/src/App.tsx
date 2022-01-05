import React, {useState} from "react"
import "./App.css"
import {Box, Container} from "@mui/material"
import {People} from "./models/People"
import {GQueue} from "./components/g-queue/GQueue"
import {GInputForm} from "./components/GInputForm"
import {GHeader} from "./components/GHeader"
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  const [sPeoples, setPeoples] = useState<People[]>([])
  const buttonClickListener = (event: People[]) => setPeoples(event)

  return (
          <Container maxWidth="lg">
            <GHeader pName={"Simulasi Antrian"}/>
            <Box marginTop={10}>
              <GInputForm pButtonListener={buttonClickListener}/>
              <GQueue pItems={sPeoples}/>
            </Box>
          </Container>
  )
}


export default App
