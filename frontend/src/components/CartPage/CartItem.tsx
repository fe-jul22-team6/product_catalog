import './CartItem.scss';
import back from '../../images/back.svg';
import cross from '../../images/cross.svg';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';

export const CartItem: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    phonesApi.getAll().then((phones) => setPhones(phones.slice(0, 5))); // sliced first 5 phones for example
  }, []);

  const handleDelete = (id: string) => {
    setPhones(phones.filter((phone) => phone.id !== id));
  };

  return (
    <section className="cart">
      <div className="cart__back-button">
        <img src={back} alt="Back button" />
        <span className="back-button__text">Back</span>
      </div>
      <h1 className="cart__title">Cart</h1>
      <div className="cart__product-list">
        {phones.map(({ id, name, price, image }) => (
          <div className="product-list__item">
            <div className="item-information">
              <button className="item__delete" onClick={() => handleDelete(id)}>
                <img src={cross} alt="" className="item__delete-button" />
              </button>
              <div className="item__photo">
                <img
                  src={`https://fast-shelf-97147.herokuapp.com/static/${image}`}
                  alt=""
                  className="photo"
                />
              </div>
              <p className="item__title">{name}</p>
            </div>
            <div className="item-other-info">
              <div className="item__quantity">
                <span className="item__quantity-counter">-</span>
                <span className="item__quantity-count">1</span>
                <span className="item__quantity-counter">+</span>
              </div>
              <p className="item__price">${price}</p>
            </div>
          </div>
        ))}
        <div className="product-list_checkout">
          <h3 className="checkout-total">
            ${phones.reduce((a, b) => a + b.price, 0)}
          </h3>
          <p className="checkout-count">Total for {phones.length} items</p>
          <div className="checkout-button">Checkout</div>
        </div>
      </div>
    </section>
  );
};
