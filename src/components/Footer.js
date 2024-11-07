// components/Footer.js
import './Footer.css';
import Link from 'next/link'; // Link 컴포넌트 임포트

const Footer = () => {
  return (
    <footer className="footer"> 
      <div className="footer-content">
        <h2 className="footer-title">
          <Link href="/">
            브링 더 매직
          </Link>
        </h2>
        <p> Copyright &copy; 2024. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
