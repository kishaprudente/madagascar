import React from 'react';
import { Grid, Button, Box } from '@material-ui/core';
import chirpy from '../assets/chirpy.svg';
import AboutCard from '../components/AboutCard.js'
import Typography from '@material-ui/core/Typography';

const About = () => {
    return (
    <Grid
      container
      // alignItems='center'
      style={{ background: '#A1D1B6', height: '90vh', justifyContent: 'center', fontFamily: 'Rosarivo' }}
    >
    <Grid item xs={10} sm={11}>
          <Typography style={{ fontFamily: 'Reenie Beanie', display: 'flex', padding: '40px'}} variant='h3'>
            About Us
          </Typography>
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
    <Grid item xs={11} alignItems='center'>
        <AboutCard
        title="Who's Chirpy?"
        description="Tellus eu nulla diam ut laoreet feugiat magna quis viverra. Velit ut porta elit mattis nullam sed. Lacus ante nunc mattis eu adipiscing nam in."
        />
    </Grid>
    <Grid item xs={11} alignItems='center'>
        <AboutCard
        title="The Dream Team"
        />
    </Grid> 
    </Grid>
    );
}

export default About;