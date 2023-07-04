import React from 'react';
import PropTypes from 'prop-types';
import styles from './CryptoDetails.module.css';
import BackBtn from './BackBtn';

const CryptoDetail = ({ cryptoData }) => {
  const {
    name, rank, volumeUsd, exchangeUrl, percentTotalVolume, tradingPairs, updated,
  } = cryptoData;

  const formatdVolumeUsd = Number(volumeUsd).toFixed(2);
  const formatdpercentVolume = Number(percentTotalVolume).toFixed(2);
  const formatdPairVolume = Number(tradingPairs).toFixed(2);
  const formattedUpdated = new Date(updated).toLocaleDateString();

  return (
    <>
      <header className={styles.headname}>
        {' '}
        <BackBtn />
        <div className={styles.itemcontainer}>
          <h5>EXCHANGE DETAILS</h5>
          {' '}

        </div>

      </header>
      <header className={styles.headrmain}>

        <h4>
          {name}
          {' '}
          #
          {' '}
          {rank}
        </h4>
        {' '}
      </header>

      <li>
        <table cellPadding={6}>
          <tr>
            <td>
              Trading volume %:

            </td>
            <td>
              {formatdpercentVolume }
              {' '}
              %

            </td>

          </tr>
          <tr>
            <td>
              Trading Volume $:
            </td>
            <td>
              $
              {' '}
              {formatdVolumeUsd}

            </td>

          </tr>
          <tr>
            <td>
              Trading pairs:
            </td>
            <td className={styles.pDetails}>{formatdPairVolume}</td>

          </tr>
          <tr>
            <td className={styles.liText}>
              Last Update:
            </td>
            <td>{formattedUpdated}</td>
          </tr>
          <tr>
            <td>
              Website:

            </td>
            <td>
              <a href={exchangeUrl}>

                {exchangeUrl}
              </a>

            </td>
          </tr>
        </table>
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
