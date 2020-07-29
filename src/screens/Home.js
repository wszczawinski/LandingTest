import React from 'react';
import styles from './Home.module.scss';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
    </main>
  );
}
