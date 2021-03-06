import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import {userSlice} from "./user/reducer"
import thunk from "redux-thunk"
import {themeSlice} from "./theme/reducer"
import {loadingSlice} from "./loading/reducer"


export const store = configureStore({
  reducer: {
    usersReducer: userSlice.reducer,
    themeReducer: themeSlice.reducer,
    loadingReducer: loadingSlice.reducer
  },
  middleware: [
    logger,
    thunk
  ]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch