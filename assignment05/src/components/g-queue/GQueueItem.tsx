import {Card, CardContent, Typography} from "@mui/material"
import {People} from "../../models/People"
import {blue, brown, green, lime, purple, red, yellow} from "@mui/material/colors"

interface Props {
  people: People,
  index: number
}

export const GQueueItem = (props: Props) => {
  const showArrow = (index: number) => {
    if (index > 0) {
      return (<i className="fas fa-angle-right" style={{
        fontSize: "48px",
        color: "black"
      }}></i>)
    }
  }

  const setColor = (index: number) => {
    switch (index) {
      case 1:
        return red[600]
      case 2:
        return red[400]
      case 3:
        return blue[600]
      case 4:
        return blue[400]
      case 5:
        return green[600]
      case 6:
        return green[400]
      case 7:
        return purple[600]
      case 8:
        return lime[600]
      case 9:
        return yellow[600]
      case 10:
        return brown[600]
      default:
        return brown[300]
    }

  }

  const card = (people: People, index: number) => (
          <>
            {showArrow(index)}
            <Card variant="outlined" sx={{
              backgroundColor: setColor(index)
            }}>
              <CardContent>
                <Typography variant="h6" color="text.primary">
                  {people.name}
                </Typography>
              </CardContent>
            </Card>
          </>
  )
  return (
          <>
            {card(props.people, props.index)}
          </>
  )
}