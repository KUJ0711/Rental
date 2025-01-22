import React from 'react';
import './Kakao.css'; // CSS 파일 참조

const FloatingKakaoButton = () => {
  const handleRedirect = () => {
    window.location.href = 'http://pf.kakao.com/_HxmXxbn'; // 카카오톡 채널 ID 수정
  };

  return (
    <button className="floatingBtn" onClick={handleRedirect}>
      <img src="/images/asset/kakao.png" alt="Kakao Icon" className="icon" />
    </button>
  );
};

export default FloatingKakaoButton;
