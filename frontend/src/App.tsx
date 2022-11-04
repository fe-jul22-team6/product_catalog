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
import { Loader } from './components/Loader';
import styles from './App.module.scss';
import './utils/swiper.scss';
import { useEffect, useState } from 'react';
import * as phonesApi from './api/phones';
import { Phone } from '../../backend/src/types/Phone';

export const App: React.FC = () => {
  const location = useLocation();
  const [phones, setPhones] = useState<Phone[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    phonesApi
      .getAll()
      .then(setPhones)
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header />

      <div className={styles.section}>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<HomePage phones={phones} />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/phones">
              <Route
                index
                element={
                  isLoading ? (
                    <Loader />
                  ) : error ? (
                    <h1 className={styles.phones__title}>
                      Something went wrong
                    </h1>
                  ) : (
                    <PhonesPage phones={phones} />
                  )
                }
              />
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

      {location.pathname !== '/menu' && <Footer />}
    </>
  );
};
