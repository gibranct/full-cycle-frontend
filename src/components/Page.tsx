import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

type PageProps = {
  title: string
};

const useStyles = makeStyles({
  title: {
    color: '#999999',
  }
})

export const Page: React.FC<PageProps> = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title} component='h1' variant='h5'>
        {props.title}
      </Typography>
      <Box paddingTop={2}>
        {props.children}
      </Box>
    </Container>
  );
};