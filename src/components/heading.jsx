import * as React from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';


export default function BasicStack() {
  return (
    <Box sx={{ width: '100%',display:'flex',justifyContent:'flex-start',paddingLeft:3,paddingTop:2 }}>
      <Stack spacing={2}>
         <h1>Book your defective or repairable device</h1>
      </Stack>
    </Box>
  );
}
