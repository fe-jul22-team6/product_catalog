import styles from './Footer.module.scss';
import { NavbarLink } from '../NavbarLink/NavbarLink';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import backToTop from '../../images/BackToTop.svg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__content}>
          <NavLink to="/" className={styles.footer__logo_link}>
            <img src={logo} alt="logo" className={styles.footer__logo} />
          </NavLink>

          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>
              <NavbarLink to="/" text="github" />
            </li>
            <li className={styles.footer__list_item}>
              <NavbarLink to="/" text="contacts" />
            </li>
            <li className={styles.footer__list_item}>
              <NavbarLink to="/" text="rights" />
            </li>
          </ul>

          <button onClick={scrollToTop} className={styles.footer__button}>
            Back to top
            <img
              src={backToTop}
              alt="logo"
              className={styles.footer__button_image}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
