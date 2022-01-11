import React from "react"
import {Outlet} from "react-router-dom"
import {GHome} from "./pages/GHome"
import {ToastContainer} from "react-toastify"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {darkTheme, lightTheme} from "./custom-theme"
import {useAppSelector} from "./g-store/hooks"

function App() {
  const sThemeSelector = useAppSelector(state => state.themeReducer)

  return (
          <>
            <ThemeProvider theme={sThemeSelector.isLight ? lightTheme : darkTheme}>
              <CssBaseline/>
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
            </ThemeProvider>
          </>
  )
}

export default App
