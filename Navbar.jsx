import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit">
          <Link to={'/'}
            style={{ textDecoration: "none", color: "white" }}>
            Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={'r'}
            style={{ textDecoration: "none", color: "white" }}>
            Registration
            </Link>
            </Button>
          <Button color="inherit">
          <Link to={'t'}
            style={{ textDecoration: "none", color: "white" }}>
            Table
            </Link>
          </Button>
          <Button color="inherit">
          <Link to={'u'}
            style={{ textDecoration: "none", color: "white" }}>
            state
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
</div>
  )
}

export default Navbar
