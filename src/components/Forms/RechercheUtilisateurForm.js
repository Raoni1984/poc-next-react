import { React, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import BoutonRecherche from '../Boutons/BoutonRecherche';

export default function RechercheUtilisateurForm(props) {
  const [nomResultatRecherche, setNomResultatRecherche] = useState('');

  let utilisateursArray = [];
  props.reponseAPI.results.map((rep) => {
    utilisateursArray.push({ name: rep.name, gender: rep.gender, bith_year: rep.birth_year });
  });

  const RechercheParNom = (nomRecherche) => {
    console.log('recherche par nom ... ');
    let trouve = false;

    utilisateursArray.map((obj) => {
      if (obj.name == nomRecherche) {
        console.log(obj);
        trouve = true;
        props.setUtilisateursRecherche(new Array(obj));
      }
    });
    if (!trouve) {
      console.log('non trouvé');
      props.setUtilisateursRecherche(utilisateursArray);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
          display: 'flex',
          m: 1,
          p: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Prénom"
              variant="outlined"
              id="outlined-basic"
              value={nomResultatRecherche}
              onChange={(e) => setNomResultatRecherche(e.target.value)}
            />
          </Grid>
          <Grid item md={12}>
            <TextField fullWidth id="outlined-basic" label="Nom" variant="outlined" />
          </Grid>
          <Grid item xs={6} md={6}></Grid>
          <Grid item xs={6} md={6}>
            <BoutonRecherche
              nomRecherche={nomResultatRecherche}
              setNomResultatRecherche={setNomResultatRecherche}
              nomsArray={utilisateursArray}
              rechercheParNom={RechercheParNom}
            >
              Rechercher
            </BoutonRecherche>
            {/* <BoutonRecherche onClick={RechercheParNom(nom, nomsArray)}>Rechercher</BoutonRecherche> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
