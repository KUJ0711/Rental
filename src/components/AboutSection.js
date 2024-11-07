// components/AboutSection.js
"use client";
import './AboutSection.css';
import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AboutSection = ({ setShowHero }) => {
  const [isVisible, setIsVisible] = useState({
    computer: false,
    peripherals: false,
    software: false,
    training: false,
    monitoring: false,
    resources: false,
  });

  const toggleVisibility = (section) => {
    setIsVisible((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === section ? !prevState[key] : false;
        return acc;
      }, {});
      return newState;
    });
  };

  const allClosed = useMemo(() => Object.values(isVisible).every((value) => value === false), [isVisible]);

  useEffect(() => {
    setShowHero(allClosed);
  }, [allClosed, setShowHero]);

  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.h2
        className="about-title"
        onClick={() => toggleVisibility('computer')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        aria-expanded={isVisible.computer}
      >
        최신 사양의 컴퓨터 제공
      </motion.h2>
      {isVisible.computer && (
        <motion.ul
          className="about-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          role="list"
        >
          <li>CPU: Intel(R) Core(TM) i7-14700K</li>
          <li>그래픽카드: NVIDIA GeForce RTX 4070 SUPER</li>
          <li>메모리: TeamGroup T-Force DDR5-5600 CL36 DELTA RGV 화이트 32GB</li>
          <li>144Hz 지원 듀얼 모니터</li>
          <li>메인보드: Z790 AORUS ELITE Gigabyte Technology</li>
          <li>쿨러: VALKYRIE GL360 ARGB 수냉 CPU 쿨러</li>
          <li>파워: 마이크로닉스 CLASSIC 2 850W</li>
        </motion.ul>
      )}

      <motion.h2
        className="about-title"
        onClick={() => toggleVisibility('peripherals')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        aria-expanded={isVisible.peripherals}
      >
        다양한 주변기기 제공
      </motion.h2>
      {isVisible.peripherals && (
        <motion.ul
          className="about-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          role="list"
        >
          <li>뮤지쿠스 방음부스 1760 x 2040(특대형) (230만원)</li>
          <li>Scarlett 4세대 오디오 인터페이스 2i2 + Scarlett 컨덴서 마이크 (50만원)</li>
          <li>보스 QC 울트라 헤드폰 - 다이아몬드 60주년 에디션 (50만원)</li>
          <li>로지텍 G102 마우스</li>
          <li>MIDI 연결 가능한 키보드(피아노)</li>
        </motion.ul>
      )}

      <motion.h2
        className="about-title"
        onClick={() => toggleVisibility('software')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        aria-expanded={isVisible.software}
      >
        다양한 컴퓨터 프로그램 제공
      </motion.h2>
      {isVisible.software && (
        <motion.ul
          className="about-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          role="list"
        >
          <li>Ableton Live 12 Suite (DAW: 작곡, 믹싱, 마스터링) (100만원)</li>
          <li>Melodyne 5 assistant (보컬 튜닝) ($250)</li>
          <li>Clarity Vx Pro (AI 소음제거 플러그인) ($249)</li>
          <li>VTube Studio (버튜버 얼굴인식)</li>
          <li>OBS (방송 송출)</li>
          <li>DaVinci Resolve (동영상 편집)</li>
          <li>Chat GPT 유료버전 (AI 검색툴)</li>
        </motion.ul>
      )}

      <motion.h2
        className="about-title"
        onClick={() => toggleVisibility('training')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        aria-expanded={isVisible.training}
      >
        간단한 교육 및 공유 가능
      </motion.h2>
      {isVisible.training && (
        <motion.ul
          className="about-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          role="list"
        >
          <li>Ableton Live 12 (컴프레서, 리미터, EQ 등등)</li>
          <li>Melodyne 5</li>
          <li>방송환경 세팅 (OBS 설정, 플러그인 연결, DAW 연결)</li>
          <li>인터넷 방송에 대해</li>
        </motion.ul>
      )}

      <motion.h2
        className="about-title"
        onClick={() => toggleVisibility('monitoring')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        aria-expanded={isVisible.monitoring}
      >
        방송 모니터링 및 피드백
      </motion.h2>
      {isVisible.monitoring && (
        <motion.ul
          className="about-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          role="list"
        >
          <li>방송 품질 모니터링 및 개선 피드백 제공</li>
        </motion.ul>
      )}

      <motion.h2
        className="about-title"
        onClick={() => toggleVisibility('resources')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        aria-expanded={isVisible.resources}
      >
        각종 자료 제공
      </motion.h2>
      {isVisible.resources && (
        <motion.ul
          className="about-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          role="list"
        >
          <li>다양한 교육 자료 및 참고 자료 제공</li>
        </motion.ul>
      )}
    </motion.section>
  );
};

AboutSection.propTypes = {
  setShowHero: PropTypes.func.isRequired,
};

export default AboutSection;
