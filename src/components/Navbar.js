import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
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
          <li>Start</li>
          <li>Jak to działa?</li>
          <li>Cennik</li>
          <li>Logowanie</li>
          <li>Rejestracja</li>
        </ul>
      </div>
    </nav>
  );
}
