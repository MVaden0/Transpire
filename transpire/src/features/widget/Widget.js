import React from 'react';
import { Card } from '../card/Card';
import styles from './Widget.module.css';

export function Widget(props) {

  return (
    <Card title={props.title} subtitle={props.subtitle}>
       <div className={styles.widgetTitle}>
        $23.00
        <span className={styles.widgetSubtitle}>
            45%
        </span>
       </div>
       <div className={styles.widgetDescription}>
        this is a small description
       </div>
    </Card>
  );
}