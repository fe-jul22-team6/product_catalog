import styles from './NavPage.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import backIcon from '../../images/back.svg';
import nextIcon from '../../images/next.svg';
import homeIcon from '../../images/home.svg';
import React from 'react';

type Props = {
  home: boolean;
};

export const NavPage: React.FC<Props> = ({ home }) => {
  const navList = location.href
    .slice(location.href.indexOf('#/') + 2)
    .split('/');

  const navigate = useNavigate();

  return (
    <div className={styles.navigation}>
      {home ? (
        <>
          <NavLink to="/home">
            <img
              src={homeIcon}
              alt="Home button"
              className={styles.navigation__home}
            />
          </NavLink>
          {navList.map((navItem, index) => (
            <React.Fragment key={navItem}>
              <img
                src={nextIcon}
                alt="Next button"
                className={styles.navigation__next}
              />
              <span
                className={styles.navigation__text}
                onClick={() => (index === 0 ? navigate(0) : navigate(-1))}
              >
                {navItem}
              </span>
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          <img
            src={backIcon}
            alt="Next button"
            className={styles.navigation__back}
          />
          <span
            className={styles.navigation__text}
            onClick={() => navigate(-1)}
          >
            Back
          </span>
        </>
      )}
    </div>
  );
};
