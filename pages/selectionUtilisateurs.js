import * as React from 'react';

import { useContext } from 'react';
import { UtilisateursContext } from '../src/data/context/utilisateursContext';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import TitreNiveau1 from '../src/components/Titres/TitreNiveau1';
import TitreNiveau4 from '../src/components/Titres/TitreNiveau4';
import BoutonFermer from '../src/components/Boutons/BoutonFermer';
import BoutonUtilisateursCounter from '../src/components/Boutons/BoutonUtilisateursCounter';
import TableSelectionUtilisateurs from '../src/components/Tables/TableSelectionUtilisateurs';
import RechercheUtilisateurForm from '../src/components/Forms/RechercheUtilisateurForm';

export async function getStaticProps() {
  const API_URL = 'https://swapi.dev/api/people/';
  const reponseAPI = await fetch(API_URL).then((rep) => {
    return rep.json();
  });

  return {
    props: {
      reponseAPI,
    },
  };
}

export default function SelectionUtilisateurs({ reponseAPI }) {
  const [utilisateursSelection, setUtilisateursSelection] = React.useState(new Array());
  const [utilisateursRecherche, setUtilisateursRecherche] = React.useState(new Array());
  //const utilisateursAPI = useContext(UtilisateursContext);

  return (
    <>
      <Box m="auto" component="div" sx={{ p: 1, m: 5, width: '90%', align: 'center' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8} md={8} sx={{ p: 1 }}>
            <TitreNiveau1>SÉLECTIONNER DES UTILISATEURS</TitreNiveau1>
          </Grid>
          <Grid item xs={4} md={4}>
            <BoutonUtilisateursCounter selected={utilisateursSelection.length} />
          </Grid>
          <Grid item xs={12} md={12}>
            <TitreNiveau4>Recherche</TitreNiveau4>
          </Grid>
          <Grid item xs={12} md={12}>
            <RechercheUtilisateurForm
              utilisateursRecherche={utilisateursRecherche}
              setUtilisateursRecherche={setUtilisateursRecherche}
              reponseAPI={reponseAPI}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <hr />
          </Grid>
          <Grid item xs={12} md={12}>
            <TableSelectionUtilisateurs
              utilisateursRecherche={utilisateursRecherche}
              setUtilisateursRecherche={setUtilisateursRecherche}
              setUtilisateursSelection={setUtilisateursSelection}
              reponseAPI={reponseAPI}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <BoutonFermer selected={utilisateursSelection}>Fermer</BoutonFermer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
