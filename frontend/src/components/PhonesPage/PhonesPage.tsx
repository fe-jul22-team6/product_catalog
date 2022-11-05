import styles from './PhonePage.module.scss';
import React, { useEffect, useState } from 'react';
import * as phonesApi from '../../api/phones';
import { Phone } from '../../../../backend/src/types/Phone';
import { NavPage } from '../NavPage';
import { PhonesFilter } from '../PhonesFilter';
import { PaginateProducts } from '../PaginateProducts';
import { Loader } from '../Loader';

export const PhonesPage: React.FC = () => {
  const [visiblePhones, setVisiblePhones] = useState<Phone[]>([]);
  const [selectedAmount, setSelectedAmount] = useState(4);
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

  useEffect(() => {
    setVisiblePhones(phones);
  }, [phones]);

  return (
    <section className={styles.phones}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className={styles.phones__title}>Something went wrong</h1>
      ) : (
        <>
          <NavPage home={true} />
          <div className={styles.phones__content}>
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
          </div>
        </>
      )}
    </section>
  );
};
