import styles from './PhonePage.module.scss';
import PhoneCard from '../PhoneCard';
import { Loader } from '../Loader';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import favorite from '../../images/favorite.svg';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    phonesApi.getAll().then(setPhones);
  }, []);

  return (
    <section className={styles.phones}>
      {!phones.length ? (
        <Loader />
      ) : (
        <div className={styles.phones__content}>
          <h1 className={styles.phones__title}>Mobile Phones</h1>
          <p className={styles.phones__count}>{phones.length} phones</p>
          <div className={styles.phones__cards}>
            {phones.map((phone) => (
              <PhoneCard phone={phone} likeImg={favorite} key={phone.id} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
