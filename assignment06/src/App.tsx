import React, {useState} from "react"
import "./App.css"
import {GAppBar} from "./components/GAppBar"
import {Container, Fab} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import {GKabanContainer} from "./components/g-kaban-container/GKabanContainer"
import {GDialogForm} from "./components/GDialogForm"
import "@fontsource/roboto/400.css"
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"

function App() {
  const [sToggleDialog, setToggleDialog] = useState(false)

  const onDialogListener = (dialogIsOpen: boolean): void => {
    setToggleDialog(dialogIsOpen)
  }

  return (
          <>
            <GAppBar pTitle={"Ginwa Kanban"}/>
            <Container maxWidth="lg">
              <GKabanContainer/>
            </Container>
            <GDialogForm
                    pName={"Add Kanban"}
                    pToggleDialog={sToggleDialog}
                    pSetDialogListener={onDialogListener}/>

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
                 onClick={() => setToggleDialog(true)}
            >
              <AddIcon/>
            </Fab>
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

export default App
