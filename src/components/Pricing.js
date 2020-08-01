import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Pricing.module.scss';
//routes
import * as ROUTES from '../constants/routes';
//images
import phoneSmall from '../img/phone_small.png';
import appStore from '../img/app_store.png';
import playStore from '../img/play_store.png';

export default function Pricing() {
  let location = useLocation();

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
              <div className={styles.elements}>
                <div className={styles.elementText}>
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
                </div>
              </div>

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
                <div className={styles.planPricesElement}>
                  <p>Basic</p>
                  <h2>
                    wersja <br /> darmowa
                  </h2>
                </div>
                <div className={styles.planPricesElement}>
                  <p>Premium</p>
                  <select name="cars" id="cars">
                    <option value="volvo">90dni</option>
                  </select>
                  <h2>
                    79,99zł
                    <span>-30% taniej</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={styles.planOverview}>
              <div className={styles.elements}>
                <div className={`${styles.elementText} ${styles.elementTextPaid}`}>
                  <p>Lorem ipsum</p>
                  <p>dolor sit amet, consectetur</p>
                  <p>adipisicing elit, sed do eiusmod</p>
                  <p>tempor incidunt</p>
                  <p>ut labore et dolore magna aliqua</p>
                  <p>Lorem ipsum</p>
                  <p>Ipsum dolor sit amet</p>
                  <p>ut labore et dolore magna aliqua</p>
                </div>
                <div className={styles.elementTicks}>
                  <p>✔</p>
                  <p>✔</p>
                  <p>✔</p>
                  <p>✔</p>
                  <p>
                    <span>✖</span>
                  </p>
                  <p>
                    <span>✖</span>
                  </p>
                  <p>
                    <span>✖</span>
                  </p>
                  <p>
                    <span>✖</span>
                  </p>
                </div>
                <div className={styles.elementTicks}>
                  <p>✔</p>
                  <p>✔</p>
                  <p>✔</p>
                  <p>✔</p>
                  <p>✔</p>
                  <p>✔</p>
                  <p>✔</p>
                  <p>✔</p>
                </div>
              </div>
              <div className={styles.join}>
                <p>Zarejestruj sie i wypróbuj!</p>
                <div className={styles.joinButtons}>
                  <Link
                    className={`${styles.btn} ${styles.btnOrange}`}
                    to={{
                      pathname: ROUTES.REGISTER,
                      state: { background: location },
                    }}
                  >
                    Rejestracja
                  </Link>
                  <Link
                    className={styles.btn}
                    to={{
                      pathname: ROUTES.LOGIN,
                      state: { background: location },
                    }}
                  >
                    Logowanie
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
