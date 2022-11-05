import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer/';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { PageNotFound } from './components/PageNotFound';
import { FavouritePage } from './components/FavouritePage';
import { Menu } from './components/Menu';
import { CartPage } from './components/CartPage';
import { ProductPage } from './components/ProductPage';
import styles from './App.module.scss';
import './utils/swiper.scss';
import { NavbarMenuIcon } from './components/NavbarLink/NavbarLink';
import favorite from './images/favorite.svg';
import cart from './images/cart.svg';

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      <div className={styles.section}>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/phones">
              <Route index element={<PhonesPage />} />
              <Route path=":id" element={<ProductPage />} />
            </Route>
            <Route
              path="/tablets"
              element={<h1 className={styles.title}>No tablets yet</h1>}
            />
            <Route
              path="/accessories"
              element={<h1 className={styles.title}>No accessories yet</h1>}
            />
            <Route path="/menu" element={<Menu />} />
            <Route path="/favorites" element={<FavouritePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>{' '}
        </div>
      </div>

      {location.pathname !== '/menu' ? (
        <Footer />
      ) : (
        <div className={styles.menu__icons}>
          <NavbarMenuIcon to="/favorites" alt="favorites" src={favorite} />
          <NavbarMenuIcon to="/cart" alt="cart" src={cart} />
        </div>
      )}
    </>
  );
};
