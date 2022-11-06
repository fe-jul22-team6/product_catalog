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
  value: number;
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

export const FooterLink: React.FC<PropsLink> = ({ to, text }) => {
  return (
    <NavLink to={to} className={styles.footer__link} end>
      {text}
    </NavLink>
  );
};

export const NavbarIcon: React.FC<PropsIcon> = ({ to, alt, src, value }) => {
  return (
    <div className={styles.icons__container}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          classNames(styles.icons__link, {
            [styles.icons__link_is_active]: isActive,
          })
        }
      >
        <img src={src} alt={alt} className={styles.icons__img} />
      </NavLink>
      {!!value && <div className={styles.icons__counter}>{value}</div>}
    </div>
  );
};

export const NavbarMenuIcon: React.FC<PropsIcon> = ({
  to,
  alt,
  src,
  value,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.menu__icons_link, {
          [styles.menu__icons_link_is_active]: isActive,
        })
      }
    >
      <img src={src} alt={alt} className={styles.menu__icons_img} />
      {!!value && <div className={styles.menu__icons_counter}>{value}</div>}
    </NavLink>
  );
};
