import React from 'react';
import styles from './Description.module.scss';
import PhoneBig from '../img/phone_big.png';
import arrowOne from '../img/arrow1.png';
import arrowTwo from '../img/arrow2.png';

export default function Description() {
  return (
    <section className={styles.description}>
      <button className={styles.descriptionArrowsBtn}>
        <span></span>
        <span></span>
      </button>
      <h2>Jak to działa?</h2>
      <section className={styles.descriptionContainer}>
        {/* 1 */}
        <article className={styles.descriptionItem}>
          <img
            className={`${styles.itemImage} ${styles.firstPhone}`}
            src={PhoneBig}
            alt="phone-big"
          />
          <div className={styles.firstParagraph}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus enim
              amet fugiat nostrum ipsum ab deleniti esse quibusdam? Eveniet, alias?
            </p>
          </div>
        </article>
        {/* 2 */}
        <article className={styles.descriptionItem}>
          <div>
            <img className={`${styles.arrow}`} src={arrowOne} alt="arrow-one" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus enim
              amet fugiat nostrum ipsum ab deleniti esse quibusdam? Eveniet, alias?
            </p>
          </div>
          <img
            className={`${styles.itemImage} ${styles.secondPhone}`}
            src={PhoneBig}
            alt="phone-big"
          />
        </article>
        {/* 3 */}
        <article className={styles.descriptionItem}>
          <img className={`${styles.itemImage}`} src={PhoneBig} alt="phone-big" />
          <div className={styles.firstParagraph}>
            <img
              className={`${styles.arrow} ${styles.thirdArrow}`}
              src={arrowOne}
              alt="arrow-one"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus enim
              amet fugiat nostrum ipsum ab deleniti esse quibusdam? Eveniet, alias?
            </p>
          </div>
        </article>
        {/* 4 */}
        <article className={styles.descriptionItem}>
          <img
            className={`${styles.itemImage} ${styles.fourthPhone}`}
            src={PhoneBig}
            alt="phone-big"
          />
          <div>
            <img
              className={`${styles.arrow} ${styles.fourthArrow}`}
              src={arrowTwo}
              alt="arrow-two"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus enim
              amet fugiat nostrum ipsum ab deleniti esse quibusdam? Eveniet, alias?
            </p>
          </div>
        </article>
      </section>
    </section>
  );
}
