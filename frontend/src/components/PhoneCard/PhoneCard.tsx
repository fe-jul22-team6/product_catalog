import styles from './PhoneCard.module.scss';
import iphone from '../../images/iphone.png';
import favorite from '../../images/favorite.svg';

export const PhoneCard: React.FC = () => {
  return (
    <section className={styles.card}>
      <div className={styles.card__content}>
        <img src={iphone} className={styles.card__image} />
        <div className={styles.card__name}>
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </div>
        <div className={styles.card__price}>
          <div className={styles.card__price_new}>$799</div>
          <div className={styles.card__price_old}>$899</div>
        </div>
        <div className={styles.card__characteristics}>
          <div className={styles.card__description}>
            <div className={styles.card__description_title}>Screen</div>
            <div className={styles.card__description_value}>5.8” OLED</div>
          </div>
          <div className={styles.card__description}>
            <div className={styles.card__description_title}>Capacity</div>
            <div className={styles.card__description_value}>64 GB</div>
          </div>
          <div className={styles.card__description}>
            <div className={styles.card__description_title}>RAM</div>
            <div className={styles.card__description_value}>4 GB</div>
          </div>
        </div>
        <div className={styles.card__buttons}>
          <a href="/" className={styles.card__cart}>
            Add to cart
          </a>
          <a href="/" className={styles.card__favorite}>
            <img src={favorite} alt="favorite" />
          </a>
        </div>
      </div>
    </section>
  );
};
