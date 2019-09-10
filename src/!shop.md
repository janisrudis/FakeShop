Acceptance criteria:

<!-- User sees a list of products on the left side;

User sees the list of products he has chosen on the right side;

Every product has the fields name quantity price and sum;

Clicking on an item on the left should add it to the cart - Clicking on it the second time should increase the quantity - we don't want to see duplicates

At the bottom of the cart users see the total component which shows the total price x quantity of items selected. -->




And at least 6 Bonus Features from these (or your own ideas):

<!-- A few of the products have a discount - "Pay for 2, get 3rd one for free". Implement this logic to your cart - so that total price of the item and all cart is updated correctly as user adds/removes items to the cart. -->

<!-- On page reload the cart is not lost - you may use localStorage. --> MUST FIX Available on reload!

Items appear/disappear from the cart with an animation (or fly from the shop to cart via an animation) - Spring based animations are really nice.

Users can use Drag & Drop to re-order the items, or add/remove them from shore to cart

Every 1 000 000th visitor of the site sees a popup that he is the 1 000 000th visitor of this site and he wins a car new car

There is a searchbar with an autocomplete above the products list - that filters the list of products as user types a search term

<!-- User can toggle light/dark/pink? theme of the app. -->

react-router or is used to lead to the checkout page, where user goes through a stepper to enter his address and credit card details in a multi step process.

<!-- Some items have limited quantity, and as user tries to increase the quantity on the cart, a snackbar appears with a warning notification that the stock is limited. -->

<!-- Items in the shop that have a quantity 0, can't even be added to the cart (are disabled) -->

The cart is accessible even for people with disabilities - it should be possible for people to use the full functionality even for people that are unable to use the mouse - they can use TAB or Shift + TAB or Space or Enter to navigate and interact with the cart. This resource on MDN could be useful.














 close: {
      padding: theme.spacing(0.5)
    },
    root: {
      flexGrow: 0,
      boxShadow: "none"
    },
    paper: {
      padding: theme.spacing(0),
      color: theme.palette.text.secondary,
      border: 0,
      borderRadius: 0,
      boxShadow: "none",
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
      ...theme.mixins.toolbar,
      justifyContent: "flex-start"
    },
    content: {
      width: `calc(100% - ${drawerWidth}px)`,
      flexGrow: 1,
      padding: theme.spacing(0),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginRight: -drawerWidth
    },
    contentShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    },







<Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(false)}>
            {<ChevronLeftIcon />}
          </IconButton>
        </div>
        <Grid item>
          <Paper>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                {selectedItems.map((item, i) => (
                  <SelectedItem
                    img={item.image}
                    name={item.name}
                    quantity={item.quantity}
                    onRemove={() => {
                      setSelectedItems(
                        removeItemToExisting(item, selectedItems)
                      );

                      discountDeckRemove(item);
                      setSelectedItems([...selectedItems]);
                      
                      
                    }}
                  />
                ))}
              </Grid>
              <Grid item xs={12}>
                <TotalPrice price={calculateTotalSum(selectedItems)} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Drawer>




















PRODUCT backup ###########################

    // <Paper className={classes.product}>
    //   <Grid container direction="row" spacing={1} 
    //   className={checkDarkMod? 'dark-product' : 'light-mode' }>
    //     <Grid item>
    //       <ButtonBase className={classes.image} onClick={() => { alert('aaaaa') } }>
    //         <img className={classes.img} alt={name} src={image} />
    //       </ButtonBase>
    //     </Grid>
    //     <Grid >

    //       <Grid item xs={12} container direction="column" spacing={0}>
    //         <Grid item>
    //           <Typography>
    //             {name}
    //           </Typography>
    //           <Typography >{description}
    //             {description}
    //           </Typography>
    //         </Grid>
            
    //         <Typography>
    //       {price} Eur / {available} pcs{" "}
    //     </Typography>
    //     <Grid item>
    //           <button onClick={onSelect} >
    //             Add to carts
    //           </button>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Paper>




    Flip card 



    
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>{price} Eur </h1> 
      <img src={image} alt={name} className={classes.img}/>
    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>








<Grid className={classes.items} >
            {items.map(item => (
              <Product
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                available={item.available}
                onSelect={() => {
                  setSelectedItems(addItemToExisting(item, selectedItems));
                  discountDeck(item);
                  setSelectedItems([...selectedItems]);
                  handleClick();
                }}
              />
            ))}
          </Grid>









           <img src={image} alt={name} className={classes.img}  />