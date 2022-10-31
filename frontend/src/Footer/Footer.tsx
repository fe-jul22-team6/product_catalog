/* eslint-disable prettier/prettier */
import './Footer.scss';
import { NavbarLink } from '../NavbarLink/NavbarLink';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import backToTop from '../images/BackToTop.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <NavLink to="/" className="footer__link">
        <img src={logo} alt="logo" className="footer__logo" />
      </NavLink>

      <ul className="footer__list">
        <li className="footer__list-item">
          <NavbarLink to="/" text="github" />
        </li>
        <li className="footer__list-item">
          <NavbarLink to="/" text="contacts" />
        </li>
        <li className="footer__list-item">
          <NavbarLink to="/" text="rights" />
        </li>
      </ul>

      <NavLink to="/" className="nav__button">
        <NavbarLink to="/" text="Back to top" />
        <img src={backToTop} alt="logo" className="nav__button-image" />
      </NavLink>
    </footer>
  );
};
