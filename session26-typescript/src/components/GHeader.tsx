import {AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material"
import {useState} from "react"
import MenuIcon from "@mui/icons-material/Menu"


interface Props {
  pTitle: string,
  pPages: string[],
  pNavMenuClickListener: (event: string) => void
}

export const GHeader = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleNavGoTo = (page: string) => {
    props.pNavMenuClickListener(page.toLowerCase())
  }


  return (
          <>
            <AppBar position="fixed">
              <Toolbar>
                {/*App bar title desktop*/}
                <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: "none", md: "flex"}}}
                >
                  {props.pTitle}
                </Typography>
                {/*App bar menu mobile*/}
                <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                  <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit"
                  >
                    <MenuIcon/>
                  </IconButton>
                  <Menu
                          id="menu-appbar"
                          anchorEl={anchorElNav}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          open={Boolean(anchorElNav)}
                          onClose={handleCloseNavMenu}
                          sx={{
                            display: {xs: "block", md: "none"},
                          }}
                  >
                    {props.pPages.map((page) => (
                            <MenuItem key={page} onClick={() => handleNavGoTo(page)}>
                              <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                    ))}
                  </Menu>
                </Box>
                {/*App bar title mobile*/}
                <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
                >
                  {props.pTitle}
                </Typography>
                {/*Appbar Menu Desktop*/}
                <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                  {props.pPages.map((page) => (
                          <Button
                                  key={page}
                                  onClick={() => handleNavGoTo(page)}
                                  sx={{my: 2, color: "white", display: "block"}}
                          >
                            {page}
                          </Button>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
          </>
  )
}
