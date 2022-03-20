import React from 'react';

import { Grid } from "@material-ui/core";
import ProductNavBar from '../ProductNavBar/ProductNavBar';

import HolidayBook from "./Product/GuidedJournal";
import useStyles from "./productsStyles";

const HolidayBooks  = ({ holidayBooks, onAddToCart }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <header>
        <ProductNavBar></ProductNavBar>
      </header>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={5}>
          {holidayBooks.map((holidayBook) => (
            <Grid item key={holidayBook.id} xs={12} sm={6} md={4} lg={3}>
              <HolidayBook guidedJournal={holidayBook} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default HolidayBooks;