import {DECREMENT, INCREMENT} from "./action-types"

const initialState = {
  counter: 0
}

export const abcReducer = (state = initialState, action: any) => {
  const {type, payload} = action
  if (type === INCREMENT) {
    return {
      ...state, counter: state.counter + payload
    }
  }
  else if (type === DECREMENT) {
    return {
      ...state, counter: state.counter - payload
    }
  }
  return state
}


