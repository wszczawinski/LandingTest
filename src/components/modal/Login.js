import React, { useState } from 'react';
import styles from './Form.module.scss';

export default function Login() {
  let [submitted, setSubmitted] = useState(false);

  let handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <article className={styles.modalForm}>
      {submitted ? (
        <h2>Zalogowano!</h2>
      ) : (
        <>
          <h2>Logowanie</h2>
          <form className={styles.formContent} action="" method="post">
            <label>
              Email
              <input type="email" />
            </label>
            <label>
              Hasło
              <input type="password" />
            </label>

            <button type="submit" onClick={handleSubmit}>
              Zaloguj
            </button>
          </form>
        </>
      )}
    </article>
  );
}
