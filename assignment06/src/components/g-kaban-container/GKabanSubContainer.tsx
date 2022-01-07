import {Card, CardContent, Grid, Stack, Typography} from "@mui/material"
import React from "react"
import {Kanban} from "../../my-redux/kanban"
import {GKanbanItem} from "./GKanbanItem"

interface Props {
  pName: string,
  pList: Kanban[]
}

export const GKabanSubContainer = (props: Props) => {

  return (
          <>
            <Grid item>
              <Typography variant="h4" color="text.primary" gutterBottom>
                {props.pName}
              </Typography>

              <Stack
                      direction="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={2}
                      sx={{
                        backgroundColor: '#eeeeee',
                        padding: 2,
                        borderRadius: 4
                      }}
              >
                {props.pList.map((kanban, index: number) =>
                        <GKanbanItem key={kanban.index} kanban={kanban} index={index}/>)
                }
                {props.pList.length < 1 && <Card variant="outlined" sx={{width: 200}}>
                  <CardContent>
                    <Typography variant="h6">
                      Empty
                    </Typography>
                  </CardContent>
                </Card>}
              </Stack>
            </Grid>
          </>

  )
}