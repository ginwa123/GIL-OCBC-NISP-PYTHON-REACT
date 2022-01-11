import {GAppBar} from "../components/GAppBar"
import {Container, Fab} from "@mui/material"
import {GTable} from "../components/GTable"
import React, {useEffect} from "react"
import {NavigateFunction, useNavigate} from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"

export const GHome = () => {
  const sNavigate: NavigateFunction = useNavigate()

  useEffect(() => {
    document.title = "Home"
  }, [])

  return (
          <>
            <GAppBar/>
            <Container maxWidth="md" sx={{
              marginTop: 10,
            }}>
              <GTable/>
            </Container>
            <Fab onClick={() => sNavigate("/home/dialog/add")}
                 color="primary"
                 aria-label="add"
                 sx={{
                   margin: 0,
                   top: "auto",
                   right: 20,
                   bottom: 20,
                   left: "auto",
                   position: "fixed",
                 }}
            >
              <AddIcon/>
            </Fab>
          </>
  )
}