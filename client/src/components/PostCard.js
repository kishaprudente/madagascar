import React from 'react';
import { Container, Box, Button } from '@material-ui/core';
import LayeredPages from '../assets/LayeredPages.svg';

const styles = {
  svg: {
    paddingTop: '100px',
    position: 'relative',
  },
  paper: {
    background: '#F2F2F2',
    position: 'relative',
    maxWidth: '290px',
    maxHeight: '100px',
    left: '50px',
    bottom: '190px',
    zIndex: '3000'
  },
  replyButton: {
    background: 'rgba(255, 216, 99, 0.87)',
    position: 'relative',
    left: '250px',
    bottom: '180px',
  },
}

const PostCard = () => {
  return (
    <Container style={styles.container}>
      <Box component='img' src={LayeredPages} alt='background' style={styles.svg}/>
      <Box style={styles.paper} overflow='auto' whiteSpace='normal'>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      </Box>
      <Button variant='contained' style={styles.replyButton}>reply</Button>
    </Container>
  );
}

export default PostCard;