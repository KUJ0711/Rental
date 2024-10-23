// components/ContactSection.js
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">문의하기</h2>
      <form className="contact-form">
        <label htmlFor="name" className="contact-label">이름</label>
        <input type="text" id="name" className="contact-input" placeholder="이름을 입력하세요" />
        <label htmlFor="email" className="contact-label">이메일</label>
        <input type="email" id="email" className="contact-input" placeholder="이메일을 입력하세요" />
        <label htmlFor="message" className="contact-label">메시지</label>
        <textarea id="message" className="contact-textarea" placeholder="메시지를 입력하세요"></textarea>
        <button type="submit" className="contact-button">보내기</button>
      </form>
      <div className="contact-info">
        <p>전화: 010-0000-0000</p>
        <p>이메일: abc@gmail.com</p>
        <p>주소: 충청남도 천안시 동남구 </p>
      </div>
    </section>
  );
};

export default ContactSection;
