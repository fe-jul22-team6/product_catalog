import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './NavbarLink.module.scss';

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
        classNames(styles.nav__link, { [styles.nav__link_is_active]: isActive })
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
        classNames(styles.menu__link, {
          [styles.menu__link_is_active]: isActive,
        })
      }
      end
    >
      {text}
    </NavLink>
  );
};

export const NavbarIcon: React.FC<PropsIcon> = ({ to, alt, src }) => {
  return (
    <NavLink to={to} className={styles.icons__link}>
      <img src={src} alt={alt} className={styles.icons__img} />
    </NavLink>
  );
};

export const NavbarMenuIcon: React.FC<PropsIcon> = ({ to, alt, src }) => {
  return (
    <NavLink to={to} className={styles.menu__icons_link}>
      <img src={src} alt={alt} className={styles.menu__icons_img} />
    </NavLink>
  );
};
