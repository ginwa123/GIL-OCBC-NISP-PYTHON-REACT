import {useDispatch} from "react-redux"
import {useAppSelector} from "../g-store/hooks"
import {useEffect, useState} from "react"
import {NavigateFunction, useNavigate} from "react-router-dom"
import {sFetchUserInDebug} from "../g-store/user/action-async"
import {DataGrid, GridCallbackDetails, GridColDef, GridSelectionModel} from "@mui/x-data-grid"
import {IconButton, Toolbar, Tooltip, Typography} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import {green, red} from "@mui/material/colors"
import {User} from "../g-store/user/reducer"
import {Dispatch} from "@reduxjs/toolkit"

export const GTable = () => {
  const sDispatch: Dispatch<any> = useDispatch()
  const sAppSelector: User[] = useAppSelector(state => state.usersReducer).data
  const sNavigate: NavigateFunction = useNavigate()
  const [sCheckboxSelected, setCheckboxSelected] = useState<GridSelectionModel>([])


  useEffect(() => {
    // first time fetch users
    sDispatch(sFetchUserInDebug())

    // always fetch users every 10 sec
    const timerId = setInterval(args => {
      sDispatch(sFetchUserInDebug())
    }, 10000)
    return () => {
      clearInterval(timerId)
    }
  }, [])


  const columns: GridColDef[] = [
    {
      field: "key", headerName: "Key", width: 180,
    },
    {field: "firstName", headerName: "First name", width: 260,},
    {field: "lastName", headerName: "Last name", width: 260,},
    {
      field: "action", headerName: "Tools", width: 90, renderCell: (item) => (
              <>
                <IconButton onClick={() => sNavigate("/home/dialog/edit/" + item.row.key)}>
                  <EditIcon sx={{color: green[500]}}/>
                </IconButton>
                <IconButton onClick={() => sNavigate("/home/dialog/delete/" + item.row.key)}>
                  <DeleteIcon sx={{color: red[500]}}/>
                </IconButton>
              </>
      )
    }
  ]

  const handeCheckboxSelection = (selectionModel: GridSelectionModel, details: GridCallbackDetails) => {
    console.log(selectionModel)
    console.log(details)
    setCheckboxSelected(selectionModel)
  }

  const handleDeleteToolbar = () => {
    sNavigate("/home/dialog/delete/batch/" + sCheckboxSelected)
  }

  return (
          <>
            <div style={{height: 500, width: "100%"}}>
              <Toolbar
                      sx={{
                        pl: {sm: 2},
                        pr: {xs: 1, sm: 1},
                        // ...(numSelected > 0 && {
                        //   bgcolor: (theme) =>
                        //           alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                        // }),
                        bgcolor: (theme) => {
                          return theme.palette.secondary.main
                        },
                      }}
              >
                <Typography
                        sx={{flex: "1 1 100%"}}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                >
                  Users
                </Typography>
                {sCheckboxSelected.length > 0 ? (
                        <Tooltip title="Delete">
                          <IconButton onClick={handleDeleteToolbar}>
                            <DeleteIcon sx={{color: red[500]}}/>
                          </IconButton>
                        </Tooltip>
                ) : <></>}
              </Toolbar>
              <DataGrid
                      rows={sAppSelector}
                      columns={columns}
                      pageSize={11}
                      getRowId={(row) => row.key}
                      density="compact"
                      checkboxSelection
                      disableSelectionOnClick
                      onSelectionModelChange={handeCheckboxSelection}
              />
            </div>
          </>
  )
}