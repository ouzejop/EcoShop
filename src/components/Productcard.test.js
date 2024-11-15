import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Productcard from './Productcard';

// Mock du composant Loader
jest.mock('./Loader', () => () => <div data-testid="loader">Loading...</div>);

// Mock du hook useParams pour contrôler l'ID du produit
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }), // Utilisation d'un ID mocké pour les tests
}));

describe('Productcard Component', () => {
  const mockAddToCart = jest.fn();

  const mockCartContext = {
    addToCart: mockAddToCart,
  };

  beforeEach(() => {
    global.fetch = jest.fn();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('affiche le loader pendant le chargement', () => {
    // Mock du fetch pour simuler le chargement
    fetch.mockImplementation(() => new Promise(resolve => {}));

    render(
      <CartContext.Provider value={mockCartContext}>
        <Router>
          <Productcard />
        </Router>
      </CartContext.Provider>
    );

    // Vérifie que le loader est affiché
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('affiche correctement les informations du produit après la récupération des données', async () => {
    // Données mockées pour le produit
    const mockProduct = {
      id: 1,
      image: 'image.jpg',
      title: 'Test Product',
      price: '20.99',
    };

    // Mock du fetch pour retourner les données du produit mocké
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    render(
      <CartContext.Provider value={mockCartContext}>
        <Router>
          <Productcard />
        </Router>
      </CartContext.Provider>
    );

    // Attendre que le produit soit affiché
    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('$20.99')).toBeInTheDocument();
      const image = screen.getByAltText('Test Product');
      expect(image).toHaveAttribute('src', 'image.jpg');
    });

    // Vérifie que le loader n'est plus affiché
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });

  test('affiche un message d\'erreur si le produit n\'est pas trouvé', async () => {
    // Mock du fetch pour simuler une erreur de récupération
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    render(
      <CartContext.Provider value={mockCartContext}>
        <Router>
          <Productcard />
        </Router>
      </CartContext.Provider>
    );

    // Attendre que le message d'erreur soit affiché
    await waitFor(() => {
      expect(screen.getByText('Produit introuvable.')).toBeInTheDocument();
    });

    // Vérifie que le loader n'est plus affiché
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });

  test('ajoute le produit au panier lorsque le bouton "Add to Cart" est cliqué', async () => {
    // Données mockées pour le produit
    const mockProduct = {
      id: 1,
      image: 'image.jpg',
      title: 'Test Product',
      price: '20.99',
    };

    // Mock du fetch pour retourner les données du produit mocké
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    render(
      <CartContext.Provider value={mockCartContext}>
        <Router>
          <Productcard />
        </Router>
      </CartContext.Provider>
    );

    // Attendre que le produit soit affiché
    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    // Clic sur le bouton "Add to Cart"
    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    // Vérification que la fonction addToCart est appelée avec les bons arguments
    expect(mockAddToCart).toHaveBeenCalledWith({
      id: 1,
      title: 'Test Product',
      price: '20.99',
      image: 'image.jpg',
    });
  });
});
beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  
  afterAll(() => {
    console.log.mockRestore();
    console.error.mockRestore();
  });
  