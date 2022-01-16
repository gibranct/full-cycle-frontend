import { Box } from '@mui/material';
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './AppRouter';
import { Navbar } from './components/Navbar';
import { RouterBreadcrumbs } from './components/RouterBreadcrumbs';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const theme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Box paddingTop={'70px'}>
            <RouterBreadcrumbs />
            <AppRouter />
          </Box>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
