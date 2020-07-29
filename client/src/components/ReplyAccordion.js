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
  handleSendReply,
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
        <Typography style={styles.post}>{post.post}</Typography>
      </AccordionSummary>
      {expanded === post._id ? (
        <React.Fragment>
          <Divider variant='middle' />
          <AccordionDetails style={styles.details}>
            <TextField
              multiline
              rows={3}
              margin='none'
              fullWidth
              id='reply-input'
              value={input}
              variant='outlined'
              InputProps={styles.textfield}
              onChange={(event) => handleInputChange(event, post._id)}
            />
          </AccordionDetails>
          <AccordionActions style={styles.actions}>
            <Buttons onClick={() => handleSendReply(post._id)}>send</Buttons>
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
    borderRadius: 0,
    border: '1px solid #000000',
  },
  textfield: {
    style: {
      borderRadius: 0,
    },
  },
  details: {
    padding: '8px 16px',
  },
  actions: {
    paddingTop: 0,
  },
  post: {
    fontFamily: 'Ruluko',
    fontSize: '16px',
  },
};
