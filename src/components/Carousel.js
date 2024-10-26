import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.65,  // Montre 3 images à la fois par défaut
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <button className="slick-next">→</button>,
    prevArrow: <button className="slick-prev">←</button>,
    
    // Ajout de la propriété responsive pour les petits écrans
    responsive: [
      {
        breakpoint: 768, // Pour les écrans en dessous de 768px de largeur
        settings: {
          slidesToShow: 1,  // Afficher une seule image sur les petits écrans
          centerMode: false, // Désactiver le mode centré sur petits écrans
          centerPadding: '0', // Aucune marge
        }
      }
    ]
  };
  

  const images = [
    { 
      src: image1, 
      alt: 'Image 1', 
      title: 'EcoShop', 
      description: 'Votre boutique,<br/> Tous vos produits<br/>bio', 
      
    },
    { 
      src: image2, 
      alt: 'Image 2', 
      title: '', 
      description: '',
      buttonText: '',
      buttonLink: '#'
    },
    { 
      src: image3, 
      alt: 'Image 3', 
      title: '', 
      description: '',
      buttonText: '',
      buttonLink: '#'
    },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <div className="carousel-content">
              <h2 className="carousel-title">{image.title}</h2>
              <p 
                className="carousel-description" 
                dangerouslySetInnerHTML={{ __html: image.description }} 
              />
              <a href={image.buttonLink} className="carousel-button">{image.buttonText}</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
