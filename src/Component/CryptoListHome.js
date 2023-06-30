import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Cryptolist from './CryptoList';
import CryptoDetailList from './CryptoDetailsList';
import styles from './CryptoListHome.module.css';

const CryptoListHome = () => (
  <>

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

        {' '}
        <div className={styles.incocontainer}>
          <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/20/ffffff/microphone.png" alt="microphone" />
          <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/20/ffffff/gear.png" alt="gear" />
        </div>
      </div>
    </header>
    <Router>
      <Routes>
        <Route path="/" element={<Cryptolist />} />
        <Route path="/crypto-details/:exchangeId" element={<CryptoDetailList />} />
      </Routes>
    </Router>
  </>
);
export default CryptoListHome;
