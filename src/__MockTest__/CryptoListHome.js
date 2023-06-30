import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cryptolist from './CryptoList';
import CryptoDetailList from './CryptoDetailsList';

const CryptoListHome = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Cryptolist />} />
      <Route path="/crypto-details/:exchangeId" element={<CryptoDetailList />} />
    </Routes>
  </Router>
);
export default CryptoListHome;
