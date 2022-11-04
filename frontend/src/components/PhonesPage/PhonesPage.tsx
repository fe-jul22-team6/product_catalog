import styles from './PhonePage.module.scss';
import { PhoneCard } from '../PhoneCard';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import favorite from '../../images/favorite.svg';
import { NavPage } from '../NavPage';
import { PhonesFilter } from '../PhonesFilter';

type Props = {
  phones: Phone[];
};

export const PhonesPage: React.FC<Props> = ({ phones }) => {
  const [visiblePhones, setvisiblePhones] = useState<Phone[]>([]);

  useEffect(() => {
    setvisiblePhones(phones.slice(0, 32));
  }, [phones]);

  return (
    <section className={styles.phones}>
      <NavPage home={true} />
      <div className={styles.phones__content}>
       {phones.length ? (
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
