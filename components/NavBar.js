import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Hidden } from "@mui/material";

const NavBar = () => {
  const linkStyle = { color: "inherit", textDecoration: "none" };
  const [menu, setMenu] = useState(null);

  const handleMenuClick = (e) => {
    setMenu(e.currentTarget);
  };

  const handleMenuClose = () => {
    setMenu(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#1f2024" }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            How To Abroad
          </Typography>
          <Hidden smDown>
            <Box sx={{ mr: 2 }}>
              <Button color="inherit">
                <Link href="/" style={linkStyle}>
                  Home
                </Link>
              </Button>
            </Box>
            <Box sx={{ mr: 2 }}>
              <Button color="inherit">
                <Link href="/search-course" style={linkStyle}>
                  Search Course
                </Link>
              </Button>
            </Box>
            <Box sx={{ mr: 2 }}>
              <Button color="inherit">
                <Link href="/portal" style={linkStyle}>
                  Portal
                </Link>
              </Button>
            </Box>
          </Hidden>
          <Hidden smDown>
            <Link href="/login" style={linkStyle}>
              <IconButton
                color="inherit"
                edge="end"
                aria-label="account of current user"
                onClick={() => console.log("Login clicked")}
              >
                <AccountCircleIcon />
              </IconButton>
            </Link>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              edge="end"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menu}
              open={Boolean(menu)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href="/" style={linkStyle}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/search-course" style={linkStyle}>
                  Search Course
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/portal" style={linkStyle}>
                  Portal
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                }}
              >
                <Link href="/login" style={linkStyle}>
                  Login
                </Link>
              </MenuItem>
            </Menu>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
