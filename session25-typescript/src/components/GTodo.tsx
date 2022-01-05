import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import Todo from "../models/Todo"
import {Box, Card, CardContent, Typography} from "@mui/material"


export const GTodo = () => {
  const params = useParams()
  const [sTodo, setTodo] = useState<Todo>()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + params.id)
            .then((response) => response.json())
            .then((data) => setTodo(data))
  }, [])
  return (
          <>
            <Box key={sTodo?.id}>
              <Card sx={{borderRadius: 8, padding: 3}} variant="outlined">
                <CardContent>
                  <Typography variant="h4" color="text.primary" gutterBottom>
                    {sTodo?.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </>
  )
}