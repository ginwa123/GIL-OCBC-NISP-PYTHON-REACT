// noinspection ES6UnusedImports

import {createTheme, Theme} from "@mui/material/styles"
import {lightGreen} from "@mui/material/colors"
import type {} from '@mui/x-data-grid/themeAugmentation';
export const lightTheme: Theme = createTheme({
  palette: {
    mode : "light",
    primary: lightGreen,
    secondary: {
      main: "#388e3c"
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        // color : "#aed581"
      }
    }
  }


})

export const darkTheme: Theme = createTheme({
  palette: {
    mode : "dark",
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#00838f",
    },
    background: {
      default: "#000000",
      paper: "#000000"
    },


  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#383838",
        },
      }
    },
    MuiAppBar: {
      styleOverrides:{
        root: {
          backgroundColor :"#0d47a1"
        }
      }
    }
  }
})


