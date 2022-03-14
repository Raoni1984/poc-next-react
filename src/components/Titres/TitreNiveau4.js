import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const theme = createTheme({
  typography: {
    titre_niveau1: {
      fontFamily: 'Arial',
      fontWeight: 'normal',
      fontSize: '26px',
      color: '#878787',
      textTransform: 'none',
      letterSpacing: '-3',
    },
  },
});

export default function TitreNiveau4({ children }) {
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
