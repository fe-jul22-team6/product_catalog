import styles from './PhonePage.module.scss';
import PhoneCard from '../PhoneCard';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import favorite from '../../images/favorite.svg';
import PhonesFilter from '../PhonesFilter';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [visiblePhones, setvisiblePhones] = useState<Phone[]>([]);

  useEffect(() => {
    phonesApi.getAll().then(setPhones);
  }, []);

  useEffect(() => {
    setvisiblePhones(phones.slice(0, 32));
  }, [phones]);

  return (
    <section className={styles.phones}>
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
    </section>
  );
};
