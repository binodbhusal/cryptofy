import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Cryptolist from './CryptoList';
import CryptoDetailList from './CryptoDetailsList';
import styles from './CryptoListHome.module.css';
import About from './About';
import Footer from './Footer';
import ContactForm from './ContactForm';

const CryptoListHome = () => (
  <Router>

    <header className={styles.header}>
      {' '}
      <div>

        <a href="/" style={{ textDecoration: 'none' }}>
          {' '}
          <img width="40" height="40" src="https://img.icons8.com/color/48/000000/blockchain-new-logo.png" alt="blockchain-new-logo" />
          {' '}
          {' '}
          <span className={styles.cryptofy}>CRYPTOFY</span>

        </a>
        <div className={styles.aboutlink} style={{ textDecoration: 'none' }}>
          <Link to="/about" style={{ textDecoration: 'none' }}>About </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
        </div>

        <div className={styles.incocontainer}>

          <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/20/ffffff/microphone.png" alt="microphone" />
          <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/20/ffffff/gear.png" alt="gear" />
        </div>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Cryptolist />} />
      <Route path="/crypto-details/:exchangeId" element={<CryptoDetailList />} />
      <Route path="/about/" element={<About />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
    <Footer />
  </Router>
);
export default CryptoListHome;
