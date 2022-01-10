import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material"
import {useNavigate, useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import {User} from "../../g-store/user/reducer"
import {BaseSyntheticEvent, useEffect, useState} from "react"
import {sAddUser, sEditUser} from "../../g-store/user/action-async"
import axios from "axios"
import {toast} from "react-toastify"

export const GDialogAddUpdateForm = () => {
  const sNavigate = useNavigate()
  const sDispatch = useDispatch()
  const [sForm, setForm] = useState<User>({key: "", firstName: "", lastName: ""})
  const sParams = useParams()

  useEffect(() => {
    if (sParams.mode === "edit") {
      axios.get("/keys/" + sParams.key)
              .then(response => setForm(response.data))
              .catch(error => toast.error(error.response.data.errorMsg))
    }
  }, [])

  const handleClickAddOrUpdate = () => {
    if (sParams.mode === "add") sDispatch(sAddUser(sForm))
    else sDispatch(sEditUser({key: sParams.key, form: sForm}))
    sNavigate(-1)
  }

  const handleKeyForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setForm(prevState => {
      return {...prevState, key: formValue}
    })
  }

  const handleFirstNameForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setForm(prevState => {
      return {...prevState, firstName: formValue}
    })
  }

  const handleLastNameForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setForm(prevState => {
      return {...prevState, lastName: formValue}
    })
  }

  const button = () => {
    if (sParams.mode === "add") {
      return (<>
        <Button onClick={() => sNavigate(-1)}>Cancel</Button>
        <Button onClick={handleClickAddOrUpdate}>Add Now</Button>
      </>)
    } else {
      return (<>
        <Button onClick={() => sNavigate(-1)}>Cancel</Button>
        <Button onClick={handleClickAddOrUpdate}>Update Now</Button>
      </>)
    }
  }

  return (
          <>
            <Dialog open={true} maxWidth="md">
              <DialogTitle>{sParams.mode?.toUpperCase()}</DialogTitle>
              <DialogContent>
                <Grid container spacing={2} sx={{marginTop: 1}}>
                  <Grid item xs={12}>
                    <TextField InputProps={{readOnly: sParams.mode === "edit"}} value={sForm.key}
                               onChange={handleKeyForm} fullWidth label="Key" variant="outlined"/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField value={sForm.firstName} onChange={handleFirstNameForm} fullWidth label="First Name"
                               variant="outlined"/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField value={sForm.lastName} onChange={handleLastNameForm} fullWidth label="Last Name"
                               variant="outlined"/>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                {button()}
              </DialogActions>
            </Dialog>
          </>
  )
}