import {useDispatch, useSelector} from "react-redux"
import {addIncrement} from "../redux/actions"
import {INCREMENT} from "../redux/action-types"
import {useAppDispatch, useAppSelector} from "../hooks"
import {useEffect} from "react"

export const DummyComponent = () => {
  const dispatch = useAppDispatch()
  const incrementSelector = useAppSelector(state => state.counter)
  const handleClick = () => {
    dispatch(addIncrement())
  }

  useEffect(() => {
    console.log("selector triggered")
  }, [incrementSelector])

  return (
          <>
            <button onClick={handleClick}>Click Me</button>
            {incrementSelector}
          </>
  )
}

