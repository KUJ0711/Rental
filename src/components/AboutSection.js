// components/AboutSection.js
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">우리에 대해</h2>
      <p className="about-description">우리의 대여 공간은 편안하고 현대적인 분위기를 갖추고 있으며, 다양한 이벤트에 적합합니다. 우리는 고객의 필요에 맞춰 다양한 서비스를 제공합니다.</p>
      <ul className="about-features">
        <li>넓고 쾌적한 공간</li>
        <li>현대적인 인테리어</li>
        <li>최신 장비와 편의시설</li>
      </ul>
    </section>
  );
};

export default AboutSection;



