import React from 'react';
import {Grid, Card, CardContent, Typography, CardMedia, Paper} from "@material-ui/core";
import { Link } from 'react-router-dom';

import useStyles from './AboutUsStyles';

import profilePic from '../../assets/AboutUsPic.JPG';
import logo from '../../assets/BookHero.png';

const AboutUs = () => {
    let classes = useStyles();
  return (
    <>
    <main className={classes.background}>
    <div className={classes.toolbar} />
    <Grid container className={classes.layout}spacing={10}>
      
        <Grid item xs={12} sm={12} md={6} lg={6}>
             <Card className={classes.background}>
            <CardContent align='center' > 
                <CardMedia component='img' src={logo} alt="logo" className={classes.logo}/>
<Typography variant="h5" gutterBottom style={{fontWeight: 'bold'}} className={classes.text}>Welcome to Book Hero</Typography>
<Typography variant="h6" gutterBottom style={{fontStyle: 'italic'}} className={classes.text}>The best person you can be is YOU!</Typography>
 <Typography variant="h6" gutterBottom className={classes.text}>Book Hero encourages everyone to be the hero of their own story.  By starting a journal, you are the main character
while you learn more about yourself.  </Typography>
<Typography variant="h6" gutterBottom className={classes.text}>Here at Book Hero, we create guided journals for all aspects of your life.  We have gratitude journals, tarot journals, budgeting journals,
and more! </Typography>

<Typography variant="h6" gutterBottom className={classes.text}> If there is a journal that you don't see here, please,  

<Link to="/contactus" className={classes.text}>contact us</Link>

!  We do custom orders!
We can create a planner with your favorite layouts or we can create notebooks with your company logo!  We are only limited by our imagination. </Typography>

<Typography variant ="h6" gutterBottom className={classes.text}>Much Love, </Typography>
<Typography variant="h6" gutterBottom className={classes.text}>Shannon Kramer, Founder of Book Hero</Typography>
            </CardContent>
        </Card>  

        </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
         <Card className={classes.profileBackground}>
             <CardContent align='center'>
                 <CardMedia component='img'
                  src={profilePic} alt="About Us" 
                  className={classes.image} align='center'
                  />
             </CardContent>
         </Card>
        </Grid>
    </Grid>
    </main>
    </>
  )
}

export default AboutUs