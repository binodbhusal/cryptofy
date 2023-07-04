import { useNavigate } from 'react-router-dom';
import styles from './About.module.css';

const BackBtn = () => {
  const navigate = useNavigate();
  const handleBackHomeClick = () => {
    navigate('/');
  };
  return (
    <button type="button" onClick={handleBackHomeClick} className={styles.backBtn}>
      <img width="35" height="35" src="https://img.icons8.com/ios/40/ffffff/less-than.png" alt="less-than" />

    </button>
  );
};
export default BackBtn;
