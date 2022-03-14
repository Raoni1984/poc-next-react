import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const theme = createTheme({
  typography: {
    titre_niveau1: {
      fontWeight: 'bold',
      fontSize: '30px',
      color: '#F22536',
    },
  },
});

export default function TitreNiveau1({ children }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="titre_niveau1">
          <Box sx={{ letterSpacing: 5 }}>{children}</Box>
        </Typography>
      </ThemeProvider>
    </div>
  );
}
