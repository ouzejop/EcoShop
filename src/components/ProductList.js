import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card"; // Import du composant Card
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]); // Initialiser un état pour stocker les produits
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer les données de l'API FakeStore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Mettre à jour l'état avec les produits récupérés
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Afficher un message de chargement pendant la récupération des données
  if (loading) {
    return <p>Chargement des produits...</p>;
  }

  return (
    <StyledGrid>
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
        
      ))}
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }


`;

export default ProductList;
