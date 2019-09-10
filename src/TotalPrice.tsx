import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { checkDarkMod } from "./App";
import "./App.scss";




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    paper: {
      margin: 0,
      padding: theme.spacing(2),
      textAlign: "center",
      borderRadius: 0,
      boxShadow: 'none',
      fontSize: 30,
      background: 'transparent',
      color: '#17223b'
    },
    paperDark: {
      margin: 0,
      padding: theme.spacing(2),
      textAlign: "center",
      borderRadius: 0,
      boxShadow: 'none',
      fontSize: 30,
      background: 'transparent',
      color: '#fafdcb',
    },
    
})
);

interface TotalPriceProps{
    price: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({price}) => {
    const classes = useStyles();
    return (       
     <Paper className={checkDarkMod? classes.paperDark : classes.paper }>
       Total Price: ${price}
       </Paper>
    )
}

export default TotalPrice

