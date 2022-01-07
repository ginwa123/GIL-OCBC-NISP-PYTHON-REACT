import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit"
import {toast} from "react-toastify"


export const rKanbanStatus = [
  "BACKLOG",
  "IN PROGRESS",
  "EVALUATION",
  "DONE"
]

export interface rKanbanColorType {
  name: string
  hex: string
}

export const rKanbanColor: rKanbanColorType[] = [
  {
    name: "WHITE",
    hex: "#FFFFFF"
  },
  {
    name: "RED",
    hex: "#ffcdd2"
  },
  {
    name: "BLUE",
    hex: "#bbdefb"
  },
  {
    name: "GREEN",
    hex: "#c8e6c9"
  }
]

export interface Kanban {
  index: number,
  title: string,
  content: string,
  status: string,
  hexColor: string
}

const initialState: Kanban[] = [
  {
    index: 0,
    title: "Create template",
    content: "Create Template with react",
    status: "BACKLOG",
    hexColor: "#c8e6c9"
  },
  {
    index: 1,
    title: "Create mockup",
    content: "Create mockup with figma",
    status: "BACKLOG",
    hexColor: "#FFFFFF"
  },
  {
    index: 2,
    title: "Adjust the web header",
    content: "Adjust width header with csss",
    status: "BACKLOG",
    hexColor: "#c8e6c9"
  },
  {
    index: 3,
    title: "Initiate Docker",
    content: "Initiate project docker in windows",
    status: "IN PROGRESS",
    hexColor: "#bbdefb"
  },
  {
    index: 4,
    title: "Finalize the T.O.R",
    content: "Finalize project",
    status: "EVALUATION",
    hexColor: "#FFFFFF"
  },
  {
    index: 5,
    title: "Recruit Ruby developer",
    content: "got ruby developer from surabaya",
    status: "DONE",
    hexColor: "#ffcdd2"
  }
  ,
  {
    index: 6,
    title: "Recruit FE developer",
    content: "got FE developer from malang",
    status: "DONE",
    hexColor: "#FFFFFF"
  }
  ,
  {
    index: 7,
    title: "Recruit Project Manager",
    content: "got Project Manager from surabaya",
    status: "DONE",
    hexColor: "#FFFFFF"
  }

]

export const kanbanSlice = createSlice({
  name: "kanbans",
  initialState,
  reducers: {
    addKanbanItem: (state, action) => {
      // find hexcolor
      const hexColor = rKanbanColor.find(value => value.name === action.payload.hexColor)

      const copyState = [...current(state) as Kanban[]]

      // get latest index kanbans
      let latestIndex = 0
      copyState.forEach((value, index) => {
        if (value.index > latestIndex) latestIndex = value.index
      })

      // new kanban
      const kaban = {
        ...action.payload, index: latestIndex + 1,
        hexColor: hexColor?.hex
      }
      return [...state, kaban]
    },

    changeKanbanStatus: (state, action) => {
      const copyState = [...current(state) as Kanban[]]


      // delete old kaban
      const kanbanIndex = copyState.findIndex(value =>
              value.index === action.payload.index)
      copyState.splice(kanbanIndex, 1)

      let latestIndex = 0
      copyState.forEach((value, index) => {
        if (value.index > latestIndex) latestIndex = value.index
      })


      const kaban = {...action.payload, index: latestIndex + 1}

      // combine old kabans and new kaban with modified status
      return [...copyState, kaban]
    },

    editKanbanItem: (state, action) => {
      const copyState = [...current(state) as Kanban[]]

      // find hexcolor
      const hexColor = rKanbanColor.find(value => value.name === action.payload.hexColor)

      // copy kanban with modified payload
      let kanban = {...copyState.find(value => value.index === action.payload.index) as Kanban}
      let kanbanIndex = kanban.index
      kanban = {...action.payload, index: kanbanIndex, hexColor: hexColor?.hex}

      // replace real kanban with modified payload
      copyState.splice(copyState.findIndex(value =>
              value.index === action.payload.index), 1, kanban)

      return [...copyState]
    },

    deleteKanbanItem: ((state, action) => {
      let copyState = [...current(state) as Kanban[]]
      copyState = copyState.filter(value => value.index.toString() !== action.payload.index)
      return copyState
    }),

    reOrderingKanbanItem: ((state, action) => {
      const {type, payload} = action
      const {source, destination} = payload
      const {droppableId: statusSource, index: indexSource} = source
      const {droppableId: statusDestination, index: indexDestination} = destination
      console.log(indexSource, indexDestination)
      if (statusSource === statusDestination) {
        // vertical reorder
        // a: all kaban excep droppableIdSource
        let copyState1 = [...current(state) as Kanban[]]
        copyState1 = copyState1.filter(value => value.status === statusSource)
        // replace destination with source
        const [removed] = copyState1.splice(indexSource, 1)
        copyState1.splice(indexDestination, 0, removed)

        // b: all kaban except a
        let copyState2 = [...current(state) as Kanban[]]
        copyState2 = copyState2.filter(value => value.status !== statusDestination)

        return [...copyState1, ...copyState2]
      }
      // horizontal reorder
      const copyState = [...current(state) as Kanban[]]

      // a. kanbans sources
      let kanbanSourcesState = [...copyState.filter(value =>
              value.status === statusSource)]

      // b. take kanban source
      let kanbanSource = {
        ...kanbanSourcesState.find((value, index) =>
                (value.status === statusSource && index === indexSource))
      } as Kanban
      // replace status from source to destination
      kanbanSource.status = statusDestination
      // delete b. kanban source in a. kanban sources
      kanbanSourcesState.splice(indexSource, 1)

      // c. kanbans destination
      let kanbanDestinationsState = [...copyState.filter(value =>
              value.status === statusDestination)]
      // d. insert a. new kanban source into index destination
      kanbanDestinationsState.splice(indexDestination, 0, kanbanSource)

      // e. kanbans sources except a and b
      const exceptSourceAndDestinationState = [...copyState.filter(value =>
              (value.status !== statusSource && value.status !== statusDestination))]

      //
      return [...exceptSourceAndDestinationState, ...kanbanSourcesState, ...kanbanDestinationsState]

    })
  },


})

export const addKanbanItemAsync = createAsyncThunk(
        "kanbans/addKanbanItem",
        async (sFormState: Kanban, thunkAPI) => {
          toast.info("Making kanban, please wait 4 second", {
            autoClose: 4000
          })
          setTimeout(() => {
            thunkAPI.dispatch(rActionKanban.addKanbanItem({...sFormState}))
          }, 4000)
        }
)

export const editKanbanItemAsync = createAsyncThunk(
        "kanbans/editKanbanItem",
        async (sFormState: Kanban, thunkAPI) => {
          toast.info("Editing Kanban, please wait 1 second", {
            autoClose: 1000
          })
          setTimeout(() => {
            thunkAPI.dispatch(rActionKanban.editKanbanItem({...sFormState}))
          }, 1000)
        }
)


export const rActionKanban = kanbanSlice.actions




