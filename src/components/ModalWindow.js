import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './ModalWindow.module.scss';

export default function ModalWindow() {
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className={styles.modalBackground} onClick={back}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        Rejestracja
      </div>
    </div>
  );
}
