import React, { useState, useContext } from "react";
import "./ProductCart.css";
import InputNumber from './InputNumber';
import Trash from './Trash';
import { CartContext } from '../context/CartContext';  // Importer le contexte

function ProductCart({ image, title, price, index }) {
  const { removeFromCart, updateItemQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Quantité par défaut à 1

  const truncatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;

  const handleRemove = () => {
    removeFromCart(index);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    updateItemQuantity(index, newQuantity); // Mise à jour de la quantité dans le contexte
  };

  // Assurez-vous que price est bien un nombre en utilisant parseFloat et une valeur par défaut
  const parsedPrice = parseFloat(price) || 0;
  const totalPrice = (parsedPrice * quantity).toFixed(2);

  return (
    <div className='productCart'>
      <img src={image} className='imageCart' alt={truncatedTitle} />
      <div className='description'>
        <h3>{truncatedTitle}</h3>
        <p>${totalPrice}</p> {/* Affichage du prix total par quantité */}
      </div>
      <div className='nombre'>
        <InputNumber value={quantity} onChange={handleQuantityChange} /> {/* Passage de la quantité */}
      </div>
      <div className='Poubelle'>
        <Trash handleRemove={handleRemove} />
      </div>
    </div>
  );
}

export default ProductCart;
