import React, { useState } from 'react';
import styles from './PaginateProducts.module.scss';
import { Phone } from '../../../../backend/src/types/Phone';
import favorite from '../../images/favorite.svg';
import { PhoneCard } from '../PhoneCard';
import Pagination from '@mui/material/Pagination';

type Props = {
  phones: Phone[];
  itemsPerPage: number;
};

export const PaginateProducts: React.FC<Props> = ({ phones, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const pages = Math.ceil(phones.length / itemsPerPage);

  if (pages !== 0 && currentPage > pages) {
    setCurrentPage(pages);
  }

  let step = 0;

  if (currentPage === 1) {
    step = 0;
  } else {
    step = itemsPerPage * (currentPage - 1);
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__cards}>
        {phones.slice(step, step + itemsPerPage).map((phone) => (
          <PhoneCard phone={phone} likeImg={favorite} key={phone.id} />
        ))}
      </div>
      <Pagination
        count={pages}
        page={currentPage}
        variant="outlined"
        onChange={handleChange}
        className={styles.pagination__count}
      />
    </div>
  );
};
