import {AppBar, IconButton, Toolbar, Typography, useTheme} from "@mui/material"
import {NavigateFunction, useNavigate} from "react-router-dom"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import {useAppDispatch} from "../g-store/hooks"
import {sActionTheme} from "../g-store/theme/reducer"

export const GAppBar = () => {
  const sNavigate: NavigateFunction = useNavigate()
  const sDispatch = useAppDispatch()
  const theme = useTheme()

  const toggleTheme = () => {
    if (theme.palette.mode === "light") sDispatch(sActionTheme.setIsLight(false))
    else sDispatch(sActionTheme.setIsLight(true))
  }

  return (
          <AppBar onClick={() => sNavigate("/home")} color={"primary"} position="fixed" sx={{zIndex: 1}}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                React X Flask
              </Typography>
              <IconButton sx={{ml: 1}} onClick={toggleTheme} color="inherit">
                {theme.palette.mode === "dark" ? <Brightness7Icon/> : <Brightness4Icon/>}
              </IconButton>
            </Toolbar>
          </AppBar>
  )
}
