import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CryptoDetail = ({ cryptoData }) => {
  const navigate = useNavigate();
  const {
    name, rank, volumeUsd, exchangeUrl, percentTotalVolume, tradingPairs, socket, updated,
  } = cryptoData;
  let faviconUrl = '';
  try {
    const domain = new URL(exchangeUrl).hostname;
    faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}`;
  } catch (error) {
    faviconUrl = 'error-favicon-url';
  }
  const formatdVolumeUsd = Number(volumeUsd).toFixed(2);
  const handleBackHomeClick = () => {
    navigate('/');
  };
  return (
    <li>
      <img src={faviconUrl} alt={`${name} favicon`} />
      <p>
        Name:
        {' '}
        {name}
      </p>
      <p>
        Rank:
        {' '}
        {rank}
      </p>
      <p>
        Trading volume percent:
        {percentTotalVolume}
      </p>
      <p>
        Trading Volume:
        {volumeUsd}
      </p>
      <p>
        Number of Trading pairs:
        {tradingPairs}
      </p>
      <p>
        Socket:
        {' '}
        {socket}
      </p>
      <p>
        Formated Volume:
        $
        {' '}
        {formatdVolumeUsd}
      </p>
      <p>
        Website:
        {exchangeUrl}
      </p>
      <p>
        Last Update
        {updated}
      </p>
      <button type="button" onClick={handleBackHomeClick}>Back</button>
    </li>
  );
};

CryptoDetail.propTypes = {
  cryptoData: PropTypes.shape({
    name: PropTypes.string,
    rank: PropTypes.string,
    exchangeUrl: PropTypes.string,
    volumeUsd: PropTypes.string,
    exchangeId: PropTypes.string,
    percentTotalVolume: PropTypes.string,
    tradingPairs: PropTypes.string,
    socket: PropTypes.string,
    updated: PropTypes.string,
  }).isRequired,
};

export default CryptoDetail;
