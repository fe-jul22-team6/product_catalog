/* eslint-disable prettier/prettier */
import './Footer.scss';
import { useEffect } from 'react';
import { NavbarLink } from '../NavbarLink/NavbarLink';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import backToTop from '../images/BackToTop.svg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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

      <button onClick={scrollToTop} className="nav__button">
        Back to top
        <img src={backToTop} alt="logo" className="nav__button-image" />
      </button>
    </footer>
  );
};
