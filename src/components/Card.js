import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Card = ({ id, image, title, price }) => {
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const handleAddToCart = () => {
    const item = { id, image, title, price };
    addToCart(item);
  };

  // Troncature du titre si sa longueur dépasse 20 caractères
  const truncatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;

  return (
    <StyledWrapper theme={theme}>
      <div className="card">
        {/* Lien vers ProductCard avec l'image et le titre du produit */}
        <Link to={`/ProductCard/${id}`}>
          <div className="image">
            <img src={image} alt={truncatedTitle} className="image-content" />
          </div>
          <span className="title">{truncatedTitle}</span>
          <span className="price">${price}</span> {/* Affichage du prix avec le symbole $ */}
        </Link>
      </div>
      {/* Bouton Add to Cart en dehors du lien */}
      <button
        type="button"
        className="button"
        onClick={handleAddToCart}
        aria-label="Add item to cart"
      >
        <span className="button__text">Add to Cart</span>
        <span className="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="svg"
          >
            <line y2="19" y1="5" x2="12" x1="12" />
            <line y2="12" y1="12" x2="19" x1="5" />
          </svg>
        </span>
      </button>
    </StyledWrapper>

  );
};


const StyledWrapper = styled.div`
  .button {
    position: relative;
    width: 190px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #34974d;
    background-color: #3aa856;
  }
  
  .description {
    background-color: black ;
    color: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};

  }

  .button, .button__icon, .button__text {
    transition: all 0.3s;
  }

  .button .button__text {
    transform: translateX(30px);
    color: #fff;
    font-weight: 600;
  }

  .button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: #34974d;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button .svg {
    width: 30px;
    stroke: #fff;
  }

  .button:hover {
    background: #34974d;
  }

  .button:hover .button__text {
    color: transparent;
  }

  .button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }

  .button:active .button__icon {
    background-color: #2e8644;
  }

  .button:active {
    border: 1px solid #2e8644;
  }

  .card {
    position: relative;
    width: 11.875em;
    height: 16.5em;
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 120ms;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    padding: 0.5em;
    padding-bottom: 3.4em;
  }

  .card .title {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    position: absolute;
    left: 0.625em;
    bottom: 1.875em;
    text-overflow: ellipsis;
    font-weight: 400;
    color: ${({ theme }) => (theme === "dark" ? "#ddd" : "#000")};  }

  .card .price {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 0.9em;
    position: absolute;
    left: 0.625em;
    bottom: 0.625em;
    color: ${({ theme }) => (theme === "dark" ? "#ddd" : "#000")};
  }

  .card:hover::after {
    bottom: 0;
    opacity: 1;
  }

  .card:active {
    transform: scale(0.98);
  }

  .card:active::after {
    content: "Added !";
    height: 3.125em;
  }

  .text {
    max-width: 55px;
  }

  .image {
    background: rgb(241, 241, 241);
    width: 100px;
    height: 20px
    display: grid;
    place-items: center;
  }

  .image-content {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  @media (max-width: 468px) {
    .card {
      width: 10em;
      height: 13em;
    }
    .button {
      width: 150px;
      height: 35px;
    }
  }
`;

export default Card;
