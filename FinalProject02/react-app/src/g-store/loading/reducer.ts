import {createSlice} from "@reduxjs/toolkit"

interface Loading {
  isLoading: boolean
}

const initialState: Loading = {
  isLoading: true
}

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoading: (state, {payload}) => {
      return {...state, isLoading: payload}
    }
  },

})

export const sActionLoading = loadingSlice.actions