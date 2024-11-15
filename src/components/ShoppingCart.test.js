import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CartContext } from '../context/CartContext';
import ShoppingCart from './ShoppingCart';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock du composant ProductCart
jest.mock('./ProductCart', () => ({ image, title, price }) => (
  <div>
    <p>{title}</p>
    <p>{price}</p>
  </div>
));

// Mock du composant ConfirmCartBoutton
jest.mock('./ConfirmCartBoutton', () => () => (
  <button>Confirm</button>
));

describe('ShoppingCart Component', () => {
  const toggleCartMock = jest.fn();

  test('affiche un message lorsque le panier est vide', () => {
    render(
      <CartContext.Provider value={{ cartItems: [] }}>
        <Router>
          <ShoppingCart toggleCart={toggleCartMock} />
        </Router>
      </CartContext.Provider>
    );

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  test('affiche correctement les articles dans le panier', () => {
    const mockCartItems = [
      { image: 'image1.jpg', title: 'Product 1', price: '10.50', quantity: 2 },
      { image: 'image2.jpg', title: 'Product 2', price: '20.00', quantity: 1 },
    ];

    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <Router>
          <ShoppingCart toggleCart={toggleCartMock} />
        </Router>
      </CartContext.Provider>
    );

    // Vérifier si les produits sont affichés
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('10.50')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('20.00')).toBeInTheDocument();

    // Vérifier le calcul du total
    expect(screen.getByText('Total: $41.00')).toBeInTheDocument();
  });

  test('clique sur le bouton de fermeture du panier', () => {
    render(
      <CartContext.Provider value={{ cartItems: [] }}>
        <Router>
          <ShoppingCart toggleCart={toggleCartMock} />
        </Router>
      </CartContext.Provider>
    );

    const closeButton = screen.getByText('x');
    fireEvent.click(closeButton);
    expect(toggleCartMock).toHaveBeenCalledTimes(1);
  });

  test('clique sur le bouton de confirmation du panier', () => {
    const mockCartItems = [
      { image: 'image1.jpg', title: 'Product 1', price: '10.50', quantity: 2 }
    ];

    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <Router>
          <ShoppingCart toggleCart={toggleCartMock} />
        </Router>
      </CartContext.Provider>
    );

    // Vérifier le bouton de confirmation
    const confirmButton = screen.getByText('Confirm');
    expect(confirmButton).toBeInTheDocument();
  });
});
