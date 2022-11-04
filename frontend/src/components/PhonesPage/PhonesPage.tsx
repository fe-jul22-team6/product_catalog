import styles from './PhonePage.module.scss';
import React, { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import { NavPage } from '../NavPage';
import { PhonesFilter } from '../PhonesFilter';
import { PaginateProducts } from '../PaginateProducts';

type Props = {
  phones: Phone[];
};

export const PhonesPage: React.FC<Props> = ({ phones }) => {
  const [visiblePhones, setVisiblePhones] = useState<Phone[]>([]);
  const [selectedAmount, setSelectedAmount] = useState(4);

  useEffect(() => {
    setVisiblePhones(phones);
  }, [phones]);

  return (
    <section className={styles.phones}>
      <NavPage home={true} />
      <div className={styles.phones__content}>
        {phones.length ? (
          <div className={styles.phones__content}>
            <h1 className={styles.phones__title}>Mobile Phones</h1>
            <p className={styles.phones__count}>{phones.length} phones</p>
            <PhonesFilter
              phones={phones}
              setVisiblePhones={setVisiblePhones}
              selectedAmount={selectedAmount}
              setSelectedAmount={setSelectedAmount}
            />
            <PaginateProducts
              phones={visiblePhones}
              itemsPerPage={selectedAmount}
            />
          </div>
        ) : (
          <h1 className={styles.phones__title}>No phones yet</h1>
        )}
      </div>
    </section>
  );
};
