import React from 'react';
import { useRouter } from 'next/router';

import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

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

export default function BoutonConnecter({ children, motDePasseEstValide }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    if (motDePasseEstValide) {
      router.push({
        pathname: '/listeUtilisateurs',
      });
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClick}
          color="default"
          variant="outlined"
          startIcon={<ArrowForwardRoundedIcon />}
        >
          <TexteBoutonGrise>{children}</TexteBoutonGrise>
        </Button>
      </ThemeProvider>
    </>
  );
}
