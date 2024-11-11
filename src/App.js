import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importer Router, Routes, Route
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Home from './Pages/Home.js';
import ProductCard from './components/Productcard.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Cart from './Pages/Cart.js';

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
    <CartProvider> {/* Envelopper toute l'application avec CartProvider */}
      <StyledThemeProvider theme={themes[theme]}>
        <AppWrapper>
          <Router>
            <Header />

            {/* Définir les routes */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Accueil */}
              <Route path="/Productcard/:id" element={<ProductCard />} /> 
              <Route path="/Cart" element={<Cart />} />
            </Routes>

            <Footer />
          </Router>
        </AppWrapper>
      </StyledThemeProvider>
    </CartProvider>
  );
}

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
`;

export default App;
