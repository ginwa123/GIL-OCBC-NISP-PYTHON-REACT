import {GHeader} from "./components/GHeader"
import {GContent} from "./components/GContent"
import {Box, Container} from "@mui/material"


function App() {
  return (
    <div>
      <GHeader pTitle={"Assignment 1 React"}/>
      <Container maxWidth="sm">
        <Box
          sx={{marginTop: 10}}>
          <GContent/>
        </Box>
      </Container>
    </div>
  )
}

export default App
