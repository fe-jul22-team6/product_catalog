import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import logo from '../images/logo.png';
import favorite from '../images/favorite.svg';
import menu from '../images/burger.svg';
import cross from '../images/cross.svg';
import cart from '../images/cart.svg';
import { NavbarLink, NavbarIcon } from '../NavbarLink/NavbarLink';

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="header__link">
          <img src={logo} alt="logo" className="header__logo" />
        </NavLink>
        <ul className="nav__list">
          <li className="nav__item">
            <NavbarLink to="/" text="Home" />
          </li>
          <li className="nav__item">
            <NavbarLink to="/phones" text="Phones" />
          </li>
          <li className="nav__item">
            <NavbarLink to="/tablets" text="Tablets" />
          </li>
          <li className="nav__item">
            <NavbarLink to="/accessories" text="Accessories" />
          </li>
        </ul>
      </nav>

      <div className="icons">
        <NavbarIcon to="/favorites" alt="favorites" src={favorite} />
        <NavbarIcon to="/cart" alt="cart" src={cart} />
      </div>

      <div className="burger">
        {location.pathname === '/menu' ? (
          <NavLink to="/" className="burger__link">
            <img src={cross} alt="cross" className="burger__img" />
          </NavLink>
        ) : (
          <NavLink to="/menu" className="burger__link">
            <img src={menu} alt="menu" className="burger__img" />
          </NavLink>
        )}
      </div>
    </header>
  );
};
