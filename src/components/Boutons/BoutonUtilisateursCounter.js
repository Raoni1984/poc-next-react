import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import React from 'react';

import TexteBoutonGrise from './TexteBoutonGrise';

const theme = createTheme({
  palette: {
    default: {
      main: '#878787',
    },
  },
});

export default function BtnUtilisateursCounter(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button color="default" variant="outlined" endIcon={<PeopleIcon />}>
          <TexteBoutonGrise>{props.selected > 0 ? props.selected : 0}</TexteBoutonGrise>
        </Button>
      </ThemeProvider>
    </>
  );
}
