import React from 'react';

import { UtilisateursContextProvider } from '../src/data/context/utilisateursContext';

import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <UtilisateursContextProvider>
      <Component {...pageProps} />
    </UtilisateursContextProvider>
  );
}
