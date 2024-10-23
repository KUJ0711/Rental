import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
