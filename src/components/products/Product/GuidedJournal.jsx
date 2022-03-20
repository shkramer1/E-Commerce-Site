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

const GuidedJournal = ({ guidedJournal, onAddToCart }) => {
  const classes = useStyles();

  // console.log(product);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={guidedJournal.image.url}
        title={GuidedJournal.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {guidedJournal.name}
          </Typography>
          <Typography variant="h5">
            {guidedJournal.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: guidedJournal.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(guidedJournal.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default GuidedJournal;
