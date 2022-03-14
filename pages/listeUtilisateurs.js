import { React, useState } from 'react';
import { useRouter } from 'next/router';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from '../src/components/Link';
import Selection from '../src/components/Forms/Selection';
import DatePicker from '../src/components/Forms/DatePicker';
import BoutonRetour from '../src/components/Boutons/BoutonRetour';
import BoutonAppelAPI from '../src/components/Boutons/BoutonAppelAPI';
import TitreNiveau1 from '../src/components/Titres/TitreNiveau1';

import TableListeUtilisateurs from '../src/components/Tables/TableListeUtilisateurs';

export default function ListeUtilisateurs() {
  const router = useRouter();
  const utilisateurs = router.query.data;

  const [nameSelection, setNameSelection] = useState('');
  const [repSWAPI, setRepSWAPI] = useState('');

  let arrayUtilisateurs = [];

  if (utilisateurs) {
    for (var i of utilisateurs.split(',')) {
      let preNom = i.replace(/[^A-Za-z0-9_ -]/g, '');
      arrayUtilisateurs.push(preNom);
    }
  }

  const API_URL = 'https://swapi.dev/api/people//?search=';

  const handleAppelAPI = async () => {
    let url = `${API_URL}${nameSelection}`;
    console.log('appel API avec url = ' + url);

    await fetch(url)
      .then((reponse) => reponse.json())
      .then((reponse) => {
        //On acceptera le premier resultat de la recherche
        setRepSWAPI(reponse.results[0]);
      });

    let apiResult = repSWAPI.name;
    setTimeout(console.log('retorno API = ' + apiResult), 10000);
  };

  return (
    <>
      <Box m="auto" component="div" sx={{ p: 2, width: '90%', align: 'center' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8} md={8}>
            <TitreNiveau1>LISTE D'UTILISATEURS</TitreNiveau1>
          </Grid>

          <Grid item xs={12} md={12}>
            <Link href="/selectionUtilisateurs">Sélectionner un utilisateur</Link>
          </Grid>
          <Grid item xs={12} md={12}>
            <TableListeUtilisateurs utilisateurs={arrayUtilisateurs} />
          </Grid>
          <Grid item xs={3} md={3}>
            <BoutonRetour>Retour</BoutonRetour>
          </Grid>
          <Grid item xs={3} md={3}>
            <DatePicker />
          </Grid>
          <Grid item xs={3} md={3}>
            <Selection
              utilisateurs={arrayUtilisateurs}
              nameSelection={nameSelection}
              setNameSelection={setNameSelection}
            ></Selection>
          </Grid>
          <Grid item xs={3} md={3}>
            <BoutonAppelAPI onClick={handleAppelAPI}>Appel API</BoutonAppelAPI>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h8" component="div" gutterBottom>
              Valeur retourné par l'API:
              <Link href={repSWAPI.url ? repSWAPI.url : ''}>{repSWAPI.url}</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
