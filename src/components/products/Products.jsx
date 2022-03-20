import React from "react";
import { Grid} from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./productsStyles";

import logo from "../../assets/BookHero.png";

import ProductNavBar from "../ProductNavBar/ProductNavBar";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <header> 
         <div className={classes.container}>
        <ProductNavBar></ProductNavBar>
        </div>
      </header>
      <main className={classes.content}>
       
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={5}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    
    </React.Fragment>
  );
};

export default Products;
