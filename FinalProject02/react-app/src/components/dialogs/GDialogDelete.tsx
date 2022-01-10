import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material"
import {useNavigate, useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import {sDeleteUser} from "../../g-store/user/action-async"
import {useEffect, useState} from "react"
import axios from "axios"
import {toast} from "react-toastify"
import {User} from "../../g-store/user/reducer"

export const GDialogDelete = () => {
  const sNavigate = useNavigate()
  const sDispatch = useDispatch()
  const sParams = useParams()
  const [sData, setData] = useState<User>({key: "", firstName: "", lastName: ""})

  useEffect(() => {
    axios.get("/keys/" + sParams.key)
            .then(response => setData(response.data))
            .catch(error => toast.error(error.response.data.errorMsg))
  })

  const handleDeleteClick = () => {
    sDispatch(sDeleteUser(sParams.key ? sParams.key : ""))
    sNavigate(-1)
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
                  Are you sure want to delete this user ? {"\n"}
                </DialogContentText>
                <DialogContentText>
                  Key {sData.key}, name: {sData.firstName} {sData.lastName}
                </DialogContentText>

              </DialogContent>
              <DialogActions>
                <Button onClick={() => sNavigate(-1)}>Cancel</Button>
                <Button onClick={handleDeleteClick} autoFocus>
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </>
  )
}