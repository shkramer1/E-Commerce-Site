import React from 'react';

import { Grid } from "@material-ui/core";
import ProductNavBar from '../ProductNavBar/ProductNavBar';

import Printable from "./Product/GuidedJournal";
import useStyles from "./productsStyles";

const Printables = ({ printables, onAddToCart }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <header>
        <ProductNavBar></ProductNavBar>
      </header>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={5}>
          {printables.map((printable) => (
            <Grid item key={printable.id} xs={12} sm={6} md={4} lg={3}>
              <Printable guidedJournal={printable} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default Printables;