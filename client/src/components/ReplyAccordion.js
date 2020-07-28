import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Buttons from './Button';

const ReplyAccordion = ({
  post,
  input,
  handleInputChange,
  expanded,
  handleChange,
}) => {
  return (
    <Accordion
      expanded={expanded === post._id}
      onChange={handleChange(post._id)}
      style={styles.container}
    >
      <AccordionSummary
        id={post._id}
        aria-controls={`reply${post._id}`}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{post.post}</Typography>
      </AccordionSummary>
      {expanded === post._id ? (
        <React.Fragment>
          <Divider />
          <AccordionDetails style={styles.details}>
            <TextField
              multiline
              rows={3}
              id='reply-input'
              value={input}
              variant='outlined'
              style={styles.textfield}
              onChange={handleInputChange}
            />
          </AccordionDetails>
          <AccordionActions style={styles.actions}>
            <Buttons>send</Buttons>
          </AccordionActions>
        </React.Fragment>
      ) : null}
    </Accordion>
  );
};

export default ReplyAccordion;

const styles = {
  container: {
    margin: '2px 0',
  },
  textfield: {
    width: '100%',
  },
  details: {
    padding: '8px 16px',
  },
  actions: {
    paddingTop: 0,
  },
};
