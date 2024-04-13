import "./App.css";
import MyExcalidraw from "../src/components/MyExcalidraw/MyExcalidraw";
import * as React from "react";
import { styled, useTheme, ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from './themes/themes'; 
import './css/listStyles.css';

import { Box, Drawer, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from "@mui/material";

import MuiAppBar from "@mui/material/AppBar";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const theme = useTheme();
  const [pageTheme, setTheme] = React.useState(darkTheme);

  const toggleTheme = () => {
    if (pageTheme.palette.mode === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  const [open, setOpen] = React.useState(true);
  const [board, setBoard] = React.useState("Board 1");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleBoardChange = (newBoardName) => {
    setBoard(newBoardName);
  };

  return (
    <ThemeProvider theme={pageTheme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            {board}
          </Typography>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleTheme}
            edge="start"
          >
            {pageTheme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>          
        </DrawerHeader>

        <Divider />

        <List>
          {["Board 1", "Board 2", "Board 3"].map((text, index) => (
            <ListItem
            key={text}
            disablePadding
            onClick={() => handleBoardChange(text)}
            className="listItem"
          >
            <ListItemButton
              className="pillListItemButton"
            >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>

                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main open={open} sx={{ p: 0 }}>
        <DrawerHeader />
        <MyExcalidraw board={board} />
      </Main>
    </Box>
    </ThemeProvider>
  );
}

export default App;
