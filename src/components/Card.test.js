// Card.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';

describe('Card Component', () => {
  const mockAddToCart = jest.fn();
  const product = {
    id: 1,
    image: 'https://fakestoreapi.com/img/image.jpg',
    title: 'Test Product Title',
    price: 29.99,
  };

  const renderComponent = (theme = 'light') =>
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ addToCart: mockAddToCart }}>
          <ThemeContext.Provider value={{ theme }}>
            <Card id={product.id} image={product.image} title={product.title} price={product.price} />
          </ThemeContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>
    );

  it('displays product title, image, and price', () => {
    renderComponent();
    const titleElement = screen.getByText('Test Product Title');
    const priceElement = screen.getByText('$29.99');
    const imageElement = screen.getByAltText('Test Product Title');
    
    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', product.image);
  });

  it('truncates long product titles', () => {
    const longTitle = 'This is a very long product title that exceeds 20 characters';
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ addToCart: mockAddToCart }}>
          <ThemeContext.Provider value={{ theme: 'light' }}>
            <Card id={product.id} image={product.image} title={longTitle} price={product.price} />
          </ThemeContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>
    );
    // Recherchez directement le texte tronqué attendu
    const truncatedTitle = screen.getByText('This is a very long ...');
    expect(truncatedTitle).toBeInTheDocument();
  });

  it('calls addToCart function when Add to Cart button is clicked', () => {
    renderComponent();
    const button = screen.getByRole('button', { name: /add item to cart/i });
    fireEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledWith(product);
  });

  it('links to the ProductCard page with the correct ID', () => {
    renderComponent();
    const linkElement = screen.getByRole('link', { name: /test product title/i });
    expect(linkElement).toHaveAttribute('href', `/ProductCard/${product.id}`);
  });
});
