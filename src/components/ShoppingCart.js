import React, { useContext } from 'react';
import './ShoppingCart.css';
import { CartContext } from '../context/CartContext.js';
import ProductCart from './ProductCart.js';
import ConfirmCartBoutton from './ConfirmCartBoutton.js';
import { Link } from 'react-router-dom';
import Cart from '../Pages/Cart.js';

const ShoppingCart = ({ toggleCart }) => {
  const { cartItems } = useContext(CartContext);

  // Calculer le total en tenant compte de la quantité
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = item.quantity || 1;
    return total + itemPrice * itemQuantity;
  }, 0);

  return (
    <div className="wrap cf">
      <button className='croix' onClick={toggleCart}>x</button>
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
      <div className="total">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
      <div className='confirmCart'>
        <Link to="/Cart">
          <ConfirmCartBoutton />
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
