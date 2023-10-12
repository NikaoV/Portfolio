import React from 'react'
import { theme } from './utils/theme';
import { Container, MainBody } from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';

// importando Componantes
import Showcase from './components/Showcase';
import Myskills from './components/MySkills';
import Myprojects from './components/MyProjects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <MainBody> 
      <Navbar />
      <Container>
        <Showcase />
        <Myskills />
        <Myprojects />
        <Footer />
      </Container>
    </MainBody>
    </ThemeProvider>
  );
}

export default App;
