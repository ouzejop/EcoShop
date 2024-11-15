import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './ProductList';

// Mock des composants Card et Loader
jest.mock('./Card', () => ({ id, image, title, price }) => (
  <div data-testid="card">
    <p>{title}</p>
    <p>{price}</p>
  </div>
));

jest.mock('./Loader', () => () => <div data-testid="loader">Loading...</div>);

describe('ProductList Component', () => {
  // Mock de la méthode fetch pour contrôler les réponses de l'API
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('affiche le loader pendant le chargement', async () => {
    // Mock du fetch pour simuler le temps de chargement
    fetch.mockImplementation(() => new Promise(resolve => {}));

    render(<ProductList />);

    // Vérifie que le loader est affiché
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('affiche les produits après la récupération des données', async () => {
    // Données mockées de l'API
    const mockProducts = [
      { id: 1, image: 'image1.jpg', title: 'Product 1', price: '10.50' },
      { id: 2, image: 'image2.jpg', title: 'Product 2', price: '20.00' },
    ];

    // Mock du fetch pour retourner les produits mockés
    fetch.mockResolvedValueOnce({
      json: async () => mockProducts,
    });

    render(<ProductList />);

    // Attendre que les produits soient affichés
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('10.50')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
      expect(screen.getByText('20.00')).toBeInTheDocument();
    });

    // Vérifie que le loader n'est plus affiché
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });

  test('affiche un message d\'erreur en cas de problème lors de la récupération des données', async () => {
    // Mock du fetch pour simuler une erreur
    fetch.mockRejectedValueOnce(new Error('Erreur de récupération'));

    // Mock de la console pour éviter d'afficher les erreurs pendant les tests
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<ProductList />);

    // Attendre que le loader disparaisse après l'erreur
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    // Vérifier que la console a enregistré une erreur
    expect(consoleErrorMock).toHaveBeenCalledWith('Erreur lors de la récupération des produits :', expect.any(Error));

    // Nettoyage du mock de la console
    consoleErrorMock.mockRestore();
  });
});
