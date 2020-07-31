import React from 'react';
import styles from './Pricing.module.scss';
import phoneSmall from '../img/phone_small.png';
import appStore from '../img/app_store.png';
import playStore from '../img/play_store.png';

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.pricingContent}>
        <h2 className={styles.pricingTitle}>
          Cennik <span>ile to kosztuje?</span>
        </h2>
        <div className={styles.pricingPlans}>
          <article className={`${styles.pricingPlansItem} ${styles.planFree}`}>
            <div className={styles.planHeader}>
              <img src={phoneSmall} alt="phone-small" />
              <div className={styles.planHeaderText}>
                <p>Lorem ipsum</p>
                <h3>Dolor</h3>
              </div>
            </div>
            <div className={styles.planPrices}>
              <div className={styles.planPricesFree}>
                <h2>Za darmo</h2>
                <p>na zawsze!</p>
              </div>
            </div>
            <div className={styles.planOverview}>
              <p>
                <span>✔</span> Lorem ipsum
              </p>
              <p>
                <span>✔</span>dolor sit amet, consectetur
              </p>
              <p>
                <span>✔</span>adipisicing elit, sed do eiusmod
              </p>
              <p>
                <span>✔</span>tempor incidunt
              </p>
              <p>
                <span>✔</span>ut labore et dolore
              </p>
              <p>
                <span>✔</span>magna aliqua
              </p>

              <div className={styles.join}>
                <p>Dołącz do zabawy już dziś!</p>
                <div className={styles.joinImages}>
                  <img src={appStore} alt="app-store" />
                  <img src={playStore} alt="play-store" />
                </div>
              </div>
              
            </div>
          </article>


          <article className={`${styles.pricingPlansItem} ${styles.planOptions}`}>
            <div className={styles.planHeader}>
              <img src={phoneSmall} alt="phone-small" />
              <div className={styles.planHeaderText}>
                <p>Lorem ipsum</p>
                <h3>dolor sit amet</h3>
              </div>
            </div>
            <div className={styles.planPrices}>
              <div className={styles.planPricesPaid}>
                <div className={styles.planPricesElement}>Basic</div>
                <div className={styles.planPricesElement}>Premium</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
