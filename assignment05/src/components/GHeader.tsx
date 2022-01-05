import {Grid, Typography} from "@mui/material"

interface Props {
  pName: string
}

export const GHeader = (props: Props) => {
  return (
          <>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
              <Typography variant="h1" component="h2">
                {props.pName}
              </Typography>;
            </Grid>

          </>
  )
}