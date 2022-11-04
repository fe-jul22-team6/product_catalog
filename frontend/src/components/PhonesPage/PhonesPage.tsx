import styles from './PhonePage.module.scss';
import PhoneCard from '../PhoneCard';
import { Loader } from '../Loader';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import favorite from '../../images/favorite.svg';
import PhonesFilter from '../PhonesFilter';
import { NavPage } from '../NavPage';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [visiblePhones, setvisiblePhones] = useState<Phone[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    phonesApi
      .getAll()
      .then(setPhones)
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setvisiblePhones(phones.slice(0, 32));
  }, [phones]);

  return (
    <section className={styles.phones}>
      <div className={styles.phones__content}>
        <NavPage home={true} />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <h1 className={styles.phones__title}>Something went wrong</h1>
        ) : phones.length ? (
          <div className={styles.phones__content}>
            <h1 className={styles.phones__title}>Mobile Phones</h1>
            <p className={styles.phones__count}>{phones.length} phones</p>
            <PhonesFilter phones={phones} setVisiblePhones={setvisiblePhones} />
            <div className={styles.phones__cards}>
              {visiblePhones.map((phone) => (
                <PhoneCard phone={phone} likeImg={favorite} key={phone.id} />
              ))}
            </div>
          </div>
        ) : (
          <h1 className={styles.phones__title}>No phones yet</h1>
        )}
      </div>
    </section>
  );
};
