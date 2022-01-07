import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField} from "@mui/material"
import {Kanban, rActionKanban, rKanbanStatus} from "../my-redux/kanban"
import {useAppDispatch} from "../my-redux/hooks"
import React, {BaseSyntheticEvent, useEffect, useState} from "react"
import {createAsyncThunk} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"
import {toast} from "react-toastify"


interface Props {
  pName: string,
  pToggleDialog: boolean,
  pSetDialogListener: (dialogIsOpen: boolean) => void,
}

export const GDialogForm = (props: Props) => {
  const sDefaultFormState = {title: "", content: "", status: "BACKLOG", index: 0}
  const [sFormState, setFormState] = useState<Kanban>(sDefaultFormState)
  const sToggleDialog = () => props.pSetDialogListener(!props.pToggleDialog)
  const sDispatch = useAppDispatch()
  const nDispatch = useDispatch()

  useEffect(() => {
    // clear sFormState
    setFormState(sDefaultFormState)
  }, [props.pToggleDialog])


  const isValidForm = (sFormState: Kanban) => {
    const {title, content, index, status} = sFormState
    if (title.trim().length < 1) return false
    if (content.trim().length < 1) return false
    if (status.trim().length < 1) return false
    return true
  }

  const addKanban = () => {
    if (isValidForm(sFormState)) {
      // nDispatch global dispatch
      nDispatch(()=> {
        toast.info('Kanban already created, please wait 2 second');
        setTimeout(() => {
          sDispatch(rActionKanban.addKanbanItem({...sFormState}))
        },2000)
      })

      sToggleDialog()
    }
  }
  const handleTitleForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setFormState(prevState => {
      return {...prevState, title: formValue}
    })
  }

  const handleContentForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setFormState(prevState => {
      return {...prevState, content: formValue}
    })
  }

  const handleStatusForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setFormState(prevState => {
      return {...prevState, status: formValue}
    })
  }

  const form = () => (
          <Box sx={{display: "flex", flexWrap: "wrap"}} component="form">
            <TextField
                    required
                    fullWidth sx={{m: 1}}
                    id="outlined-adornment-amount"
                    label="Title"
                    onChange={handleTitleForm}
                    error={sFormState.title.trim().length < 1}
            />
            <TextField
                    required
                    fullWidth sx={{m: 1}}
                    label="Content"
                    multiline
                    maxRows={4}
                    onChange={handleContentForm}
                    error={sFormState.content.trim().length < 1}

            />
            <TextField
                    required
                    fullWidth sx={{m: 1}}
                    select
                    label="Select"
                    helperText="Select status Kanban"
                    onChange={handleStatusForm}
                    value={sFormState.status}
                    error={sFormState.status.trim().length < 1}
            >
              {rKanbanStatus.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
              ))}
            </TextField>
          </Box>
  )

  const formAction = () => (
          <DialogActions>
            <Button onClick={sToggleDialog}>Cancel</Button>
            <Button onClick={addKanban}>Add Now</Button>
          </DialogActions>
  )

  return (
          <>
            <Dialog open={props.pToggleDialog} onClose={sToggleDialog}>
              <DialogTitle>{props.pName}</DialogTitle>
              <DialogContent>
                {form()}
              </DialogContent>
              {formAction()}
            </Dialog>
          </>
  )
}