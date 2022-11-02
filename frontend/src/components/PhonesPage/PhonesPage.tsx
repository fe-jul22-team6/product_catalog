import styles from './PhonePage.module.scss';
import PhoneCard from '../PhoneCard';
import { Loader } from '../Loader';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import favorite from '../../images/favorite.svg';

export const PhonesPage: React.FC = () => {
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
    <section className={styles.phones}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className={styles.phones__title}>Something went wrong</h1>
      ) : phones.length ? (
        <div className={styles.phones__content}>
          <h1 className={styles.phones__title}>Mobile Phones</h1>
          <p className={styles.phones__count}>{phones.length} phones</p>
          <div className={styles.phones__cards}>
            {phones.map((phone) => (
              <PhoneCard phone={phone} likeImg={favorite} key={phone.id} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className={styles.phones__title}>No phones yet</h1>
      )}
    </section>
  );
};
