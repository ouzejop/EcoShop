import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import image1 from '../Assets/image1.jpeg';
import image2 from '../Assets/image2.jpeg';
import image3 from '../Assets/image3.jpeg';

// Flèche personnalisée pour le bouton suivant
const NextArrow = ({ onClick }) => (
  <button className="slick-next" onClick={onClick}>→</button>
);

// Flèche personnalisée pour le bouton précédent
const PrevArrow = ({ onClick }) => (
  <button className="slick-prev" onClick={onClick}>←</button>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.65,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0',
        }
      }
    ]
  };

  const images = [
    { src: image1, alt: 'Image 1', title: '', description: '' },
    { src: image2, alt: 'Image 2', title: '', description: '' },
    { src: image3, alt: 'Image 3', title: '', description: '' },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <div className="carousel-content">
              <h2 className="carousel-title">{image.title}</h2>
              <p className="carousel-description" dangerouslySetInnerHTML={{ __html: image.description }} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
