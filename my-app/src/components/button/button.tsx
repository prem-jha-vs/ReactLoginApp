import React from 'react';
import { Button as MUIButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

interface Props {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = observer(({ children }) => {
  const classes = useStyles();

  return (
    <MUIButton variant="contained" color="primary" className={classes.button}>
      {children}
    </MUIButton>
  );
});