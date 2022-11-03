import ReactDOM from 'react-dom';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import PhonesPage from './components/PhonesPage';
import PageNotFound from './components/PageNotFound';
import FavouritePage from './components/FavouritePage';
import Menu from './components/Menu';
import CartPage from './components/CartPage';
import ProductPage from './components/ProductPage';
import { App } from './App';
import './swiper.scss';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/phones">
          <Route index element={<PhonesPage />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/favorites" element={<FavouritePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
