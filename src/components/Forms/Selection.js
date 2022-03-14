import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selection(props) {
  const handleChange = (event) => {
    props.setNameSelection(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choisir...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.nameSelection}
          label="Nom"
          onChange={handleChange}
        >
          {props.utilisateurs.map((u) => (
            <MenuItem value={u}>{u}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
