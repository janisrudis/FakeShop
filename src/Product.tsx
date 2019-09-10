import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "./App.scss";
import { DAL } from "./colors";
import { checkDarkMod } from "./App";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "auto",
      height: "auto"
    },
    img: {
      paddingTop: "15%",
      paddingBottom: "10%",
      width: "65%",
      height: "auto"
    },
    product: {
      background: "transparent",
      boxShadow: "none"
    },
    eur: {
      color: DAL
    },
    sale:{
      width: '30%',
      height: '30%',
      position: 'relative',
      
    }
  })
);

interface ProductProps {
  name: string;
  description: string;
  price: number;
  image: string;
  image2: string;
  brand: string;
  sale: string;
  available: number;
  onSelect(): void;
}

const Product: React.FC<ProductProps> = ({
  name,
  description,
  price,
  image,
  image2,
  brand,
  available,
  sale,
  onSelect
}) => {
  const classes = useStyles();
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div  style={{backgroundImage: `url(${sale})`}} className={checkDarkMod? "flip-card-overlay" : "flip-card-overlay-light"} >
          <div className="flip-card-picture" 
          style={{backgroundImage: `url(${image})`}}>
            <h1 >
              {price} <span className={classes.eur}>€</span>{" "}
            </h1> </div>
          </div>
        </div>
        <div className={checkDarkMod? "flip-card-back-dark" : "flip-card-back-light"} style={{backgroundImage: `url(${image2})`}}>
    <div className="flip-card-back-brand"> {brand} </div>
          <h1>{name}</h1>
          <br />
          <p>{description}</p>
          <br />
          <br />
          <p><span className={classes.eur}>{available}</span> in stock.</p>
            <div className="button_cont" >
              <a
                className={checkDarkMod? "button_D" : "button_L"}
                onClick={onSelect}
              >
                Add to carts
              </a>
            </div>
            <br />
         
            
        </div>
      </div>
    </div>
  );
};
export default Product;
