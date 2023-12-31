import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoItem from './CryptoItem';
import { fetchCryptoData } from '../Redux/CryptoSlice';
import FilterInput from '../Component/FilterInput';

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

  const filteredCryptos = cryptos.filter((crypto) => {
    const cryptoName = crypto.name.toLowerCase();
    const filterText = filter.toLowerCase();
    return cryptoName.includes(filterText);
  });

  return (
    <>
      <form>
        <FilterInput filter={filter} onChange={handleFilterChange} />
      </form>
      <ul>
        {filteredCryptos.map((crypto) => (
          <CryptoItem key={crypto.exchangeId} cryptoData={crypto} />
        ))}
      </ul>
    </>
  );
};

export default Cryptolist;
