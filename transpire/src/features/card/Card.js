import React from 'react';
import styles from './Card.module.css';

export function Card(props) {

  return (
    <div className={styles.card}>
        <div className={styles.cardTitle}>
            Title
            <div className={styles.cardSubtitle}>
              this is a subtitle
            </div>
        </div>
        {props.children}
    </div>
  );
}
