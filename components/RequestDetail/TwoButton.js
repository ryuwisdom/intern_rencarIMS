import React from 'react';
import { useRouter } from 'next/router';
import styles from './TwoButton.scss';

export default function TwoButton({
  style,
  leftButtonValue,
  rightButtonValue,
  goToCancel,
  goToEdit,
  goToDispatching,
  isSuggestion,
}) {
  const router = useRouter();
  return (
    <div className={styles.button_wrap} style={style}>
      <input
        type='button'
        value={leftButtonValue}
        className={styles.left_button}
        onClick={() => {
          goToCancel();
        }}
      />
      <input
        type='button'
        value={rightButtonValue}
        className={styles.right_button}
        onClick={() => {
          isSuggestion ? goToEdit() : goToDispatching();
        }}
      />
    </div>
  );
}
