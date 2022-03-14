import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

import TexteBoutonBlanc from './TexteBoutonBlanc';

const theme = createTheme({
  palette: {
    default: {
      main: '#F22536',
    },
  },
  shape: {
    borderRadius: 20,
  },
});

export default function BtnRouge(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button onClick={props.onClick} color="default" variant="contained">
          <TexteBoutonBlanc>{props.children}</TexteBoutonBlanc>
        </Button>
      </ThemeProvider>
    </>
  );
}
