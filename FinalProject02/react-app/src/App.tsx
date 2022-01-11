import React from "react"
import {Outlet} from "react-router-dom"
import {GHome} from "./pages/GHome"
import {ToastContainer} from "react-toastify"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {darkTheme, lightTheme} from "./custom-theme"
import {useAppSelector} from "./g-store/hooks"
import {Theme} from "./g-store/theme/reducer"

function App() {
  const sThemeSelector: Theme = useAppSelector(state => state.themeReducer)


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
                      autoClose={1000}
                      toastStyle={{
                        backgroundColor: sThemeSelector.isLight ? "white" : "#383838",
                        color: sThemeSelector.isLight ? "black" : "white"
                      }}/>
              <GHome/>
              <Outlet/>
            </ThemeProvider>
          </>
  )
}

export default App
