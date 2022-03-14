import React from 'react';
import { useRouter } from 'next/router';

import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';

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

export default function BtnFermer({ children, selected }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    router.push({
      pathname: '/listeUtilisateurs',
      query: { data: JSON.stringify(selected) },
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClick}
          color="default"
          variant="outlined"
          startIcon={<CancelPresentationOutlinedIcon />}
        >
          <TexteBoutonGrise>{children}</TexteBoutonGrise>
        </Button>
      </ThemeProvider>
    </>
  );
}
