import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/store';
import CryptoListHome from './Component/CryptoListHome';
import Loading from './Component/Loading';

function App() {
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Provider store={store}>
        {
          isLoading ? (<Loading />)
            : (<CryptoListHome />)
        }

      </Provider>
    </>
  );
}

export default App;
