import {useDispatch} from "react-redux"
import {useAppSelector} from "../g-store/hooks"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {sFetchUserInDebug} from "../g-store/user/action-async"
import {DataGrid, GridColDef, GridSelectionModel} from "@mui/x-data-grid"
import {IconButton} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

export const GTable = () => {
  const sDispatch = useDispatch()
  const sAppSelector = useAppSelector(state => state.usersReducer)
  const sNavigate = useNavigate()

  useEffect(() => {
    sDispatch(sFetchUserInDebug())
  }, [])

  const columns: GridColDef[] = [
    {field: "key", headerName: "Key", width: 100},
    {field: "firstName", headerName: "First name", width: 200, editable: true},
    {field: "lastName", headerName: "Last name", width: 200,},
    {
      field: "action", headerName: "Tools", width: 250, renderCell: (item) => (
              <>
                <IconButton onClick={() => sNavigate("/home/dialog/edit/" + item.row.key)}>
                  <EditIcon/>
                </IconButton>

                <IconButton onClick={() => sNavigate("/home/dialog/delete/" + item.row.key)}>
                  <DeleteIcon/>
                </IconButton>
              </>
      )
    }
  ]

  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([])


  return (
          <>
            <div style={{height: 600, width: "100%"}}>
              <DataGrid
                      rows={sAppSelector}
                      columns={columns}
                      pageSize={9}
                      getRowId={(row) => row.key}
              />
            </div>
          </>
  )
}