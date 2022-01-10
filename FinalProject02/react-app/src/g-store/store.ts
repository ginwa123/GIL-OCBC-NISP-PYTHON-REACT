import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import {userSlice} from "./user/reducer"
import thunk from "redux-thunk"


export const store = configureStore({
  reducer: {
    usersReducer: userSlice.reducer
  },
  middleware: [
    logger,
    thunk
  ]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch