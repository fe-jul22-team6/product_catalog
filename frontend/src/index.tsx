import ReactDOM from 'react-dom';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import PhonesPage from './components/PhonesPage';
import PageNotFound from './components/PageNotFound';
import Menu from './components/Menu';
import CartItem from './components/CartPage';
import { App } from './App';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Homepage</h1>} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
