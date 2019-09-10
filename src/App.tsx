import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "./App.scss";
import Product from "./Product";
import TheAppBar from "./AppBar";
import Snackbar from "@material-ui/core/Snackbar";
import TheDrawer from "./Drawer";
import discountDeck from "./Discount";
import GridList from "@material-ui/core/GridList";

import { DAL} from "./colors";
import { items, ShopItem } from "./stock";
import addItemToExisting, { outOfStock } from "./addItemToExisting";



const drawerWidth = 320;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "none",
      display: "flex"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      justifyContent: "flex-start"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    },
    snackbar: {
      background: DAL,
      fontSize: 40
    },
    items: {
      paddingTop: 64,
      display: "flex"
    },

    gridList: {
      paddingTop: 64,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      overflowY: "hidden"
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  })
);




let toSelectedItems: ShopItem[] = [];

if (localStorage.getItem("@selectedItems")) {
  toSelectedItems = JSON.parse(localStorage.getItem("@selectedItems")!);
}

export const updateFunction = (SelectedItems: ShopItem[]) => {
  localStorage.setItem("@selectedItems", JSON.stringify(SelectedItems));
};


const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<ShopItem[]>(toSelectedItems);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true);

// const[isLoading, setLoading] = useState<boolean>(true)


    // fetch('alpha/items').then(res => console.log(res));
    




  if (JSON.parse(localStorage.getItem("@selectedItems")!) === null) {
    localStorage.removeItem("@selectedItems");
  } else if (JSON.parse(localStorage.getItem("@selectedItems")!).length === 0) {
    localStorage.removeItem("@selectedItems");
  }

  // const x: ShopItem[] = JSON.parse(localStorage.getItem("@selectedItems")!);

  selectedItemsToExport = selectedItems;
  checkDarkMod = darkMode;

  function handleClick() {
    setOpenSnack(outOfStock);
  }
  function handleClose(
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) {
    setOpenSnack(false);
  }
  selectedItemsToExport = selectedItems;

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <TheAppBar
        isOpen={open}
        setOpen={setOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="grid">
        <GridList className={classes.gridList}>
          {items.map(item => (
            <Product
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              image2={item.image2}
              brand={item.brand}
              available={item.available}
              sale={item.sale}
              onSelect={() => {
                setSelectedItems(addItemToExisting(item, selectedItems));
                discountDeck(item, selectedItems );
                setSelectedItems([...selectedItems]);
                handleClick();
                updateFunction(selectedItems);
              }}
            />
          ))}
        </GridList>
      </div>

      <TheDrawer isOpen={open} setOpen={setOpen} />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={openSnack}
        autoHideDuration={2000}
        onClose={handleClose}
        ContentProps={{
          classes: {
            root: classes.snackbar
          }
        }}
        message={<span>Out of stock.</span>}
      />
    </div>
  );
};

export default App;
export let selectedItemsToExport: ShopItem[];
export let checkDarkMod: boolean;
