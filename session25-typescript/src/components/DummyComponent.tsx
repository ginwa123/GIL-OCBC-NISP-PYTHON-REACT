import {useDispatch, useSelector} from "react-redux"
import {addDecrement, addIncrement} from "../redux/actions"
import {INCREMENT} from "../redux/action-types"
import {useAppDispatch, useAppSelector} from "../hooks"
import {useEffect} from "react"

export const DummyComponent = () => {
  const dispatch = useAppDispatch()
  const incrementSelector = useAppSelector(state => state.counter)
  const handleClick = () => {

  }

  useEffect(() => {
    console.log("selector triggered")
  }, [incrementSelector])

  return (
          <>
            <div>
              <button onClick={() =>  dispatch(addIncrement())}>INCREMENT</button>
              <button onClick={() =>  dispatch(addDecrement())}>DECREMENT</button>
            </div>
            <div>
              {incrementSelector}
            </div>


          </>
  )
}

