import { Drawer, IconButton, Grid } from "@material-ui/core";
import {IoMdClose} from "react-icons/io";
import React, { useState } from "react";
import SelectedItem from "./SelectedItem";
import TotalPrice from "./TotalPrice";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import "./App.scss";
import { selectedItemsToExport, checkDarkMod, updateFunction } from "./App";
import { ShopItem } from "./stock";
import Divider from '@material-ui/core/Divider';
import {  D2,DW  } from "./colors";
import { L3, } from "./colors";



export const drawerWidth = 320;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaperDark: {
      width: drawerWidth,
      background: D2,
    },
    drawerPaper: {
      width: drawerWidth,
      background: L3,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: 60,
      paddingLeft: 15,
    },
    icon: {
      color: DW,
    }
  })
);

const calculateTotalSum = (items: ShopItem[]): number => {
  return items.reduce((a, b) => a + b.sum, 0);
};

function discountDeckRemove(deck: ShopItem) {
  if (deck.name === "Skate Deck") {
    if (deck.quantity % 3 === 0) {
      return (deck.sum =
        deck.quantity * deck.price - (deck.quantity / 3) * deck.price);
    } else if (deck.quantity >= 3) {
      return (deck.sum =
        deck.quantity * deck.price -
        (Math.ceil(deck.quantity / 3) - 1) * deck.price);
    } else if (deck.quantity > 0) {
      return (deck.sum = deck.quantity * deck.price);
    } else return;
  }
}

function removeItemToExisting(
  item: ShopItem,
  existingItems: ShopItem[]
 ): ShopItem[] {
  item.available++;
  item.sum = item.sum - item.price;
  item.quantity--;
  if (item.quantity === 0) {
    existingItems.splice(existingItems.indexOf(item), 1);
  }
  return existingItems;
}
const TheDrawer: React.FC<{
  isOpen: boolean;
  setOpen: (val: boolean) => void;
}> = ({ isOpen, setOpen }) => {
  // const [open, setOpen] = React.useState(false);
  let [selectedItems, setSelectedItems] = useState<ShopItem[]>([]);

  const classes = useStyles();












  
  selectedItems = selectedItemsToExport;
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={isOpen}
      classes={checkDarkMod? {paper: classes.drawerPaperDark} : {paper: classes.drawerPaper}}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setOpen(false)} >
          <IoMdClose className={classes.icon} />
        </IconButton>
      </div>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {selectedItemsToExport.map((item, i) => (
                <SelectedItem
                  img={item.image}
                  name={item.name}
                  quantity={item.quantity}
                  onRemove={() => {
                    setSelectedItems(
                      removeItemToExisting(item, selectedItemsToExport)
                    );
                    discountDeckRemove(item);
                    setSelectedItems([...selectedItems]);
                    updateFunction(selectedItems)
                    
                  }}
                />
              ))}
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12}>
            <Divider variant="middle" />
              <TotalPrice  price={calculateTotalSum(selectedItems)}/>
            </Grid>
      </Grid>
    </Drawer>
  );
};

export default TheDrawer;
