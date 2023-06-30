import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CryptoItem = ({ cryptoData }) => {
  const navigate = useNavigate();
  const {
    name, rank, volumeUsd, exchangeUrl, exchangeId,
  } = cryptoData;
  parseInt(cryptoData.rank, 10);

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
    <li>
      <img src={faviconUrl} alt={`${name} favicon`} />
      <p>{name}</p>
      <p>{rank}</p>
      <p>
        $
        {' '}
        {formatdVolumeUsd}
      </p>
      <button type="button" onClick={handleExpandClick}>
        Expand
      </button>
    </li>
  );
};

CryptoItem.propTypes = {
  cryptoData: PropTypes.shape({
    name: PropTypes.string,
    rank: PropTypes.number,
    exchangeUrl: PropTypes.string,
    volumeUsd: PropTypes.string,
    exchangeId: PropTypes.string,
    expanded: PropTypes.string,
  }).isRequired,
};

export default CryptoItem;
