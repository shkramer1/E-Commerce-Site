import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  
  Typography,
  Button
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/BookHero.png";
import useStyles from "./navBarStyles";

import BasicMenu from "./menu";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="sticky" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            HOME
          </Typography>
          <div className={classes.title}>
            <BasicMenu />
            </div>
        
          <Typography
            component={Link}
            to="/aboutus"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            ABOUT US
          </Typography>
          <Typography
            component={Link}
            to="/contactus"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            CONTACT US
          </Typography>
          <div className={classes.grow} />
          {/* {location.pathname === !"/cart"  && ( */}
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          {/* )} */}
        </Toolbar>
      </AppBar>
      
    </>
  );
};

export default Navbar;
