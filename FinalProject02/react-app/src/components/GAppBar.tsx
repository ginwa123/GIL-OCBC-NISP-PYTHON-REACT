import {AppBar, Toolbar, Typography} from "@mui/material"

export const GAppBar = () => {
  return (
          <AppBar position="fixed" sx={{zIndex: 1}}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                React X Flask
              </Typography>
            </Toolbar>
          </AppBar>
  )
}
