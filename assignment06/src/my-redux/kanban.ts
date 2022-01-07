import {createSlice, current} from "@reduxjs/toolkit"


export const rKanbanStatus = [
  "BACKLOG",
  "IN PROGRESS",
  "EVALUATION",
  "DONE"
]

export interface Kanban {
  title: string,
  content: string,
  status: string,
  index: number
}

const initialState: Kanban[] = [
  {
    title: "Create template",
    content: "Create Template with react",
    status: "BACKLOG",
    index: 0
  },
  {
    title: "Create mockup",
    content: "Create mockup with figma",
    status: "BACKLOG",
    index: 1
  },
  {
    title: "Adjust the web header",
    content: "Adjust width header with csss",
    status: "BACKLOG",
    index: 2
  },
  {
    title: "Initiate Docker",
    content: "Initiate project docker in windows",
    status: "IN PROGRESS",
    index: 3
  },
  {
    title: "Finalize the T.O.R",
    content: "Finalize project",
    status: "EVALUATION",
    index: 4
  },
  {
    title: "Recruit Ruby developer",
    content: "got ruby developer from surabaya",
    status: "DONE",
    index: 5
  }
  ,
  {
    title: "Recruit FE developer",
    content: "got FE developer from malang",
    status: "DONE",
    index: 6
  }
  ,
  {
    title: "Recruit Project Manager",
    content: "got Project Manager from surabaya",
    status: "DONE",
    index: 7
  }

]

export const kanbanSlice = createSlice({
  name: "kanbans",
  initialState,
  reducers: {
    addKanbanItem: (state, action) => {
      const copyState = [...current(state) as Kanban[]]
      const latestKaban = copyState.at(-1)
      const newIndex = latestKaban ? latestKaban.index + 1 : 0
      return [...state, {...action.payload, index: newIndex}]
    },

    changeKanbanStatus: (state, action) => {
      const copyState = [...current(state) as Kanban[]]
      const kanbanIndex = copyState.findIndex(value => value.index === action.payload.index)
      if (kanbanIndex > -1) copyState.splice(kanbanIndex, 1)
      const latestKanban = copyState.at(-1)
      const newIndex = latestKanban ? latestKanban.index + 1 : 0
      return [...copyState, {...action.payload, index: newIndex}]
    }
  },
})


export const rActionKanban = kanbanSlice.actions




