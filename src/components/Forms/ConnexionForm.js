import { React, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import BoutonConnecter from '../Boutons/BoutonConnecter';

export default function RechercheUtilisateur() {
  const [nom, setNom] = useState('');
  const [erreurNom, setErreurNom] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreurMotDePasse, setErreurMotDePasse] = useState('');

  // VALIDATION NOM D'UTILISATEUR
  const MAX_LENGTH = 10;
  let nomUtilisateurEstValide = nom.length <= MAX_LENGTH ? true : false;

  useEffect(() => {
    if (!nomUtilisateurEstValide) {
      setErreurNom(`Le nom d'utilisateur ne peut pas dépasser ${MAX_LENGTH} caractères.`);
    }
  }, [nom]);

  useEffect(() => {
    if (nomUtilisateurEstValide && erreurNom) {
      setErreurNom('');
    }
  }, [nom, erreurNom]);

  // VALIDATION MOT DE PASSE
  const MOT_DE_PASSE_FAKE = '123456';
  let motDePasseEstValide = motDePasse == MOT_DE_PASSE_FAKE ? true : false;

  useEffect(() => {
    if (motDePasse.length > 0 && !motDePasseEstValide) {
      setErreurMotDePasse(`Le mot de passe est invalide.`);
    }
  }, [motDePasse]);

  useEffect(() => {
    if ((motDePasse.length == 0 || motDePasseEstValide) && erreurMotDePasse) {
      setErreurMotDePasse('');
    }
  }, [motDePasse, erreurMotDePasse]);

  // NAVIGATION PAR LE TOUCHE ENTER
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && motDePasseEstValide) {
      router.push({
        pathname: '/listeUtilisateurs',
      });
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
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Nom d'utilisateur"
              variant="outlined"
              error={nomUtilisateurEstValide == false}
              id="outlined-error"
              helperText={erreurNom}
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Mot de passe"
              variant="outlined"
              error={motDePasse.length > 0 && motDePasseEstValide == false}
              id="outlined-error"
              helperText={erreurMotDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              value={motDePasse}
              onKeyPress={handleKeyPress}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <BoutonConnecter motDePasseEstValide={motDePasseEstValide}>
              Se connecter
            </BoutonConnecter>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
