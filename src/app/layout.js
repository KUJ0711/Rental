import localFont from "next/font/local";
import "./globals.css";
import KakaoScript from "./KakaoScript"; // 클라이언트 컴포넌트 임포트

// 폰트 설정
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// 전역 메타데이터
export const metadata = {
  title: "My App",
  description: "Next.js App with Kakao SDK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <KakaoScript /> {/* 클라이언트 컴포넌트 추가 */}
        {children}
      </body>
    </html>
  );
}
