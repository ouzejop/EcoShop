import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputNumber from './InputNumber';

describe('InputNumber Component', () => {
  let value;
  let handleChange;

  // Avant chaque test, initialiser la valeur et la fonction de gestion du changement
  beforeEach(() => {
    value = 5; // valeur de départ
    handleChange = jest.fn(newValue => {
      value = newValue; // simuler la mise à jour de la valeur
    });
  });

  test('affiche correctement la valeur initiale', () => {
    render(<InputNumber value={value} onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('5');
  });

  test('incrémente la valeur lorsque le bouton "+" est cliqué', () => {
    render(<InputNumber value={value} onChange={handleChange} />);
    
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);

    // Vérifie que la fonction onChange a été appelée avec la valeur incrémentée
    expect(handleChange).toHaveBeenCalledWith(6);
  });

  test('décrémente la valeur lorsque le bouton "–" est cliqué', () => {
    render(<InputNumber value={value} onChange={handleChange} />);

    const decrementButton = screen.getByText('–');
    fireEvent.click(decrementButton);

    // Vérifie que la fonction onChange a été appelée avec la valeur décrémentée
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  test('ne permet pas d\'incrémenter au-delà du maximum', () => {
    value = 10; // valeur initiale au maximum
    render(<InputNumber value={value} onChange={handleChange} />);

    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);

    // Vérifie que la fonction onChange n'a pas été appelée
    expect(handleChange).not.toHaveBeenCalled();
  });

  test('ne permet pas de décrémenter en dessous du minimum', () => {
    value = 0; // valeur initiale au minimum
    render(<InputNumber value={value} onChange={handleChange} />);

    const decrementButton = screen.getByText('–');
    fireEvent.click(decrementButton);

    // Vérifie que la fonction onChange n'a pas été appelée
    expect(handleChange).not.toHaveBeenCalled();
  });
});
