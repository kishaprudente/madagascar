import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import chirpy from '../assets/chirpy.svg';
import AboutCard from '../components/AboutCard.js'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ImageAvatars from '../components/Avatars';
import PageTitle from '../components/PageTitle';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: '1px solid #000000',
    boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		margin: '5px',
  }, 
  title: {
    fontFamily: 'Reenie Beanie'
  },
  body: {
    fontSize: '14px', 
    fontFamily: 'Reenie Beanie',
    left:'5.81%',
    right: '22.63%',
  }
});

const About = () => {
	 const classes = useStyles();
	 
    return (
    <Grid
      container
      style={container}
			>
    <Grid item xs={10} sm={11}>
          <PageTitle>About Us</PageTitle>
    </Grid>

    <Grid item xs={11} alignItems='center'>
        <AboutCard
        title="Story Behind Chirrup!"
        description="Chirrup! developed from an observation about friends and family reaching out for emotional support
        during COVID and from mood journals becoming increasingly popular as people become more self-aware of their emotions."
        />
    </Grid>
    <Grid item xs={11} alignItems='center'>
        <AboutCard
        title="What's Chirrup"
        description="Sed sapien, praesent odio justo. Quam quam mauris blandit dictumst vitae odio. Tortor commodo velit turpis laoreet sed lacus turpis."
       />
    </Grid>
    
    <Grid item xs={11} alignItems='right'>
      <Card className={classes.root} variant="outlined">
        <CardContent>
        <Typography className={classes.title} variant="h5">
        Who's Chirpy
        </Typography>
        <Typography className={classes.body} variant="body2" component="p">
        Tellus eu nulla diam ut laoreet feugiat magna quis viverra. Velit ut porta elit mattis nullam sed. Lacus ante nunc mattis eu adipiscing nam in.
        <img src={chirpy} alt='chirpy the bird' style={chirpyStyle}/> 
        </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={11} alignItems='center' style={{paddingBottom: '60px'}}>
    <Card className={classes.root} variant="outlined">
    <CardContent>
        <Typography className={classes.title} variant="h5">
        The Dream Team
        </Typography>
        {/* We could put the icons here of our GitHub profiles */}
        <ImageAvatars />
        <img src={chirpy} alt='chirpy the bird' style={chirpyStyle2}/> 
        <Typography className={classes.body} variant="body2" component="p">
        Chirpy The Bird
        </Typography>
    </CardContent>
    </Card>
    </Grid> 
    </Grid>
   
    );
}

export default About;

const container = {
  background: '#A1D1B6',
  height: '90vh',
	justifyContent: 'center',
};

const font = {
  fontFamily: 'Reenie Beanie',
};

const chirpyStyle = {
  width: '5em',
  height: '5em',
  float: 'right'
};

const chirpyStyle2 = {
  width: '2em',
  height: '2em',
  bottom: '17.09%',
};
