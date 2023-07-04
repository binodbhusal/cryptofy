/* eslint-disable react/jsx-wrap-multilines */
import { useState, useEffect } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const Loading = () => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      { isLoading
        ? <FadeLoader
            color="#ffd93d"
            loading={isLoading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
            style={{ position: 'Absolute', top: '50%', left: '50%' }}
        /> : null}
    </>
  );
};

export default Loading;
