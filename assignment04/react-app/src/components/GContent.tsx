import {Box, Card, CardActions, CardContent, Stack, Typography} from "@mui/material"
import React, {useEffect, useState} from "react"
import moment from "moment"


interface Article {
  id: string;
  body: string;
  title: string;
  date: string;
}

export const GContent = () => {
  const [sArticles, setArticles] = useState<Article[]>()
  useEffect(() => {
    fetch("/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setArticles(data)
      })
    return () => {
    }
  }, [])

  const myArticles = () => sArticles?.map((article) => (
    <Box key={article.id}>
      <Card sx={{borderRadius: 8, padding: 3}} variant="outlined">
        <CardContent>
          <Typography variant="h4" color="text.primary" gutterBottom>
            {article.title}
          </Typography>
          <Typography fontSize="13" component="div">
            {article.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography fontSize="13" fontStyle="italic" fontWeight="600" component="span">
            {moment(article.date).format("DD-MM-YYYY")}
          </Typography>
          <Typography fontSize="13" component="span">
            or created
          </Typography>
          <Typography fontSize="13" component="span" fontWeight="600">
            {moment(article.date).fromNow()}
          </Typography>
        </CardActions>
      </Card>
    </Box>
  ))

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        {myArticles()}
      </Stack>
    </>
  )
}
