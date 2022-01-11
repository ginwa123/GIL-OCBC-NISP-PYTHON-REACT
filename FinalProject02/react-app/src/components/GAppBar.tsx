import {
  AppBar,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material"
import {NavigateFunction, useNavigate} from "react-router-dom"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import {useAppDispatch, useAppSelector} from "../g-store/hooks"
import {sActionTheme} from "../g-store/theme/reducer"

export const GAppBar = () => {
  const sNavigate: NavigateFunction = useNavigate()
  const sDispatch = useAppDispatch()
  const theme = useTheme()
  const sAppSelector = useAppSelector(state => state.loadingReducer)

  const toggleTheme = () => {
    if (theme.palette.mode === "light") sDispatch(sActionTheme.setIsLight(false))
    else sDispatch(sActionTheme.setIsLight(true))
  }

  const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 3,
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }))

  return (
          <>
            <AppBar onClick={() => sNavigate("/home")} color={"primary"} position="fixed" sx={{zIndex: 1}}>
              {sAppSelector.isLoading && <BorderLinearProgress/>}
              <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                  React X Flask
                </Typography>
                <IconButton sx={{ml: 1}} onClick={toggleTheme} color="inherit">
                  {theme.palette.mode === "dark" ? <Brightness7Icon/> : <Brightness4Icon/>}
                </IconButton>
              </Toolbar>
            </AppBar>
          </>

  )
}
