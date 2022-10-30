import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type PropsLink = {
  to: string;
  text: string;
};

type PropsIcon = {
  to: string;
  alt: string;
  src: string;
};

export const NavbarLink: React.FC<PropsLink> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames('nav__link', { 'is-active': isActive })
      }
      end
    >
      {text}
    </NavLink>
  );
};

export const NavbarMenuLink: React.FC<PropsLink> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames('menu__link', { 'is-active': isActive })
      }
      end
    >
      {text}
    </NavLink>
  );
};

export const NavbarIcon: React.FC<PropsIcon> = ({ to, alt, src }) => {
  return (
    <NavLink to={to} className="icons__link">
      <img src={src} alt={alt} className="icons__img" />
    </NavLink>
  );
};

export const NavbarMenuIcon: React.FC<PropsIcon> = ({ to, alt, src }) => {
  return (
    <NavLink to={to} className="menu-icons__link">
      <img src={src} alt={alt} className="menu-icons__img" />
    </NavLink>
  );
};
