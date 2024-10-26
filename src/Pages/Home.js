import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import styled, { ThemeProvider } from 'styled-components';

// Définir des thèmes clairs et sombres
const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: '#333',
  color: '#fff',
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};


function Home() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
      <ThemeProvider theme={themes[theme]}>
        <AppWrapper>
          <Header />
          <Carousel />
          <Footer />
        </AppWrapper>
      </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
`;


export default Home;
