import {Grid} from "@mui/material"
import React from "react"
import {useAppSelector} from "../../g-store/hooks"
import {GKabanSubContainer} from "./GKabanSubContainer"
import {Kanban} from "../../g-store/kanban"


export const GKabanContainer = () => {
  const sSelectTaskSelector = useAppSelector(state => state.taskReducer)

  const selectTask = (type: string): Kanban[] => {
    let selected = [...sSelectTaskSelector]
    selected = selected.filter((value) => value.status === type)
    // selected.sort((a, b) => a.index - b.index)
    return selected
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
              <GKabanSubContainer pName={"Backlog"} pList={selectTask("BACKLOG")}/>
              <GKabanSubContainer pName={"In Progress"} pList={selectTask("IN PROGRESS")}/>
              <GKabanSubContainer pName={"Evaluation"} pList={selectTask("EVALUATION")}/>
              <GKabanSubContainer pName={"Done"} pList={selectTask("DONE")}/>
            </Grid>
          </>
  )
}