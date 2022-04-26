import {DECREMENT, INCREMENT} from "./action-types"
import {Dispatch} from "redux"

export const addIncrement = () => ({
  type: INCREMENT,
  payload: 1
})

export const addDecrement = () => ({
  type: DECREMENT,
  payload: 1
})

export const AddIncrementAsync = () => {
  return (dispatch: Dispatch) => setTimeout(() => {
    console.log("sdddd")
    dispatch(addIncrement())
  }, 200)
}