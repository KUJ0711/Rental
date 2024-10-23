// components/GallerySection.js
"use client";

import { useState } from 'react';
import './GallerySection.css';

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">갤러리</h2>
      <div className="gallery-container">
        <div className="gallery-overlay gallery-overlay-left" onClick={goToPrevious}></div>
        <div className="gallery-overlay gallery-overlay-right" onClick={goToNext}></div>
        <div className="gallery-image-wrapper">
          <img
            src={images[currentIndex]}
            alt={`갤러리 이미지 ${currentIndex + 1}`}
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
