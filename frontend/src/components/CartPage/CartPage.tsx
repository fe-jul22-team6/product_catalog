import cross from '../../images/cross.svg';
import styles from './CartPage.module.scss';
import { useState, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { NavLink } from 'react-router-dom';
import { NavPage } from '../NavPage';
import Context from '../../types/Context';
import { Phone } from '../../../../backend/src/types/Phone';

export const CartPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cartPhones, setCartPhones } = useContext(Context);

  const handleDelete = (id: string) => {
    localStorage.setItem(
      'cartPhones',
      JSON.stringify(cartPhones.filter((item) => item.id !== id))
    );

    setCartPhones((prevPhones) =>
      prevPhones.filter((prevPhone) => prevPhone.id !== id)
    );
  };

  const handleIncrease = (phone: Phone) => {
    phone.amount++;

    localStorage.setItem('cartPhones', JSON.stringify(cartPhones));

    setCartPhones((prevPhones) => [...prevPhones]);
  };

  const handleDecrease = (phone: Phone) => {
    if (phone.amount - 1 === 0) {
      return;
    }

    phone.amount--;

    localStorage.setItem('cartPhones', JSON.stringify(cartPhones));

    setCartPhones((prevPhones) => [...prevPhones]);
  };

  return (
    <section className={styles.cart}>
      {cartPhones.length ? (
        <>
          <NavPage home={false} />
          <h1 className={styles.cart__title}>Cart</h1>
          <div className={styles.cart__product_list}>
            {cartPhones.map((phone) => (
              <div className={styles.product_list__item} key={phone.id}>
                <div className={styles.item_information}>
                  <button
                    className={styles.item__delete}
                    onClick={() => handleDelete(phone.id)}
                  >
                    <img
                      src={cross}
                      alt=""
                      className={styles.item_delete_button}
                    />
                  </button>
                  <div className={styles.item__photo}>
                    <img
                      src={`https://fast-shelf-97147.herokuapp.com/static/${phone.image}`}
                      alt=""
                      className={styles.photo}
                    />
                  </div>
                  <p className={styles.item__title}>{phone.name}</p>
                </div>
                <div className={styles.item_other_info}>
                  <div className={styles.item__quantity}>
                    <span
                      className={styles.item__quantity_counter}
                      onClick={() => handleDecrease(phone)}
                    >
                      -
                    </span>
                    <span className={styles.item__quantity_count}>
                      {phone.amount}
                    </span>
                    <span
                      className={styles.item__quantity_counter}
                      onClick={() => handleIncrease(phone)}
                    >
                      +
                    </span>
                  </div>
                  <p className={styles.item__price}>${phone.price}</p>
                </div>
              </div>
            ))}
            <div className={styles.product_list_checkout}>
              <h3 className={styles.checkout_total}>
                ${cartPhones.reduce((a, b) => a + b.price * b.amount, 0)}
              </h3>
              <p className={styles.checkout_count}>
                Total for {cartPhones.length} items
              </p>
              <div onClick={handleOpen} className={styles.checkout_button}>
                Checkout
              </div>
              <Dialog
                PaperProps={{
                  sx: { width: '60%', height: '60%' },
                }}
                onClose={handleClose}
                open={open}
                className={styles.dialog}
                maxWidth={false}
              >
                <h3 className={`${styles.cart__title} ${styles.dialog__title}`}>
                  Checkout
                </h3>
                <div className={styles.dialog__container}>
                  <NavLink to="/home" className={styles.checkout__link}>
                    To Home page
                  </NavLink>
                  <NavLink to="/phones" className={styles.checkout__link}>
                    Continue shopping
                  </NavLink>
                </div>
              </Dialog>
            </div>
          </div>
        </>
      ) : (
        <h1 className={styles.cart__title}>No phones in a cart yet</h1>
      )}
    </section>
  );
};
