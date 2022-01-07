import {Container, Fab} from "@mui/material"
import {GKabanContainer} from "../components/g-kaban-container/GKabanContainer"
import AddIcon from "@mui/icons-material/Add"
import {ToastContainer} from "react-toastify"
import React from "react"
import {GAppBar} from "../components/GAppBar"
import {Link} from "react-router-dom"

export const GHome = () => {
  return (
          <>
            <GAppBar pTitle={"Ginwa Kanban"}/>
            <Container maxWidth="lg">
              <GKabanContainer/>
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


            <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
            />

          </>
  )
}