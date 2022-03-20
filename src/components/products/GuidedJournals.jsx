import React from 'react';

import { Grid } from "@material-ui/core";

import ProductNavBar from '../ProductNavBar/ProductNavBar';
import GuidedJournal from "./Product/GuidedJournal";
import useStyles from "./productsStyles";

const GuidedJournals = ({ guidedJournals, onAddToCart }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <header>
        <ProductNavBar></ProductNavBar>
      </header>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={5}>
          {guidedJournals.map((guidedJournal) => (
            <Grid item key={guidedJournal.id} xs={12} sm={6} md={4} lg={3}>
              <GuidedJournal guidedJournal={guidedJournal} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default GuidedJournals;