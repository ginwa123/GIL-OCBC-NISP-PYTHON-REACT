import {Card, CardContent, Grid, List, ListItem, ListItemButton, Typography} from "@mui/material"
import React from "react"
import {Kanban, rActionKanban} from "../../g-store/kanban"
import {GKanbanItem} from "./GKanbanItem"
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import {useAppDispatch} from "../../g-store/hooks"

interface Props {
  pName: string,
  pList: Kanban[]
}

export const GKabanSubContainer = (props: Props) => {
  const sDispatch = useAppDispatch()

  const onDragEnd = (result: any) => {
    console.log(result)
    if (!result.destination || result.source.index === result.destination.index) {
      return
    }
    sDispatch(rActionKanban.reOrderingKanbanItem({
      startIndex: result.source.index,
      endIndex: result.destination.index,
      status: props.pList[0].status
    }))

  }
  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    // change background colour if dragging
    // background: isDragging ? "lightgreen" : "transparent",
    // styles we need to apply on draggables
    ...draggableStyle
  })
  return (
          <>
            <Droppable droppableId={props.pName.toUpperCase()}>
              {((provided, snapshot) =>
                      <Grid item {...provided.droppableProps}
                            ref={provided.innerRef}>
                        <Typography variant="h4" color="text.primary" gutterBottom>
                          {props.pName}
                        </Typography>
                        <List
                                sx={{
                                  backgroundColor: "#eeeeee",
                                  padding: "0.01em",
                                  borderRadius: 4
                                }}
                        >
                          {props.pList.map((kanban, index: number) =>
                                  <Draggable key={kanban.index} draggableId={kanban.index.toString()}
                                             index={index}>
                                    {(provided, snapshot) =>
                                            <ListItem
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                    )}
                                                    key={kanban.index}>
                                              <ListItemButton>
                                                <GKanbanItem pKanban={kanban}/>
                                              </ListItemButton>

                                            </ListItem>

                                    }
                                  </Draggable>
                          )
                          }
                          {props.pList.length < 1 && <List
                                  sx={{
                                    backgroundColor: "#eeeeee",
                                    padding: "0.01em",
                                    borderRadius: 4
                                  }}
                          >
                            <ListItem>
                              <ListItemButton>
                                <Card sx={{borderRadius: 4}} variant="outlined">
                                  <CardContent>
                                    <Typography variant="h6">
                                      Empty
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </ListItemButton>
                            </ListItem>
                          </List>}
                        </List>
                        {provided.placeholder}
                      </Grid>)
              }
            </Droppable>
          </>
  )
}