import {createTheme} from "@mui/material/styles"
import {green} from "@mui/material/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: "#82b1ff",
    },

  },
  components: {
    MuiAppBar: {
      styleOverrides: {},
      defaultProps: {}

    }
  }
})

export default theme