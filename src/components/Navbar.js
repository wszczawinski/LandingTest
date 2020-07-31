import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  let location = useLocation();
  let [scrollClass, setScrollClass] = useState(false);

  window.addEventListener('scroll', () => {
    let scroll = true;
    if (window.scrollY === 0) {
      scroll = false;
    }
    setScrollClass(scroll);
  });

  return (
    <nav className={` ${styles.navbar} ${scrollClass ? styles.transparent : null} `}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          Logo
        </Link>
        <ul className={styles.navbarList}>
          <li>
            <a href="#hero">Start</a>
          </li>
          <li>
            <a href="#description">Jak to działa?</a>
          </li>
          <li>
            <a href="#pricing">Cennik</a>
          </li>
          <li>Logowanie</li>
          <li>
            <Link
              to={{
                pathname: '/#register',
                state: { background: location },
              }}
            >
              Rejestracja
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
