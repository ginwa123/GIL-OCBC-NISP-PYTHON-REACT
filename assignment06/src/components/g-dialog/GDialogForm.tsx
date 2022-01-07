import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField} from "@mui/material"
import {
  addKanbanItemAsync,
  editKanbanItemAsync,
  Kanban,
  rActionKanban,
  rKanbanColor,
  rKanbanStatus
} from "../../g-store/kanban"
import {useAppDispatch, useAppSelector} from "../../g-store/hooks"
import React, {BaseSyntheticEvent, useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {useNavigate, useParams} from "react-router-dom"


export const GDialogForm = () => {
  const sDefaultFormState = {index: 0, title: "", content: "", status: "BACKLOG", hexColor: "WHITE"}
  const [sFormState, setFormState] = useState<Kanban>(sDefaultFormState)
  const sDispatch = useAppDispatch()
  const nDispatch = useDispatch()
  const sParams = useParams()
  const sNavigate = useNavigate()
  const sAppSelector = useAppSelector(state => state.taskReducer)

  useEffect(() => {
    if (sParams.mode === "edit") {
      setFormState(() => {
        const copyKanbans = [...sAppSelector]
        let kanban = {
          ...copyKanbans.find(value =>
                  value.index.toString() === sParams.index) as Kanban
        }
        const color = rKanbanColor.find(value => value.hex === kanban.hexColor)
        kanban.hexColor = color?.name ? color.name : "WHITE"
        return kanban
      })
    }
  }, [])

  const isValidForm = (sFormState: Kanban) => {
    const {title, content, index, status} = sFormState
    if (title.trim().length < 1) return false
    if (content.trim().length < 1) return false
    if (status.trim().length < 1) return false
    return true
  }


  const addOrEditKanban = (editType = "add") => {
    if (isValidForm(sFormState)) {
      if (sParams.mode === "add") {
        nDispatch(addKanbanItemAsync(sFormState))
      } else if (sParams.mode === "edit") {
        if (editType === "delete") {
          sDispatch(rActionKanban.deleteKanbanItem({index: sParams.index}))
        }
        if (editType === "edit") {
          nDispatch(editKanbanItemAsync(sFormState))
        }
      } else {

      }
      sNavigate(-1)
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

  const handleHexColorForm = (event: BaseSyntheticEvent) => {
    const formValue = event.target.value
    setFormState(prevState => {
      return {...prevState, hexColor: formValue}
    })
  }

  const form = () => (
          <Box sx={{display: "flex", flexWrap: "wrap"}} component="form">
            <TextField
                    required
                    fullWidth sx={{m: 1}}
                    id="outlined-adornment-amount"
                    label="Title"
                    value={sFormState.title}
                    onChange={handleTitleForm}
                    error={sFormState.title.trim().length < 1}
            />
            <TextField
                    required
                    fullWidth sx={{m: 1}}
                    label="Content"
                    multiline
                    maxRows={4}
                    value={sFormState.content}
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
            <TextField
                    fullWidth sx={{m: 1}}
                    select
                    label="Select"
                    helperText="Select Kanban Color"
                    onChange={handleHexColorForm}
                    value={sFormState.hexColor}
            >
              {rKanbanColor.map((kanbanColor, index) => (
                      <MenuItem key={index} value={kanbanColor.name}>
                        {kanbanColor.name}
                      </MenuItem>
              ))}
            </TextField>
            {/*<SketchExample />*/}
          </Box>
  )

  const formAction = () => (
          <DialogActions style={{justifyContent: "space-between"}}>
            <Box>
              {sParams.mode === "edit" &&
                      <Button onClick={() => addOrEditKanban("delete")} sx={{color: "red"}}>DELETE Kanban</Button>}
            </Box>
            <Box>
              <Button onClick={() => sNavigate(-1)}>Cancel</Button>
              <Button onClick={() => addOrEditKanban("edit")}>{sParams.mode?.toUpperCase()} Now</Button>
            </Box>
          </DialogActions>
  )

  return (
          <>
            <Dialog open={true}>
              <DialogTitle>{sParams.mode?.toUpperCase()}</DialogTitle>
              <DialogContent>
                {form()}
              </DialogContent>
              {formAction()}
            </Dialog>
          </>
  )
}