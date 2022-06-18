import React from 'react';
import { Typography, Button } from '@mui/material';

import useStyles from './styles';
const currentPage = 1;

const Pagination = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        type='button'
      >
        Prev
      </Button>
      <Typography variant='h4' className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        type='button'
      >
        Prev
      </Button>
    </div>
  );
};

export default Pagination;
