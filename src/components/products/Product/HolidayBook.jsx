import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const HolidayBook = ({ holidayBook, onAddToCart }) => {
  const classes = useStyles();

  // console.log(product);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={holidayBook.image.url}
        title={holidayBook.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {holidayBook.name}
          </Typography>
          <Typography variant="h5">
            {holidayBook.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: holidayBook.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(holidayBook.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default HolidayBook;
