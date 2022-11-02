import styles from './PhoneCard.module.scss';
// import favorite from '../../images/favorite.svg';
// import favoriteActive from '../../images/favorite-active.svg';
import { Phone } from '../../../../backend/src/types/Phone';

type Props = {
  phone: Phone;
  likeImg?: string;
};

export const PhoneCard: React.FC<Props> = ({ phone, likeImg }) => {
  const { name, capacity, ram, screen, fullPrice, price, image } = phone;

  return (
    <section className={styles.card}>
      <div className={styles.card__content}>
        <img
          src={`https://fast-shelf-97147.herokuapp.com/static/${image}`}
          className={styles.card__image}
        />
        <div className={styles.card__name}>{name}</div>
        <div className={styles.card__price}>
          <div className={styles.card__price_new}>{`${price} $`}</div>
          <div className={styles.card__price_old}>{`${fullPrice} $`}</div>
        </div>
        <div className={styles.card__characteristics}>
          <div className={styles.card__description}>
            <div className={styles.card__description_title}>Screen</div>
            <div className={styles.card__description_value}>{screen}</div>
          </div>
          <div className={styles.card__description}>
            <div className={styles.card__description_title}>Capacity</div>
            <div className={styles.card__description_value}>{capacity}</div>
          </div>
          <div className={styles.card__description}>
            <div className={styles.card__description_title}>RAM</div>
            <div className={styles.card__description_value}>{ram}</div>
          </div>
        </div>
        <div className={styles.card__buttons}>
          <button className={styles.card__cart}>Add to cart</button>
          <button className={styles.card__favorite}>
            <img src={likeImg} alt="favorite" />
          </button>
        </div>
      </div>
    </section>
  );
};
