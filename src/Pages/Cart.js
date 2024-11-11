// Cart.js
import React, { useContext } from "react";
import styled from "styled-components";
import CartComponent from "../components/CartComponent";
import Form from "../components/Form";
import { ThemeContext } from "../context/ThemeContext";

// Créer un conteneur stylé pour appliquer le thème
const CartWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Cart = () => {
  const { theme } = useContext(ThemeContext); // Récupérer le thème actuel

  return (
    <CartWrapper theme={theme}> {/* Appliquer le thème au conteneur */}
      <div>
        <CartComponent />
      </div>
      <div>
        <Form />
      </div>
    </CartWrapper>
  );
};

export default Cart;
