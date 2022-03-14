import { React } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import TitreNiveau1 from '../src/components/Titres/TitreNiveau1';
import ConnexionForm from '../src/components/Forms/ConnexionForm';

export default function Connexion() {
  return (
    <>
      <Box m="auto" component="div" sx={{ p: 2, width: '90%', align: 'center' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={12}>
            <TitreNiveau1>CONNEXION</TitreNiveau1>
          </Grid>
          <Grid item xs={12} md={12}>
            <ConnexionForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
