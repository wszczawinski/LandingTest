import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Logo
      </Link>
      <ul className={styles.list}>
        <li>Start</li>
        <li>Jak to działa?</li>
        <li>Cennik</li>
        <li>Logowanie</li>
        <li>Rejestracja</li>
      </ul>
    </nav>
  );
}
