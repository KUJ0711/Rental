// components/HeroSection.js
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">특별한 공간을 대여하세요</h2>
        <p className="hero-description">당신의 특별한 순간을 위해 완벽한 공간을 제공합니다. 지금 예약하고 잊지 못할 경험을 만들어보세요.</p>
        <button className="hero-button">자세히 보기</button>
      </div>
    </section>
  );
};

export default HeroSection;
