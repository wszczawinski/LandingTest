import React from 'react';
import styles from './Hero.module.scss';
import phoneHand from '../img/phone_hand.png';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <article className={styles.heroArticle}>
          <h2>Poznaj Lorem Ipsum!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro ullam at
            perferendis aliquid voluptates suscipit quo odio! At veritatis amet repellat
            quod soluta tempore expedita reiciendis ducimus quae nisi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit
          </p>
          <button className={styles.btnOrange}>O aplikacji</button>
          <button>Pobierz</button>
        </article>
        <img className={styles.heroImage} src={phoneHand} alt="phone-hand" />
      </div>
    </section>
  );
}
