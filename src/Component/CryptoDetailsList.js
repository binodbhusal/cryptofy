import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCryptoData } from '../Redux/CryptoSlice';
import CryptoDetail from './CryptoDetails';

const CryptoDetailList = () => {
  const dispatch = useDispatch();
  const { cryptos, isLoading, isError } = useSelector((store) => store.crypto);
  const { exchangeId } = useParams();
  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  const selectedCrypto = cryptos.find((crypto) => crypto.exchangeId === exchangeId);
  if (!selectedCrypto) {
    return <p>No data available</p>;
  }
  return (
    <>
      {selectedCrypto && (

      <ul>

        <CryptoDetail key={selectedCrypto.exchangeId} cryptoData={selectedCrypto} />

      </ul>
      )}
    </>
  );
};

export default CryptoDetailList;
