import {addDecrement, addIncrement} from "../redux/actions"
import {useAppDispatch, useAppSelector} from "../hooks"
import {useEffect} from "react"


export const DummyComponent = () => {
  const dispatch = useAppDispatch()
  const incrementSelector = useAppSelector(state => state?.abcReducer?.counter)


  useEffect(() => {
    console.log("selector triggered")
  }, [incrementSelector])

  function bb() {
    return dispatch(addIncrement())
  }

  const aa = () => {
    dispatch(bb())
  }


  return (
          <>
            <button onClick={() => dispatch(addIncrement())}>INCREMENT</button>
            <button onClick={aa}>INCREMENT ASYNC</button>
            <button onClick={() => dispatch(addDecrement())}>DECREMENT</button>
            <div>
              {incrementSelector}
            </div>
          </>
  )
}


