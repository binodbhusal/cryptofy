import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './CryptoDetails.module.css';

const CryptoDetail = ({ cryptoData }) => {
  const navigate = useNavigate();
  const {
    name, rank, volumeUsd, exchangeUrl, percentTotalVolume, tradingPairs, updated,
  } = cryptoData;

  const formatdVolumeUsd = Number(volumeUsd).toFixed(2);
  const formatdpercentVolume = Number(percentTotalVolume).toFixed(2);
  const formatdPairVolume = Number(tradingPairs).toFixed(2);
  const formattedUpdated = new Date(updated).toLocaleDateString();

  const handleBackHomeClick = () => {
    navigate('/');
  };
  return (
    <>
      <header className={styles.headname}>
        <button type="button" onClick={handleBackHomeClick} className={styles.backBtn}>
          <img width="35" height="35" src="https://img.icons8.com/ios/40/ffffff/less-than.png" alt="less-than" />
        </button>
        <div className={styles.itemcontainer}>
          <h4>
            {name}
            {' '}
            #
            {' '}
            {rank}
          </h4>
          {' '}

        </div>

      </header>
      <header className={styles.headrmain}>
        <h5>DETAILS</h5>
        {' '}
      </header>

      <li>
        <p className={styles.liText}>
          Trading volume %:
          {' '}
          {formatdpercentVolume }
        </p>
        <p className={styles.liText}>
          Trading Volume:
          $
          {' '}
          {formatdVolumeUsd}
        </p>
        <p className={styles.liText}>
          Number of Trading pairs:
          {' '}
          {formatdPairVolume}
        </p>
        <p className={styles.liText}>
          Last Update:
          {' '}
          {formattedUpdated}
        </p>
        <p className={styles.liText}>
          Website:
          <a href={exchangeUrl}>
            {' '}
            {exchangeUrl}
          </a>

        </p>
      </li>
    </>
  );
};

CryptoDetail.propTypes = {
  cryptoData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    exchangeUrl: PropTypes.string.isRequired,
    volumeUsd: PropTypes.string.isRequired,
    exchangeId: PropTypes.string.isRequired,
    percentTotalVolume: PropTypes.string.isRequired,
    tradingPairs: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
  }).isRequired,
};

export default CryptoDetail;
