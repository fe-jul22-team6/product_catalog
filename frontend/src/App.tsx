import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <div className={styles.section}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>

      {location.pathname !== '/menu' && <Footer />}
    </>
  );
};
