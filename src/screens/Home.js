import React from 'react';
import styles from './Home.module.scss';
import Hero from '../components/Hero';
import Description from '../components/Description';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <Description />
      <Pricing />
    </main>
  );
}
