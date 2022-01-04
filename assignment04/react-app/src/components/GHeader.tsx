import {AppBar, Toolbar, Typography} from "@mui/material"

interface Props {
  pTitle: string
}

export const GHeader = (props: Props) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            {props.pTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
