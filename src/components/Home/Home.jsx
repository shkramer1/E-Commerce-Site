import React from 'react';
import { Typography, Grid, CssBaseline, Paper, Card, CardHeader, CardContent, CardActions, Button, CardMedia} from '@material-ui/core';

import useStyles from './HomeStyles';
import logo from '../../assets/logoBookHeroLg.png';
import guidedJournal from '../../assets/guidedJournalPromo.jpg';
import activityBook from '../../assets/activityBookPromo1.png';
import printablesPromo from '../../assets/printablesPromo.png';

import { useNavigate } from 'react-router-dom';

import AboutUs from '../AboutUs/AboutUs';



const Home = () => {
  const classes = useStyles();
 let navigate=useNavigate();

  const onGuidedJournalsClicked =()=>{
  let path = '/guidedjournals'; 
 navigate(path);
} 

const onHolidayBooksClicked =()=>{
  let path = `/holidayactivitybooks`; 
 navigate(path);
} 

const onPrintablesClicked =()=>{
  let path = `/printables`; 
 navigate(path);
} 

const productCatergories = [
    {
       title: 'Guided Journals',
       image: guidedJournal ,
       description: 
         'A guided journal for all aspects of your life',
       buttonText: 'Shop',
       buttonVariant: 'contained',
       buttonClick: onGuidedJournalsClicked
     },
     
     {
       title: 'Holiday Activity Books',
       image: activityBook,
       description: 
         'Crosswords, Word Searches, Coloring Pages, and more!',
       buttonText: 'Shop',
       buttonVariant: 'contained',
       buttonClick: onHolidayBooksClicked
     },
     
     {
       title: 'Printables',
       image: printablesPromo,
       description: 'print your journal pages from home',
       buttonText: 'Shop',
       buttonVariant: 'contained',
       buttonClick: onPrintablesClicked
     },
     
   ];
   
  
    
    return (
      <React.Fragment>
          <CssBaseline />
          
        <main>
        <Paper className={classes.mainFeaturedPost}>
            <Grid container  xs={12} sm={12} md={12} lg={12}>
              <Card className={classes.mainFeaturedPost}>
                <CardContent>
                  <CardMedia component='img'
                  src={logo} alt="logo" className={classes.images}/>
              
                </CardContent>
                </Card>
            </Grid>

            <Grid container spacing={10} className={classes.layout} >
          {productCatergories.map(productCatergories => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={productCatergories.title} 
            xs={12} sm={12} md={4} lg={4} >
              <Card  >
                <CardHeader
                  title={productCatergories.title}
                  subheader={productCatergories.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  // action={tier.title === 'Pro' ? <Star /> : null}
                  className={classes.cardHeader}
                />
               
                  
                
                <CardContent>
                  {/* <CardMedia 
                component='img'
                src={productCatergories.image}
                alt='product image'
                height='400px'
                width='40px'
                /> */}
                    <Typography variant="subtitle1" align="center" className={classes.font}>
                      {productCatergories.description}
                    </Typography>
                
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant={productCatergories.buttonVariant} className={classes.button} onClick={productCatergories.buttonClick}>
                    {productCatergories.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div>
          <AboutUs></AboutUs>
        </div>

      <footer className={classes.footer}>
        <Grid container spacing={32} justify="space-evenly">
          
            <Grid item xs={12} sm={12} md={12} lg={12} >
           
              <Typography variant="h6" color="textPrimary" gutterBottom style={{color: 'white', fontFamily: 'Roboto'}}>
              Book Hero, LLC
              </Typography>

              <Typography variant="h6" color="textPrimary" gutterBottom style={{color: 'white', fontFamily: 'Roboto'}}>
              Instagram
              </Typography>

              <Typography variant="h6" color="textPrimary" gutterBottom style={{color: 'white', fontFamily: 'Roboto'}}>
              Twitter
              </Typography>

              <Typography variant="h6" color="textPrimary" gutterBottom style={{color: 'white', fontFamily: 'Roboto'}}>
              Contact Us
              </Typography>

              <Typography variant="h6" color="textPrimary" gutterBottom style={{color: 'white', fontFamily: 'Roboto'}}>
              Policies
              </Typography>
              
              
              
        
            </Grid>
        
        
        </Grid>
      </footer>

          </Paper> 
          
          

        </main>
      </React.Fragment>
    );
  };

export default Home