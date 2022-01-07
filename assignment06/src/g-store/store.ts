import {configureStore} from "@reduxjs/toolkit"
import {kanbanSlice} from "./kanban"
import logger from "redux-logger"
import thunk from "redux-thunk"


export const store = configureStore({
  reducer: {
    taskReducer: kanbanSlice.reducer
  },
  middleware: [
    logger,
    thunk
  ]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch