import styles from './Menu.module.scss';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { NavbarMenuLink, NavbarMenuIcon } from '../NavbarLink/NavbarLink';
import Context from '../../types/Context';
import { useContext } from 'react';
import favorite from '../../images/favorite.svg';
import cart from '../../images/cart.svg';

export const Menu: React.FC = () => {
  const onTablet = useMediaQuery({
    query: '(max-width: 640px)',
  });

  const navigate = useNavigate();
  const { favoritePhones } = useContext(Context);

  return onTablet ? (
    <nav className={styles.menu}>
      <div className={styles.menu__content}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <NavbarMenuLink to="/" text="Home" />
          </li>
          <li className={styles.menu__item}>
            <NavbarMenuLink to="/phones" text="Phones" />
          </li>
          <li className={styles.menu__item}>
            <NavbarMenuLink to="/tablets" text="Tablets" />
          </li>
          <li className={styles.menu__item}>
            <NavbarMenuLink to="/accessories" text="Accessories" />
          </li>
        </ul>
      </div>
      <div className={styles.menu__icons}>
        <NavbarMenuIcon
          to="/favorites"
          alt="favorites"
          src={favorite}
          value={favoritePhones.length}
        />
        <NavbarMenuIcon to="/cart" alt="cart" src={cart} value={0} />
      </div>
    </nav>
  ) : (
    <>{navigate(-1)}</>
  );
};
