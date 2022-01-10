import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify"
import {sAddUser, sFetchUserInDebug} from "./action-async"

export interface User {
  key: string
  firstName: string,
  lastName: string
}


const initialState: User[] = []
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(sFetchUserInDebug.fulfilled, (state: User[], {payload}) => {
      const newData: User[] = []
      for (let [key, value] of Object.entries(payload)) {
        newData.push({
          key: key,
          firstName: value.firstName,
          lastName: value.lastName
        })
      }
      state.push(...newData)
    })
  },
})

export const sActionUser = userSlice.actions