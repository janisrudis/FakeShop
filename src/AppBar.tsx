import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import { IoIosCart, IoIosBulb } from "react-icons/io";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import "./App.scss";
import { D1, DAL, DW  } from "./colors";
import { L4, LA, } from "./colors";


const drawerWidth = 320;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "none",
      display: "flex"
    },
    hide: {
      display: "none"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      boxShadow: "none",
      textAlign: "left",
      height: 64
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: drawerWidth,
      boxShadow: "none"
    },
    title: {
      flexGrow: 1,
      textAlign: "right"
    },
    image: {
      height: 60
    }
  })
);
const TheAppBar: React.FC<{
  isOpen: boolean;
  setOpen: (val: boolean) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}> = ({ isOpen, setOpen, darkMode, setDarkMode }) => {
  const classes = useStyles();

  function handleDrawerOpen() {
    setOpen(true);
  }

  function setDarkModeOut() {
    setDarkMode(!darkMode);
  }

  return (
    <AppBar
      style={darkMode ? { background: D1 } : { background: L4 }}
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen
      })}
    >
      <Toolbar>
        <img
          className={classes.image}
          src="https://cdn.discordapp.com/attachments/600978139081867294/610932831815729199/giphy.gif"
          alt="oi"
        />
        <Typography
          variant="h6"
          noWrap
          className={classes.title}
          color={darkMode ? "inherit" : "textPrimary"}
        >
          shop.
        </Typography>
        <IconButton onClick={setDarkModeOut}>
          <IoIosBulb color={darkMode ? DAL : D1} />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          className={clsx(isOpen && classes.hide)}
        >
          <IoIosCart color={darkMode ? DW : LA}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TheAppBar;
