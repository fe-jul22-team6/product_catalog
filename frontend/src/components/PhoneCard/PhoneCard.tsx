import styles from './PhoneCard.module.scss';
import favorite from '../../images/favorite.svg';
import favoriteActive from '../../images/favorite-active.svg';
import { Phone } from '../../../../backend/src/types/Phone';
import Context from '../../types/Context';
import { useContext, useEffect } from 'react';
import classNames from 'classnames';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const { id, name, capacity, ram, screen, fullPrice, price, image } = phone;
  const { favoritePhones, cartPhones, setFavoritePhones, setCartPhones } =
    useContext(Context);

  useEffect(() => {
    localStorage.setItem('favoritePhones', JSON.stringify(favoritePhones));
  }, [favoritePhones]);

  useEffect(() => {
    localStorage.setItem('cartPhones', JSON.stringify(cartPhones));
  }, [cartPhones]);

  const handleAddToFavourite = () => {
    setFavoritePhones((prevPhones) => [...prevPhones, phone]);
  };

  const handleRemoveToFavourite = () => {
    localStorage.setItem(
      'favoritePhones',
      JSON.stringify(favoritePhones.filter((item) => item.id !== id))
    );

    setFavoritePhones((prevPhones) =>
      prevPhones.filter((prevPhone) => prevPhone.id !== id)
    );
  };

  const handleAddToCart = () => {
    if (cartPhones.map(({ id }) => id).includes(id)) {
      return;
    }

    const newPhone = {
      ...phone,
      amount: 1,
    };

    setCartPhones((prevPhones) => [...prevPhones, newPhone]);
  };

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
          <button
            className={classNames(styles.card__cart, {
              [styles.card__cart_isActive]: cartPhones
                .map(({ id }) => id)
                .includes(id),
            })}
            onClick={handleAddToCart}
          >
            {!cartPhones.map(({ id }) => id).includes(id)
              ? 'Add to cart'
              : 'Added'}
          </button>
          {!favoritePhones.map(({ id }) => id).includes(id) ? (
            <button
              className={styles.card__favorite}
              onClick={handleAddToFavourite}
            >
              <img src={favorite} alt="favorite" />
            </button>
          ) : (
            <button
              className={styles.card__favorite}
              onClick={handleRemoveToFavourite}
            >
              <img src={favoriteActive} alt="favorite" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
