import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { IoMdTrash } from "react-icons/io";
import { checkDarkMod } from "./App";
import { DAL } from "./colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      height: 60,
      
    },
    paper: {
      border: 0,
      background: 'transparent',
      boxShadow: "none",
      borderRadius: 0,
      padding: 5,
      color: '#17223b',
    },
    paperDark: {
      border: 0,
      background: 'transparent',
      boxShadow: "none",
      borderRadius: 0,
      padding: 5,
      color: '#fafdcb',
    },
    grid: {
      fontSize: 25,
      boxShadow: "none",
      borderRadius: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      textAlign: 'center'
    },
    name:{
      textAlign: 'center',
      paddingTop: 15,
    }
  })
);

interface SelectedItemProps {
  name: string;
  quantity: number;
  img: string;
  onRemove(): void;
}



const SelectedItem: React.FC<SelectedItemProps> = ({
  name,
  img,
  quantity = 0,
  onRemove
}) => {
  const classes = useStyles();

  return (
    <Paper className={checkDarkMod? classes.paperDark : classes.paper }  >
      <Grid container spacing={0} className={classes.grid} >
        <Grid item className={classes.grid} >
          <img src={img} alt={name} className={classes.image}/>
        
        </Grid>
        <Grid item className={classes.name}> 
        {name} : {quantity}
        </Grid>

        
        <Grid item className={classes.grid}>
          <Button onClick={onRemove} >
            <IoMdTrash size={30} color={checkDarkMod? DAL : '#28c3d4' }/>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SelectedItem;
