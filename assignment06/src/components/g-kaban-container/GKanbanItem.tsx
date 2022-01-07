import {Card, CardActions, CardContent, Divider, Grid, IconButton, Typography} from "@mui/material"
import React from "react"
import {Kanban, rActionKanban} from "../../g-store/kanban"
import {useAppDispatch} from "../../g-store/hooks"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import {useNavigate} from "react-router-dom"

interface Props {
  pKanban: Kanban,
}

export const GKanbanItem = (props: Props) => {
  const sDispatch = useAppDispatch()
  const sKanban = props.pKanban
  const sNavigate = useNavigate()

  const handleClickForward = () => {
    if (sKanban.status === "BACKLOG") {
      sDispatch(rActionKanban.changeKanbanStatus({...sKanban, status: "IN PROGRESS"}))
    } else if (sKanban.status === "IN PROGRESS") {
      sDispatch(rActionKanban.changeKanbanStatus({...sKanban, status: "EVALUATION"}))
    } else if (sKanban.status === "EVALUATION") {
      sDispatch(rActionKanban.changeKanbanStatus({...sKanban, status: "DONE"}))
    }
  }

  const handleClickBackward = () => {
    if (sKanban.status === "IN PROGRESS") {
      sDispatch(rActionKanban.changeKanbanStatus({...sKanban, status: "BACKLOG"}))
    } else if (sKanban.status === "EVALUATION") {
      sDispatch(rActionKanban.changeKanbanStatus({...sKanban, status: "IN PROGRESS"}))
    } else if (sKanban.status === "DONE") {
      sDispatch(rActionKanban.changeKanbanStatus({...sKanban, status: "EVALUATION"}))
    }
  }


  const button = () => {
    const backlog = () => {
      if (sKanban.status === "BACKLOG") {
        return (
                <>
                  <Grid item>

                  </Grid>
                  <Grid item>
                    <IconButton onClick={handleClickForward}>
                      <ArrowForwardIosIcon/>
                    </IconButton>
                  </Grid>

                </>
        )
      }
    }

    const inProgressOrEvaluation = () => {
      if (sKanban.status === "IN PROGRESS" || sKanban.status === "EVALUATION") {
        return (
                <>
                  <Grid item>
                    <IconButton onClick={handleClickBackward}>
                      <ArrowBackIosIcon/>
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton onClick={handleClickForward}>
                      <ArrowForwardIosIcon className="large material-icons"/>
                    </IconButton>
                  </Grid>
                </>
        )
      }
    }

    const done = () => {
      if (sKanban.status === "DONE") {
        return (
                <>
                  <Grid item>
                    <IconButton onClick={handleClickBackward}>
                      <ArrowBackIosIcon/>
                    </IconButton>
                  </Grid>
                  <Grid item>

                  </Grid>
                </>
        )
      }
    }

    return (<>
              {backlog()}
              {inProgressOrEvaluation()}
              {done()}
            </>

    )
  }

  return (
          <>
            <Card variant="outlined"
                  sx={{width: 200, borderRadius: 4, backgroundColor: sKanban.hexColor}}>
              <CardContent onClick={() => sNavigate("/home/dialog/edit/" + sKanban.index)}>
                <Typography variant="h6" align="left">
                  {sKanban.title}
                </Typography>
                <Divider sx={{
                  marginBottom: 2
                }}/>
                <Typography variant="body2" align="left">
                  {sKanban.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center">
                  {button()}
                </Grid>
              </CardActions>
            </Card>
          </>
  )
}