import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CryptoItem from './CryptoItem';
import { fetchCryptoData } from '../Redux/CryptoSlice';
import FilterInput from './FilterInput';

import styles from './CryptoList.module.css';

const Cryptolist = () => {
  const dispatch = useDispatch();
  const { cryptos, isLoading, isError } = useSelector((store) => store.crypto);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  // eslint-disable-next-line max-len
  const filteredCryptos = cryptos.filter((crypto) => crypto.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>

      <form>
        <FilterInput filter={filter} onChange={handleFilterChange} />
      </form>
      <div className={styles.cards}>
        {filteredCryptos.map((crypto) => (
        // eslint-disable-next-line react/no-array-index-key

          <CryptoItem key={crypto.exchangeId} cryptoData={crypto} />

        ))}
      </div>
    </>
  );
};

export default Cryptolist;
