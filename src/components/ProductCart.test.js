import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCart from './ProductCart';
import { CartContext } from '../context/CartContext';

// Mock des composants InputNumber et Trash
jest.mock('./InputNumber', () => ({ value, onChange }) => (
  <input
    type="number"
    data-testid="input-number"
    value={value}
    onChange={(e) => onChange(parseInt(e.target.value))}
  />
));

jest.mock('./Trash', () => ({ handleRemove }) => (
  <button data-testid="trash-button" onClick={handleRemove}>
    Remove
  </button>
));

describe('ProductCart Component', () => {
  const mockRemoveFromCart = jest.fn();
  const mockUpdateItemQuantity = jest.fn();

  const mockCartContext = {
    removeFromCart: mockRemoveFromCart,
    updateItemQuantity: mockUpdateItemQuantity,
  };

  const productProps = {
    image: 'image.jpg',
    title: 'Test Product',
    price: '15.99',
    index: 0,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('affiche correctement les informations du produit', () => {
    render(
      <CartContext.Provider value={mockCartContext}>
        <ProductCart {...productProps} />
      </CartContext.Provider>
    );

    // Vérification de l'image
    const image = screen.getByAltText('Test Product');
    expect(image).toHaveAttribute('src', 'image.jpg');

    // Vérification du titre
    expect(screen.getByText('Test Product')).toBeInTheDocument();

    // Vérification du prix initial
    expect(screen.getByText('$15.99')).toBeInTheDocument();
  });

  test('met à jour la quantité et le prix total lors du changement de quantité', () => {
    render(
      <CartContext.Provider value={mockCartContext}>
        <ProductCart {...productProps} />
      </CartContext.Provider>
    );

    const input = screen.getByTestId('input-number');
    fireEvent.change(input, { target: { value: '3' } });

    // Vérification que la quantité est mise à jour
    expect(input).toHaveValue(3);

    // Vérification que le prix total est mis à jour
    expect(screen.getByText('$47.97')).toBeInTheDocument();

    // Vérification que la fonction updateItemQuantity est appelée avec les bons arguments
    expect(mockUpdateItemQuantity).toHaveBeenCalledWith(0, 3);
  });

  test('supprime le produit lorsque l\'icône de la poubelle est cliquée', () => {
    render(
      <CartContext.Provider value={mockCartContext}>
        <ProductCart {...productProps} />
      </CartContext.Provider>
    );

    const removeButton = screen.getByTestId('trash-button');
    fireEvent.click(removeButton);

    // Vérification que la fonction removeFromCart est appelée avec l'index correct
    expect(mockRemoveFromCart).toHaveBeenCalledWith(0);
  });


});
