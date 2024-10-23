// components/Header.js
import './Header.css';

const Header = () => {
  return (
    <header role="banner" className="header">
      <nav className="nav">
        <h1 className="header-title">대여 공간 홍보 홈페이지</h1>
        <button className="nav-toggle" aria-label="Toggle navigation menu">☰</button>
        <ul className="nav-list">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#gallery" className="nav-link">Gallery</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;