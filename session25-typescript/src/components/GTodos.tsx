import {useEffect, useState} from "react"
import Todo from "../models/Todo"
import {Box, Card, CardContent, Stack, Typography} from "@mui/material"

interface Props {
  pItemClickListener: (id: string) => void
}

export const GTodos = (props: Props) => {
  const [sTodos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => setTodos(data.splice(0, 20)))
    return () => {
    }
  }, [])

  const handlerItemClick = (id: string) => props.pItemClickListener(id)

  return (
          <>
            <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={1}
            >
              {sTodos.map(todo => <Box key={todo.id}>
                <Card onClick={() => handlerItemClick(todo.id)} sx={{borderRadius: 8, padding: 3}} variant="outlined">
                  <CardContent>
                    <Typography variant="h4" color="text.primary" gutterBottom>
                      {todo.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>)}
            </Stack>
          </>
  )
}