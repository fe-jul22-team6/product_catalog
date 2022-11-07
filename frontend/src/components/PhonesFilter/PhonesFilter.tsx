import styles from './PhonesFilter.module.scss';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';

type Props = {
  phones: Phone[];
  setVisiblePhones: (phones: Phone[]) => void;
  selectedAmount: number;
  setSelectedAmount: (amount: number) => void;
};

enum SortBy {
  HighPrice = 'HighPrice',
  LowPrice = 'LowPrice',
  Newest = 'Newest',
  noFilterSelected = 'By default',
}

export const PhonesFilter: React.FC<Props> = ({
  phones,
  setVisiblePhones,
  selectedAmount,
  setSelectedAmount,
}) => {
  const [selectedSort, setSelectedSort] = useState('By default');

  useEffect(() => {
    filterPhones(selectedSort);
  }, [selectedSort]);

  const filterPhones = (value: string) => {
    if (value === SortBy.noFilterSelected) {
      setVisiblePhones([...phones]);

      return;
    }

    if (value === SortBy.Newest) {
      setVisiblePhones(
        [...phones].sort((phone1, phone2) => phone2.year - phone1.year)
      );

      return;
    }

    setVisiblePhones(
      [...phones].sort((phone1, phone2) => {
        switch (value) {
          case SortBy.HighPrice:
            return phone2.price - phone1.price;
          case SortBy.LowPrice:
          default:
            return phone1.price - phone2.price;
        }
      })
    );
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__item}>
        <p className={styles.filter__item_title}>Sort by</p>
        <select
          name="sort"
          id="sort"
          className={styles.filter__item_sort}
          value={selectedSort}
          onChange={(event) => setSelectedSort(event.target.value)}
        >
          <option value={SortBy.noFilterSelected}>Default</option>
          <option value={SortBy.Newest}>Newest</option>
          <option value={SortBy.LowPrice}>Price Low to High</option>
          <option value={SortBy.HighPrice}>Price High to Low</option>
        </select>
      </div>

      <div className={styles.filter__item}>
        <p className={styles.filter__item_title}>Items on page</p>
        <select
          name="amount"
          id="amount"
          className={styles.filter__item_amount}
          value={selectedAmount}
          onChange={(event) => setSelectedAmount(Number(event.target.value))}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={64}>64</option>
        </select>
      </div>
    </div>
  );
};
