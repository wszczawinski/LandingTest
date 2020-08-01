import React, { useState } from 'react';
import styles from './Form.module.scss';

export default function Register() {
  let [submitted, setSubmitted] = useState(false);

  let handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <article className={styles.modalForm}>
      {submitted ? (
        <h2>Wysłano!</h2>
      ) : (
        <>
          <h2>Rejestracja</h2>
          <form className={styles.formContent} action="" method="post">
            <label>
              Nick
              <input type="text" />
            </label>
            <label>
              Email
              <input type="email" />
            </label>
            <label>
              Hasło
              <input type="password" />
            </label>
            <label>
              Powtórz hasło
              <input type="password" />
            </label>

            <button type="submit" onClick={handleSubmit}>
              Zarejestruj
            </button>
          </form>
        </>
      )}
    </article>
  );
}
