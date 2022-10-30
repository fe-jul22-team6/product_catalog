import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './App.scss';

export const App: React.FC = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
