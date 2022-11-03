import styles from './FavouritePage.module.scss';
import PhoneCard from '../PhoneCard';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import { Loader } from '../Loader';
import favoriteActive from '../../images/favorite-active.svg';

export const FavouritePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    phonesApi
      .getAll()
      .then((phones) => setPhones(phones.slice(5, 11)))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className={styles.favourites}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className={styles.favourites__title}>Something went wrong</h1>
      ) : phones.length ? (
        <div className={styles.favourites__content}>
          <h1 className={styles.favourites__title}>Favourites</h1>
          <p className={styles.favourites__count}>{phones.length} phones</p>
          <div className={styles.favourites__cards}>
            {phones.map((phone) => (
              <PhoneCard
                phone={phone}
                likeImg={favoriteActive}
                key={phone.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1 className={styles.favourites__title}>No favourites phones yet</h1>
      )}
    </section>
  );
};
