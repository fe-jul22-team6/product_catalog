import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/';
import './App.scss';

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>

      {location.pathname !== '/menu' && <Footer />}
    </>
  );
};
