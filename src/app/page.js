"use client";
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import MessageSection from '../components/MessageSection';

export default function Home() {
  const [showHero, setShowHero] = useState(true);

  return (
    <>
      <Header />
      <main className="main-content">
        {showHero && <HeroSection />}
        <AboutSection setShowHero={setShowHero} />
        <GallerySection />
        <MessageSection/>
      </main>
      <Footer />
    </>
  );
}
