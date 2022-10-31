import './PhoneCard.scss';
import iphone from '../images/iphone.png';
import favorite from '../images/favorite.svg';

export const PhoneCard: React.FC = () => {
  return (
    <section className="card">
      <div className="card__content">
        <img src={iphone} className="card__image" />
        <div className="card__name">
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </div>
        <div className="card__price">
          <div className="card__price-new">$799</div>
          <div className="card__price-old">$899</div>
        </div>
        <div className="card__characteristics">
          <div className="card__description">
            <div className="card__description-title">Screen</div>
            <div className="card__description-value">5.8” OLED</div>
          </div>
          <div className="card__description">
            <div className="card__description-title">Capacity</div>
            <div className="card__description-value">64 GB</div>
          </div>
          <div className="card__description">
            <div className="card__description-title">RAM</div>
            <div className="card__description-value">4 GB</div>
          </div>
        </div>
        <div className="card__buttons">
          <a href="/" className="card__cart">
            Add to cart
          </a>
          <a href="/" className="card__favorite">
            <img src={favorite} alt="favorite" />
          </a>
        </div>
      </div>
    </section>
  );
};
