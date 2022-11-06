import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import pinklogo from '../../images/logo-pink.svg';
import blacklogo from '../../images/logo-black.svg';
import favorite from '../../images/favorite.svg';
import menu from '../../images/burger.svg';
import cross from '../../images/cross.svg';
import cart from '../../images/cart.svg';
import { NavbarLink, NavbarIcon } from '../NavbarLink/NavbarLink';
import { useContext } from 'react';
import Context from '../../types/Context';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { favoritePhones } = useContext(Context);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.header__link}>
          {location.pathname === '/menu' ? (
            <img src={blacklogo} alt="logo" className={styles.header__logo} />
          ) : (
            <img src={pinklogo} alt="logo" className={styles.header__logo} />
          )}
        </NavLink>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <NavbarLink to="/" text="Home" />
          </li>
          <li className={styles.nav__item}>
            <NavbarLink to="/phones" text="Phones" />
          </li>
          <li className={styles.nav__item}>
            <NavbarLink to="/tablets" text="Tablets" />
          </li>
          <li className={styles.nav__item}>
            <NavbarLink to="/accessories" text="Accessories" />
          </li>
        </ul>
      </nav>

      <div className={styles.icons}>
        <NavbarIcon
          to="/favorites"
          alt="favorites"
          src={favorite}
          value={favoritePhones.length}
        />
        <NavbarIcon to="/cart" alt="cart" src={cart} value={0} />
      </div>

      <div className={styles.burger}>
        {location.pathname === '/menu' ? (
          <NavLink
            to="/"
            className={styles.burger__link}
            onClick={() => navigate(-1)}
          >
            <img src={cross} alt="cross" className={styles.burger__img} />
          </NavLink>
        ) : (
          <NavLink to="/menu" className={styles.burger__link}>
            <img src={menu} alt="menu" className={styles.burger__img} />
          </NavLink>
        )}
      </div>
    </header>
  );
};
