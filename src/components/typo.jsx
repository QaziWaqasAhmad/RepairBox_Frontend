import * as React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%',marginTop:20 }}>
      <Typography variant="h4" >
      Frequently Asked Questions
      </Typography>
      <Typography variant="p" sx={{color:'grey'}} >
      The most common questions about how our works.
      </Typography>
    </Box>
  );
}
