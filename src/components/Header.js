// components/Header.js
"use client";
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      role="banner"
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <nav className="nav">
        <motion.a
          href="/"
          className="nav-link header-title-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
        >
          브링 더 매직
        </motion.a>

        <motion.ul
          className="nav-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <li>
            <motion.a
              href="#about"
              className="nav-link nav-link-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#gallery"
              className="nav-link nav-link-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            >
              Gallery
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#message-section-unique"
              className="nav-link nav-link-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            >
              Message
            </motion.a>
          </li>
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;
