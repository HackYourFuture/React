import React from 'react';

import { Container, Box, Grid } from '@material-ui/core';
import Header from './components/Header';
import AuthContextProvider from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Container>
        <Box height="calc(100vh - 64px)" marginTop="64px" padding="1rem 0">
          <Grid container style={{ height: '100%' }}>
            <AppRoutes />
          </Grid>
        </Box>
      </Container>
    </AuthContextProvider>
  );
}

export default App;
