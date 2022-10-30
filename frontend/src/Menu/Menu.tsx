import './Menu.scss';
import { NavbarMenuLink, NavbarMenuIcon } from '../NavbarLink/NavbarLink';
import favorite from '../images/favorite.svg';
import cart from '../images/cart.svg';

export const Menu: React.FC = () => {
  return (
    <nav className="page__menu menu">
      <div className="menu__content">
        <ul className="menu__list">
          <li className="menu__item">
            <NavbarMenuLink to="/" text="Home" />
          </li>
          <li className="menu__item">
            <NavbarMenuLink to="phones" text="Phones" />
          </li>
          <li className="menu__item">
            <NavbarMenuLink to="tablets" text="Tablets" />
          </li>
          <li className="menu__item">
            <NavbarMenuLink to="accessories" text="Accessories" />
          </li>
        </ul>
        <div className="menu-icons">
          <NavbarMenuIcon to="favorites" alt="favorites" src={favorite} />
          <NavbarMenuIcon to="cart" alt="cart" src={cart} />
        </div>
      </div>
    </nav>
  );
};
