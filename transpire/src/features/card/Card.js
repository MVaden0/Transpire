import React from 'react';
import styles from './Card.module.css';

export function Card(props) {

  return (
    <div className={styles.card}>
        <div className={styles.cardTitle}>
            {props.title}
        </div>
        <div className={styles.cardContent}>
          {props.children}
        </div>
    </div>
  );
}
