import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material"
import {NavigateFunction, Params, useNavigate, useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import {sDeleteUser} from "../../g-store/user/action-async"
import {useEffect, useState} from "react"
import axios from "axios"
import {toast} from "react-toastify"
import {User} from "../../g-store/user/reducer"
import {useAppSelector} from "../../g-store/hooks"
import {Dispatch} from "@reduxjs/toolkit"

export const GDialogDelete = () => {
  const sNavigate: NavigateFunction = useNavigate()
  const sDispatch: Dispatch<any> = useDispatch()
  const sParams: Readonly<Params> = useParams()
  const sDefaultData: User = {key: "", firstName: "", lastName: ""}
  const [sData, setData] = useState<User>(sDefaultData)
  const sAppSelector: User[] = useAppSelector(state => state.usersReducer).data

  useEffect(() => {
    if (sParams.key) {
      // delete one user
      document.title = "Dialog delete user"
      // load local first then remote
      const user: User | undefined = sAppSelector.find(user => user.key === sParams.key)
      if (user) setData(user)
      axios.get("/keys/" + sParams.key)
              .then(response => setData(response.data))
              .catch(error => toast.error(error.response.data.errorMsg))
    } else {
      // delete batch
      document.title = "Dialog delete batch"

    }
  }, [])

  const handleDeleteClick = () => {
    if (sParams.key) {
      sDispatch(sDeleteUser({
        key: sParams.key ? sParams.key : "",
        is_toast: true
      }))
    } else {
      const batchKey: string = sParams.batch_key as string
      const keys: string[] = batchKey.split(",")
      keys.forEach((key) => {
        sDispatch(sDeleteUser({
          key: key,
          is_toast: false
        }))
      })
    }
    sNavigate("/home")
  }

  return (
          <>
            <Dialog
                    open={true}
            >
              <DialogTitle>
                DELETE
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {sParams.key && "Are you sure want to delete this user  ? \n "}
                  {sParams.batch_key && "are you sure want to delete multiple user ?"}
                </DialogContentText>
                <DialogContentText>
                  {sParams.key && sData.firstName + " " + sData.lastName}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => sNavigate("/home")}>Cancel</Button>
                <Button onClick={handleDeleteClick} autoFocus>
                  Delete Now
                </Button>
              </DialogActions>
            </Dialog>
          </>
  )
}