import styles from './PhoneCard.module.scss';
import favorite from '../../images/favorite.svg';

type Props = {
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  image: string;
};

export const PhoneCard: React.FC<Props> = ({
  name,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
  image,
}) => {
  return (
    <section className={styles.card}>
      <div className={styles.card__content}>
        <img
          src={`http://localhost:5000/static/${image}`}
          className={styles.card__image}
        />
        <div className={styles.card__name}>{name}</div>
        <div className={styles.card__price}>
          <div className={styles.card__price_new}>{`${fullPrice} $`}</div>
          <div className={styles.card__price_old}>{`${price} $`}</div>
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
