import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import Loader from "./Loader";

const Productcard = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Ajout d'un état de chargement

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`Fetching product with ID: ${id}`); // Debug ID
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        console.log("Product data:", data); // Debug données
        setProduct(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du produit :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0.8)", // pour un effet de surimpression
          zIndex: 1000,
        }}
      >
        <Loader />
      </div>
    );
  }
  

  if (!product) return <p>Produit introuvable.</p>;

  return (
    <StyledProductCard>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </StyledProductCard>
  );
};

const StyledProductCard = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .product-image {
    max-width: 100%;
    height: auto;
  }
  .product-info {
    margin: 10px 0;
    .product-title {
      font-size: 1.2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px; /* Limiter la largeur du titre */
    }
    .product-price {
      font-size: 1rem;
      color: #555;
    }
  }
  .add-to-cart-button {
    padding: 10px 20px;
    background-color: #5a9;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export default Productcard;
