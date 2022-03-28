import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }} style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
      <CircularProgress />
    </Box>
  );
}