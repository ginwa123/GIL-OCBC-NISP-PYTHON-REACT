import {configureStore,} from "@reduxjs/toolkit"
import {abcReducer} from "./reducers"
import logger from "redux-logger"
import thunk from "redux-thunk"

const reducer = {
  abcReducer: abcReducer
}

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk, logger]
          ,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
