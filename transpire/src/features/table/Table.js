import React from 'react';
import { Card } from '../card/Card';
import styles from './Table.module.css';

export function Table(props) {

  return (
    <Card title={props.title} subtitle={props.subtitle}>
        <table class={styles.table}>
        <tr className={styles.tableHeader}>
            <th>Company</th>
            <th>Company</th>
            <th>Company</th>
        </tr>
        <tr className={styles.tableRow}>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr className={styles.tableRow}>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        </table>
    </Card>
  );
}