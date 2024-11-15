import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from './Carousel';

jest.mock('../Assets/image1.jpeg', () => 'image1.jpeg');
jest.mock('../Assets/image2.jpeg', () => 'image2.jpeg');
jest.mock('../Assets/image3.jpeg', () => 'image3.jpeg');

jest.mock('react-slick', () => {
  const Slider = ({ children }) => <div>{children}</div>;
  return Slider;
});

describe('Carousel Component', () => {
  it('renders images with correct alt text', () => {
    render(<Carousel />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
  });




});
