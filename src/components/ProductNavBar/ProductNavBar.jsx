import React from 'react';
import {Grid, Typography, Toolbar} from "@material-ui/core";
import { Link } from 'react-router-dom';

import useStyles from '../products/productsStyles';

import logo from '../../assets/BookHero.png';


const ProductNavBar = () => {

    const classes = useStyles(); 
  return (
      <>
    <div className={classes.container}>
    <Grid xs={12} sm={12} md={12} lg={12} >
  <Toolbar > 
    
   <img component='img'
              src={logo} 
              alt="logo" 
              className={classes.image}
              style={{paddingRight: '35px'}}
             
              />
         

          
      <Typography 
      variant="h5"  
      className={classes.title} 
      component={Link} 
      to="/products"
  
        >All Products
        </Typography>  
      
                
           
      <Typography 
      variant="h5"   
      component={Link} 
      to="/guidedjournals" 
      className={classes.title}
      
      >Guided Journals
      </Typography>

      <Typography 
      variant="h5" 
      component={Link} 
      to="/holidayactivitybooks" 
      className={classes.title}
      
      >Holiday Activity Books</Typography>
      <Typography 
      variant="h5" 
      component={Link} 
      to="/printables" 
      className={classes.title}
    
      >Printables</Typography>
    
     </Toolbar>
    </Grid>
    </div>
 </> 
  )
 
}

export default ProductNavBar