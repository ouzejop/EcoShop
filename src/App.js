import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importer Router, Routes, Route
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Home from './Pages/Home.js';

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

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
      <StyledThemeProvider theme={themes[theme]}>
        <AppWrapper>
          <Router>

            {/* Définitiom les routes */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Accueil */}
            </Routes>

          </Router>
        </AppWrapper>
      </StyledThemeProvider>
  );
}

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
`;

export default App;
