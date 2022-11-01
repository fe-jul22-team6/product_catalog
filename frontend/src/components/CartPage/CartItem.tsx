import './CartItem.scss';
import back from '../../images/back.svg';
import cross from '../../images/cross.svg';
import CartImage from '../../images/cart_image.png';

export const CartItem: React.FC = () => (
  <section className="cart">
    <div className="cart__back-button">
      <img src={back} alt="Back button" />
      <span className="back-button__text">Back</span>
    </div>
    <h1 className="cart__title">Cart</h1>
    <div className="cart__product-list">
      <div className="product-list__item">
        <div className="item-information">
          <div className="item__delete">
            <img src={cross} alt="" className="item__delete-button" />
          </div>
          <div className="item__photo">
            <img src={CartImage} alt="" className="photo" />
          </div>
          <p className="item__title">
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </p>
        </div>
        <div className="item-other-info">
          <div className="item__quantity">
            <span className="item__quantity-counter">-</span>
            <span className="item__quantity-count">1</span>
            <span className="item__quantity-counter">+</span>
          </div>
          <p className="item__price">$999</p>
        </div>
      </div>
      <div className="product-list__item">
        <div className="item-information">
          <div className="item__delete">
            <img src={cross} alt="" className="item__delete-button" />
          </div>
          <div className="item__photo">
            <img src={CartImage} alt="" className="photo" />
          </div>
          <p className="item__title">
            Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)
          </p>
        </div>
        <div className="item-other-info">
          <div className="item__quantity">
            <span className="item__quantity-counter">-</span>
            <span className="item__quantity-count">1</span>
            <span className="item__quantity-counter">+</span>
          </div>
          <p className="item__price">$859</p>
        </div>
      </div>
      <div className="product-list__item">
        <div className="item-information">
          <div className="item__delete">
            <img src={cross} alt="" className="item__delete-button" />
          </div>
          <div className="item__photo">
            <img src={CartImage} alt="" className="photo" />
          </div>
          <p className="item__title">
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </p>
        </div>
        <div className="item-other-info">
          <div className="item__quantity">
            <span className="item__quantity-counter">-</span>
            <span className="item__quantity-count">1</span>
            <span className="item__quantity-counter">+</span>
          </div>
          <p className="item__price">$799</p>
        </div>
      </div>
      <div className="product-list_checkout">
        <h3 className="checkout-total">$2657</h3>
        <p className="checkout-count">Total for 3 items</p>
        <div className="checkout-button">Checkout</div>
      </div>
    </div>
  </section>
);
