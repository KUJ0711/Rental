// components/GallerySection.js
"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './GallerySection.css';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
  '/images/12.jpg'
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: window.innerWidth > 768 ? 0.2 : 0.1,
        rootMargin: window.innerWidth > 768 ? '0px 0px -100px 0px' : '0px 0px -50px 0px'
      }
    );
  
    if (currentSection) {
      observer.observe(currentSection);
    }
  
    return () => {
      if (observer && currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <motion.section
      id="gallery"
      className={`gallery-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className="gallery-title">갤러리</h2>
      <div className="gallery-container">
        <div className="gallery-overlay gallery-overlay-left" onClick={goToPrevious}></div>
        <div className="gallery-overlay gallery-overlay-right" onClick={goToNext}></div>
        <motion.div
          className="gallery-image-wrapper"
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
          transition={{ duration: 0.5 }}>
          <img
            src={images[currentIndex]}
            alt={`갤러리 이미지 ${currentIndex + 1}`}
            className="gallery-image"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GallerySection;
