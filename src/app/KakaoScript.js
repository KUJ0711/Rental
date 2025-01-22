"use client"; // 클라이언트 컴포넌트로 설정
import Script from "next/script";

export default function KakaoScript() {
  const kakaoAppKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY; // 환경 변수에서 앱 키 가져오기

  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.min.js"
      strategy="lazyOnload"
      onLoad={() => {
        if (window.Kakao) {
          window.Kakao.init(kakaoAppKey); // 환경 변수로 초기화
          console.log("Kakao SDK initialized with app key:", kakaoAppKey);
        }
      }}
    />
  );
}
