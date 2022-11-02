import styles from './Footer.module.scss';
import { FooterLink } from '../NavbarLink/NavbarLink';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-pink.svg';
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
            <li className={styles.footer__item}>
              <FooterLink to="/" text="github" />
            </li>
            <li className={styles.footer__item}>
              <FooterLink to="/" text="contacts" />
            </li>
            <li className={styles.footer__item}>
              <FooterLink to="/" text="rights" />
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
