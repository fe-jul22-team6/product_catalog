import './PhoneCard.scss';
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
    <section className="card">
      <div className="card__content">
        <img
          src={`http://localhost:5000/static/${image.slice(3)}`}
          className="card__image"
        />
        <div className="card__name">{name}</div>
        <div className="card__price">
          <div className="card__price-new">{`${fullPrice} $`}</div>
          <div className="card__price-old">{`${price} $`}</div>
        </div>
        <div className="card__characteristics">
          <div className="card__description">
            <div className="card__description-title">Screen</div>
            <div className="card__description-value">{screen}</div>
          </div>
          <div className="card__description">
            <div className="card__description-title">Capacity</div>
            <div className="card__description-value">{capacity}</div>
          </div>
          <div className="card__description">
            <div className="card__description-title">RAM</div>
            <div className="card__description-value">{ram}</div>
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
