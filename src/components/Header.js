// components/Header.js
"use client";
import './Header.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        <Link href="/">
          <motion.div
            className="nav-link header-title-link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
          >
            브링 더 매직
          </motion.div>
        </Link>

        <motion.ul
          className="nav-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <li>
            <Link href="/#about">
              <motion.div
                className="nav-link nav-link-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              >
                About
              </motion.div>
            </Link>
          </li>
          <li>
            <Link href="/#gallery">
              <motion.div
                className="nav-link nav-link-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              >
                Gallery
              </motion.div>
            </Link>
          </li>
          <li>
            <Link href="/#message">
              <motion.div
                className="nav-link nav-link-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              >
                Message
              </motion.div>
            </Link>
          </li>
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;
