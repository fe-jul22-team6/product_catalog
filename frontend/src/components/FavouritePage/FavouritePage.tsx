import styles from './FavouritePage.module.scss';
import PhoneCard from '../PhoneCard';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import { Loader } from '../Loader';
import favoriteActive from '../../images/favorite-active.svg';

export const FavouritePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    phonesApi.getAll().then((phones) => setPhones(phones.slice(5, 11)));
  }, []);

  return (
    <section className={styles.phones}>
      {!phones.length ? (
        <Loader />
      ) : (
        <div className={styles.phones__content}>
          <h1 className={styles.phones__title}>Favourites</h1>
          <p className={styles.phones__count}>{phones.length} phones</p>
          <div className={styles.phones__cards}>
            {phones.map((phone) => (
              <PhoneCard phone={phone} likeImg={favoriteActive} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
