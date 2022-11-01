import styles from './PhonePage.module.scss';
import PhoneCard from '../PhoneCard';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    phonesApi.getAll().then(setPhones);
  }, []);

  return (
    <section className={styles.phones}>
      <div className={styles.phones__content}>
        <h1 className={styles.phones__title}>Mobile Phones</h1>
        <div className={styles.phones__cards}>
          {phones.map(
            ({ name, capacity, ram, screen, fullPrice, price, image }) => (
              <PhoneCard
                name={name}
                capacity={capacity}
                ram={ram}
                screen={screen}
                fullPrice={fullPrice}
                price={price}
                image={image}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
