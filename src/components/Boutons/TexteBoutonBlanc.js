import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const theme = createTheme({
  typography: {
    texte_bouton1: {
      fontFamily: 'Arial',
      fontWeight: 'normal',
      fontSize: '16px',
      color: '#FFFFFF',
    },
  },
});

export default function TexteBoutonBlanc({ children }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="texte_bouton1">
          <Box sx={{ letterSpacing: 5 }}>{children}</Box>
        </Typography>
      </ThemeProvider>
    </div>
  );
}
