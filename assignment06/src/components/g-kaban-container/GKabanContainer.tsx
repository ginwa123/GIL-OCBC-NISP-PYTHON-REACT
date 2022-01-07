import {Grid} from "@mui/material"
import React from "react"
import {useAppDispatch, useAppSelector} from "../../g-store/hooks"
import {GKabanSubContainer} from "./GKabanSubContainer"
import {Kanban, rActionKanban} from "../../g-store/kanban"
import {DragDropContext} from "react-beautiful-dnd"


export const GKabanContainer = () => {
  const sSelectTaskSelector = useAppSelector(state => state.taskReducer)
  const sDispatch = useAppDispatch()
  const selectTask = (type: string): Kanban[] => {
    let selected = [...sSelectTaskSelector]
    selected = selected.filter((value) => value.status === type)
    // selected.sort((a, b) => a.index - b.index)
    return selected
  }

  const onDragEnd = (result: any) => {
    console.log(result)
    if (!result.destination ) {
      return
    }
    sDispatch(rActionKanban.reOrderingKanbanItem({
      source: result.source,
      destination: result.destination
    }))

  }

  return (
          <>
            <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={3}
                    marginTop={10}
                    marginBottom={4}
            >
              <DragDropContext onDragEnd={onDragEnd}>
                <GKabanSubContainer pName={"Backlog"} pList={selectTask("BACKLOG")}/>
                <GKabanSubContainer pName={"In Progress"} pList={selectTask("IN PROGRESS")}/>
                <GKabanSubContainer pName={"Evaluation"} pList={selectTask("EVALUATION")}/>
                <GKabanSubContainer pName={"Done"} pList={selectTask("DONE")}/>
              </DragDropContext>
            </Grid>
          </>
  )
}