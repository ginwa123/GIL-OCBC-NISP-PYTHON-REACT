import {GAppBar} from "../components/GAppBar"
import {Container, Fab} from "@mui/material"
import {GTable} from "../components/GTable"
import React from "react"
import {Link} from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"

export const GHome = () => {
  return (
          <>
            <GAppBar />
            <Container maxWidth="md" sx={{
              marginTop: 10
            }}>
              <GTable/>
            </Container>
            <Link to={"/home/dialog/add"}>
              <Fab color="primary"
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
            </Link>
          </>
  )
}