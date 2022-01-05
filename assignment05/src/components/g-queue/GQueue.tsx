import {Card, CardContent, Stack, Typography} from "@mui/material"
import React from "react"
import {People} from "../../models/People"
import {GQueueItem} from "./GQueueItem"

interface Props {
  pItems: People[]
}

export const GQueue = (props: Props) => {
  const showEmptyList = () => {
    if (props.pItems.length < 1) {
      return (
              <Card variant="outlined">
                <CardContent>
                  <Typography sx={{fontSize: 14}} color="text.primary">
                    "Antrian Kosong"
                  </Typography>
                </CardContent>
              </Card>
      )
    }
  }
  return (
          <>
            <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    marginTop={5}
            >
              {props.pItems.map((people: People, index: number) => <GQueueItem key={index} people={people}
                                                                              index={index}/>)}
              {showEmptyList()}
            </Stack>
          </>
  )
}