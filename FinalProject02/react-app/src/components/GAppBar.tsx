import {AppBar, Toolbar, Typography} from "@mui/material"
import {NavigateFunction, useNavigate} from "react-router-dom"

export const GAppBar = () => {
  const sNavigate: NavigateFunction = useNavigate()

  return (
          <AppBar onClick={() => sNavigate("/home")} color={"primary"} position="fixed" sx={{zIndex: 1}}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                React X Flask
              </Typography>
            </Toolbar>
          </AppBar>
  )
}
