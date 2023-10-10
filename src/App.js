import React from 'react'
import { theme } from './utils/theme';
import { Container, MainBody } from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';

// importando Componantes
import Showcase from './components/Showcase';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <MainBody> 
      <Container>
        <Showcase />
      </Container>
    </MainBody>
    </ThemeProvider>
  );
}

export default App;
