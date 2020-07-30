import React from 'react';
import styles from './Pricing.module.scss';
import phoneSmall from '../img/phone_small.png';

export default function Pricing() {
  return (
    <section className={styles.pricing}>
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
