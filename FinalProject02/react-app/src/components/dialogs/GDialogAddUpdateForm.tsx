import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material"
import {NavigateFunction, Params, useNavigate, useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import {User} from "../../g-store/user/reducer"
import {BaseSyntheticEvent, useEffect, useState} from "react"
import {sAddUser, sEditUser} from "../../g-store/user/action-async"
import axios from "axios"
import {toast} from "react-toastify"
import {useAppSelector} from "../../g-store/hooks"
import {Dispatch} from "@reduxjs/toolkit"


export const GDialogAddUpdateForm = () => {
  const sNavigate: NavigateFunction = useNavigate()
  const sDispatch: Dispatch<any> = useDispatch()
  const [sForm, setForm] = useState<User>({key: "", firstName: "", lastName: ""})
  const [sErrorForm, setErrorForm] = useState({
    key: {
      isError: true,
      message: "Required"
    },
    firstName: {
      isError: true,
      message: "Required"
    },
    lastName: {
      isError: true,
      message: "Required"
    }
  })
  const sParams: Readonly<Params> = useParams()
  const sAppSelector: User[] = useAppSelector(state => state.usersReducer).data
  const [sOpen, setOpen] = useState(true)

  const handleCloseDialog = () =>{
    setOpen(false)
    setTimeout(args => {
      sNavigate("/home")
    }, 100)
  }

  useEffect(() => {
    if (sParams.mode === "edit") {
      setErrorForm({
        key: {
          isError: false,
          message: "Required"
        },
        firstName: {
          isError: false,
          message: "Required"
        },
        lastName: {
          isError: false,
          message: "Required"
        }
      })
      document.title = "Dialog edit user"
      // load local first then remote
      const user: User | undefined = sAppSelector.find(user => user.key === sParams.key)
      if (user) setForm(user)
      axios.get("/keys/" + sParams.key)
              .then(response => setForm(response.data))
              .catch(error => toast.error(error.response.data.errorMsg))
    } else {
      document.title = "Dialog add user"
    }
  }, [])

  const isValidKeyForm = (form: string): boolean => {
    const regex: RegExp = /^(\d|\w)+$/
    return regex.test(form)
  }

  const isValidName = (form: string) => {
    const regex: RegExp = /./
    return regex.test(form)
  }

  const handleClickAddOrUpdate = (): void => {
    if (isValidKeyForm(sForm.key)) {
      if (isValidName(sForm.firstName) && isValidName(sForm.lastName)) {
        if (sParams.mode === "add") sDispatch(sAddUser(sForm))
        else sDispatch(sEditUser({key: sParams.key, form: sForm}))
        handleCloseDialog()
      }
    }
  }

  const handleKeyForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setErrorForm(prevState => {
      return {
        ...prevState, key: {
          isError: !isValidKeyForm(formValue),
          message: "Wrong format"
        }
      }
    })
    setForm(prevState => {
      return {...prevState, key: formValue}
    })
  }

  const handleFirstNameForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setErrorForm(prevState => {
      return {
        ...prevState, firstName: {
          isError: !isValidName(formValue),
          message: "Required"
        }
      }
    })
    setForm(prevState => {
      return {...prevState, firstName: formValue}
    })
  }

  const handleLastNameForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setErrorForm(prevState => {
      return {
        ...prevState, lastName: {
          isError: !isValidName(formValue),
          message: "Required"
        }
      }
    })
    setForm(prevState => {
      return {...prevState, lastName: formValue}
    })
  }

  const GButton = () => {
    if (sParams.mode === "add") {
      return (<>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button onClick={handleClickAddOrUpdate}>Add Now</Button>
      </>)
    } else {
      return (<>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button onClick={handleClickAddOrUpdate}>Update Now</Button>
      </>)
    }
  }

  return (
          <>
            <Dialog open={sOpen} maxWidth="md">
              <DialogTitle>{sParams.mode?.toUpperCase()}</DialogTitle>
              <DialogContent>
                <Grid container spacing={2} sx={{marginTop: 1}}>
                  <Grid item xs={12}>
                    <TextField error={sErrorForm?.key.isError}
                               helperText={sErrorForm?.key.isError && sErrorForm?.key.message}
                               InputProps={{readOnly: sParams.mode === "edit"}}
                               value={sForm.key}
                               onChange={handleKeyForm}
                               fullWidth label="Key"
                               variant="outlined"/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField error={sErrorForm?.firstName.isError}
                               helperText={sErrorForm?.firstName.isError && sErrorForm?.firstName.message}
                               value={sForm.firstName}
                               onChange={handleFirstNameForm}
                               fullWidth label="First Name"
                               variant="outlined"/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField error={sErrorForm?.lastName.isError}
                               helperText={sErrorForm?.lastName.isError && sErrorForm?.lastName.message}
                               value={sForm.lastName}
                               onChange={handleLastNameForm}
                               fullWidth label="Last Name"
                               variant="outlined"/>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <GButton/>
              </DialogActions>
            </Dialog>
          </>
  )
}