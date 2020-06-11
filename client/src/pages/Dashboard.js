import React, { useState } from 'react';
import {
  Grid,
  Box,
  Button,
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import chirpy from '../assets/chirpy.svg';

import BottomNav from '../components/BottomNav';

const Dashboard = () => {
  const [feelsToSend, setFeelsToSend] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFeelsToSend(value);
  };

  return (
    <Grid
      container
      style={container}
      justify="center"
      alignItems="center"
      direction="column"
      position="fixed"
    >
      <Grid item />

      <Grid item>
        <h3>
          How are you feeling today?
          <img src={chirpy} alt="chirpy the bird" style={chirpyStyle} />
        </h3>
      </Grid>

      <Grid item>
        <TextField
          style={{
            marginBottom: '10px',
            backgroundColor: 'white',
            width: '300px',
          }}
          id="outlined-multiline-static"
          multiline
          rows={6}
          variant="outlined"
          onChange={handleInputChange}
        ></TextField>
      </Grid>

      <Grid item style={{ marginBottom: '30px' }}>
        <Button style={buttonStyle} variant="contained" color="primary">
          Keep
        </Button>
        <Button style={buttonStyle} variant="contained" color="primary">
          Send
        </Button>
      </Grid>
      <Grid item style={{ marginLeft: '20px', marginRight: '20px' }}>
        <Box component="div" style={{ height: '380px' }} overflow="auto">
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Date Time Hello
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Date Time Hello
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Date Time Hello
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Date Time Hello
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Box>
      </Grid>
      <BottomNav />
    </Grid>
  );
};

export default Dashboard;

const container = {
  backgroundColor: '#A1D1B6',
  width: '100vw',
  height: '100vh',
  flexGrow: '1',
  fontFamily: 'Reenie Beanie',
  fontsize: '3em',
};

const chirpyStyle = {
  //top: '185px',
  //textAlign: 'center',
  //left: '40%',
  //right: '40%',
  width: '1em',
  height: '1em',
};

const buttonStyle = {
  color: 'black',
  fontSize: 16,
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgba(255, 216, 99, 0.87)',
  fontFamily: 'Reenie Beanie',
  marginLeft: '10px',
};

const bottomNav = {
  width: '100%',
  position: 'fixed',
  bottom: 0,
};
