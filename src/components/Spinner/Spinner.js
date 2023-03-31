import React from 'react';
import { Box ,CircularProgress } from "@mui/material";

const Spinnner = () => {
  return (
    <Box sx={{ alignItems:"center", display: "flex", m: 2 , width: '100vw',    heigth: '100vh',    justifyContent: 'center'}}>
      <CircularProgress />
    </Box>
  );
};

export default Spinnner;
