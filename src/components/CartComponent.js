import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext.js';
import { ThemeContext } from '../context/ThemeContext.js'; // Importer le ThemeContext
import ProductCart from './ProductCart.js';

const ShoppingCart = ({ toggleCart }) => {
  const { cartItems } = useContext(CartContext);
  const { theme } = useContext(ThemeContext); // Récupérer le thème actuel

  // Calculer le total en tenant compte de la quantité
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = item.quantity || 1;
    return total + itemPrice * itemQuantity;
  }, 0);

  return (
    <CartWrapper theme={theme}> {/* Appliquer le thème au conteneur */}
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <ProductCart 
            key={index}
            index={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))
      )}
      <TotalPrice theme={theme}>
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </TotalPrice>
    </CartWrapper>
  );
};

export default ShoppingCart;

// Styled components

const CartWrapper = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.background};  /* Utilise le fond du thème */
  color: ${({ theme }) => theme.color};                 /* Utilise la couleur de texte du thème */
  margin: 0 auto;
  max-width: 1200px;
  height: auto;
  position: relative;
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
  text-align: right;
  padding-top: 10px;
  color: ${({ theme }) => theme.color};                 /* Utilise la couleur de texte du thème */
`;
