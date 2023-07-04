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
  const [visibleItems, setVisibleItems] = useState(15);

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
  const filteredCryptos = cryptos.filter((crypto) => {
    const cryptoName = crypto.name.toLowerCase();
    const filterText = filter.toLowerCase();
    return cryptoName.includes(filterText);
  }).slice(0, visibleItems);
  return (
    <>
      <form>
        <FilterInput filter={filter} onChange={handleFilterChange} />
      </form>
      <div className={styles.cards}>
        {filteredCryptos.map((crypto) => (
          <CryptoItem key={crypto.exchangeId} cryptoData={crypto} />

        ))}
        {filteredCryptos.length < cryptos.length && (
          <button className={styles.loadMoreBtn} type="button" onClick={() => setVisibleItems(visibleItems + 15)}>Load More</button>
        )}
      </div>
    </>
  );
};

export default Cryptolist;
