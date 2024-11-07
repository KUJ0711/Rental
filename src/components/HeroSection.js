// components/HeroSection.js
"use client";
import './HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="hero-section"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="hero-content">
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          당신의 이야기를 빛나게 할<br />준비가 되었습니다.
        </motion.h2>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          이제 당신의 마법을 보여줄 차례!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
