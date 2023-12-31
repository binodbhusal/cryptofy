import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import styles from './CryptoItem.module.css';

const CryptoItem = ({ cryptoData }) => {
  const navigate = useNavigate();
  const {
    name, rank, volumeUsd, exchangeUrl, exchangeId,
  } = cryptoData;
  let faviconUrl = '';
  try {
    const domain = new URL(exchangeUrl).hostname;
    faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}`;
  } catch (error) {
    faviconUrl = 'error-favicon-url';
  }
  const formatdVolumeUsd = Number(volumeUsd).toFixed(2);
  const handleExpandClick = () => {
    navigate(`/crypto-details/${exchangeId}`);
  };

  return (
    <div className={styles.card}>
      {' '}
      <img src={faviconUrl} alt={`${name}`} style={{ width: '20%', padding: '0 8px', marginTop: '10%' }} />
      <button type="button" onClick={handleExpandClick} className={styles.expandBtn}>
        <BsArrowRightCircle className={styles.arrowCircle} />
        {' '}
      </button>
      <div className={styles.content}>
        <h5>{name}</h5>
        <p>
          Rank: #
          {' '}
          {rank}
        </p>
        <p>
          $
          {' '}
          {formatdVolumeUsd}
        </p>
        {' '}

      </div>
    </div>
  );
};

CryptoItem.propTypes = {
  cryptoData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    exchangeUrl: PropTypes.string.isRequired,
    volumeUsd: PropTypes.string.isRequired,
    exchangeId: PropTypes.string.isRequired,
  }).isRequired,
};

export default CryptoItem;
