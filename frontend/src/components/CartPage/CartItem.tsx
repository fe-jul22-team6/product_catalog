import './CartItem.scss';
import back from '../../images/back.svg';
import cross from '../../images/cross.svg';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { NavLink } from 'react-router-dom';

export const CartItem: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    phonesApi.getAll().then((phones: Phone[]) => setPhones(phones.slice(0, 5))); // sliced first 5 phones for example
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
                  src={`http://localhost:5000/static/${image}`}
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
          <div onClick={handleOpen} className="checkout-button">
            Checkout
          </div>
          <Dialog
            PaperProps={{
              sx: { width: '80%', height: '80%' },
            }}
            onClose={handleClose}
            open={open}
            className="dialog"
            maxWidth={false}
          >
            <h3 className="cart__title dialog__title">Checkout</h3>
            <div className="dialog__container">
              <NavLink to="/home" className="checkout__link">
                To Home page
              </NavLink>
              <NavLink to="/phones" className="checkout__link">
                Continue shopping
              </NavLink>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
