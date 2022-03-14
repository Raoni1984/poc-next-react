import { React, useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

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

export default function BtnRecherche(props) {
  const handleClick = (e) => {
    e.preventDefault();

    props.rechercheParNom(props.nomRecherche);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClick}
          // onClick={RechercheParNom(props.nomRecherche, props.nomsArray)}
          color="default"
          variant="outlined"
          startIcon={<SearchIcon />}
        >
          <TexteBoutonGrise>{props.children}</TexteBoutonGrise>
        </Button>
      </ThemeProvider>
    </>
  );
}
