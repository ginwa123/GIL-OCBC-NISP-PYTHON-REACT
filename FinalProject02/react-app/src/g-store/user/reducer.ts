import {createSlice} from "@reduxjs/toolkit"
import {sAddUser, sDeleteUser, sEditUser, sFetchUserInDebug} from "./action-async"

export interface User {
  key: string
  firstName: string,
  lastName: string
}

const initialState = {
  data: [] as User[],
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(sFetchUserInDebug.fulfilled, (state, {payload}) => {
      const newData: User[] = []
      for (let [key, value] of Object.entries(payload)) {
        newData.push({
          key: key,
          firstName: value.firstName,
          lastName: value.lastName
        })
      }
      state.data = newData
    })
    builder.addCase(sAddUser.fulfilled, (state, {payload}) => {
      state.data.push(payload)
    })
    builder.addCase(sEditUser.fulfilled, (state, {payload}) => {
      const userIndex = state.data.findIndex(value => value.key === payload.key)
      state.data.splice(userIndex, 1, payload as User)
    })
    builder.addCase(sDeleteUser.fulfilled, (state, {payload}) => {
      const deletedUserIndex = state.data.findIndex(value => value.key === payload.key)
      state.data.splice(deletedUserIndex, 1)
    })
  },
})

