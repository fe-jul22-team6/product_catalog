import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Footer } from './Footer/Footer';
import './App.scss';
import './utils/container.scss';

export const App: React.FC = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>

    <Footer />
  </>
);
