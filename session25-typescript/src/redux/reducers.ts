import {INCREMENT} from "./action-types"
import {json} from "stream/consumers"

const initialState = {
  counter: 0
}

export const abcReducer = (state = initialState, action: any) => {
  console.log("from reducer", action)
  if (action.type === INCREMENT) {
    // const payload = action.payload
    return {
      ...state, counter: state.counter + action.payload
    }
  }
  else if (action.type === "DECREMENT") {
    return {
      ...state, counter: state.counter - action.payload
    }
  }
  return state
}


