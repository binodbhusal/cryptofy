import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/store';
import CryptoListHome from './Component/CryptoListHome';

function App() {
  return (
    <>
      <Provider store={store}>
        <CryptoListHome />
      </Provider>
    </>
  );
}

export default App;
