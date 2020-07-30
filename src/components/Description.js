import React from 'react';
import styles from './Description.module.scss';
import PhoneBig from '../img/phone_big.png';
import arrowOne from '../img/arrow1.png';
import arrowTwo from '../img/arrow2.png';

export default function Description() {
  let scroll = () => {
    let scrollDistance = document.documentElement.clientHeight * 0.9;
    window.scrollBy(0, scrollDistance);
  };

  return (
    <section className={styles.description}>
      <button onClick={() => scroll()} className={styles.descriptionArrowsBtn}>
        <span></span>
        <span></span>
      </button>
      <h2 className={styles.descriptionTitle}>Jak to działa?</h2>
      <section className={styles.descriptionContainer}>
        {/* 1 */}
        <article className={styles.descriptionItem}>
          <img
            className={`${styles.itemImage} ${styles.firstPhone}`}
            src={PhoneBig}
            alt="phone-big"
          />
          <div className={` ${styles.itemText} ${styles.firstParagraph}`}>
            <p className={styles.itemTextTitle}>
              1 Lorem ipsum <br /> dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus enim
              amet fugiat nostrum ipsum ab deleniti esse quibusdam? Eveniet, alias?
            </p>
          </div>
        </article>
        {/* 2 */}
        <article className={styles.descriptionItem}>
          <div>
            <img
              className={`${styles.itemArrow} ${styles.secondArrow}`}
              src={arrowOne}
              alt="arrow-one"
            />
            <div className={` ${styles.itemText} ${styles.secondParagraph}`}>
              <p className={styles.itemTextTitle}>
                2 Lorem ipsum <br /> dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus enim
                amet fugiat nostrum ipsum ab deleniti esse quibusdam? Eveniet, alias?
              </p>
            </div>
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
              className={`${styles.itemArrow} ${styles.thirdArrow}`}
              src={arrowOne}
              alt="arrow-one"
            />
            <div className={` ${styles.itemText} ${styles.thirdParagraph}`}>
              <p className={styles.itemTextTitle}>
                3 Lorem ipsum <br /> dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus enim
                amet fugiat nostrum ipsum ab deleniti esse quibusdam? Eveniet, alias?
              </p>
            </div>
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
              className={`${styles.itemArrow} ${styles.fourthArrow}`}
              src={arrowTwo}
              alt="arrow-two"
            />
            <div className={` ${styles.itemText} ${styles.fouthParagraph}`}>
              <p className={styles.itemTextTitle}>
                4 Lorem ipsum <br /> dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus enim
                amet fugiat nostrum ipsum ab deleniti esse quibusdam? Eveniet, alias?
              </p>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
