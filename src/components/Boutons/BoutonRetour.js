import React from 'react';
import { useRouter } from 'next/router';

import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FastRewindIcon from '@mui/icons-material/FastRewind';

import TexteBoutonGrise from './TexteBoutonGrise';

const theme = createTheme({
  palette: {
    default: {
      main: '#878787',
    },
  },
  shape: {
    borderRadius: 20,
  },
});

export default function BtnRetour({ children }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    router.push({
      pathname: '/connexion',
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClick}
          color="default"
          variant="outlined"
          startIcon={<FastRewindIcon />}
        >
          <TexteBoutonGrise>{children}</TexteBoutonGrise>
        </Button>
      </ThemeProvider>
    </>
  );
}
