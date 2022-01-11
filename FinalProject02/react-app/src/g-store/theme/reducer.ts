import {createSlice} from "@reduxjs/toolkit"

export interface Theme {
  isLight: boolean
}

const initialState: Theme = {
  isLight: true
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setIsLight: (state, {payload}) => {
      return {...state, isLight: payload}
    }
  },

})

export const sActionTheme = themeSlice.actions