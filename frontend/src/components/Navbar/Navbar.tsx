import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../../images/logo.png';
import favorite from '../../images/favorite.svg';
import menu from '../../images/burger.svg';
import cross from '../../images/cross.svg';
import cart from '../../images/cart.svg';
import { NavbarLink, NavbarIcon } from '../NavbarLink/NavbarLink';

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.header__link}>
          <img src={logo} alt="logo" className={styles.header__logo} />
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
        <NavbarIcon to="/favorites" alt="favorites" src={favorite} />
        <NavbarIcon to="/cart" alt="cart" src={cart} />
      </div>

      <div className={styles.burger}>
        {location.pathname === '/menu' ? (
          <NavLink
            to="/"
            className={styles.burger__link}
            onClick={() => history.back()}
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
