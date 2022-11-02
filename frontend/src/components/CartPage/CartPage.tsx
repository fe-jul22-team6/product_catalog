import back from '../../images/back.svg';
import cross from '../../images/cross.svg';
import styles from './CartPage.module.scss';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Loader } from '../Loader';
import { NavLink } from 'react-router-dom';

export const CartPage: React.FC = () => {
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
    <section className={styles.cart}>
      <div className={styles.cart__back_button}>
        <img src={back} alt="Back button" />
        <span className={styles.back_button__text}>Back</span>
      </div>
      <h1 className={styles.cart__title}>Cart</h1>
      {!phones.length ? (
        <Loader />
      ) : (
        <div className={styles.cart__product_list}>
          {phones.map(({ id, name, price, image }) => (
            <div className={styles.product_list__item} key={id}>
              <div className={styles.item_information}>
                <button
                  className={styles.item__delete}
                  onClick={() => handleDelete(id)}
                >
                  <img
                    src={cross}
                    alt=""
                    className={styles.item_delete_button}
                  />
                </button>
                <div className={styles.item__photo}>
                  <img
                    src={`https://fast-shelf-97147.herokuapp.com/static/${image}`}
                    alt=""
                    className={styles.photo}
                  />
                </div>
                <p className={styles.item__title}>{name}</p>
              </div>
              <div className={styles.item_other_info}>
                <div className={styles.item__quantity}>
                  <span className={styles.item__quantity_counter}>-</span>
                  <span className={styles.item__quantity_count}>1</span>
                  <span className={styles.item__quantity_counter}>+</span>
                </div>
                <p className={styles.item__price}>${price}</p>
              </div>
            </div>
          ))}
          <div className={styles.product_list_checkout}>
            <h3 className={styles.checkout_total}>
              ${phones.reduce((a, b) => a + b.price, 0)}
            </h3>
            <p className={styles.checkout_count}>
              Total for {phones.length} items
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
      )}
    </section>
  );
};
