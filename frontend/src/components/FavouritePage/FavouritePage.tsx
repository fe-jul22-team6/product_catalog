import styles from './FavouritePage.module.scss';
import { PhoneCard } from '../PhoneCard';
import { Phone } from '../../../../backend/src/types/Phone';
import { NavPage } from '../NavPage';

type Props = {
  phones: Phone[];
};

export const FavouritePage: React.FC<Props> = ({ phones }) => {
  return (
    <section className={styles.favourites}>
      {phones.length ? (
        <div className={styles.favourites__content}>
          <NavPage home={true} />
          <h1 className={styles.favourites__title}>Favourites</h1>
          <p className={styles.favourites__count}>{phones.length} phones</p>
          <div className={styles.favourites__cards}>
            {phones.map((phone) => (
              <PhoneCard phone={phone} key={phone.id} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className={styles.favourites__title}>No favourites phones yet</h1>
      )}
    </section>
  );
};
