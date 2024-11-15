import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { ThemeContext } from '../context/ThemeContext'; // Importer le contexte
import { CartContext } from '../context/CartContext'; // Importer le contexte

describe('Header Component with Contexts', () => {
  it('renders and uses contexts', () => {
    const mockToggleTheme = jest.fn();
    const mockAddToCart = jest.fn();

    render(
      <MemoryRouter>
        <ThemeContext.Provider value={{ theme: 'light', toggleTheme: mockToggleTheme }}>
          <CartContext.Provider value={{ cart: [], addToCart: mockAddToCart }}>
            <Header />
          </CartContext.Provider>
        </ThemeContext.Provider>
      </MemoryRouter>
    );

    // Vérifier les interactions liées aux contextes si nécessaire
    expect(screen.getByText('EcoShop')).toBeInTheDocument();
  });
});


