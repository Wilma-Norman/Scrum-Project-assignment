import React from 'react';
import { Essence } from '../../../data/data';
import styles from './ThreePillars.module.css';

const ThreePillars = () => {
  return (
    <div className={styles.card}>
      <div className={styles.leftColumn}>
        <div className={styles.header}>
        The three pillars of empiricism
      </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.body}>
        Framework of development needs pillars to be supported in the concept of working iteratively and to make it resilient to adverse effects. For Scrum these pillars are:
      </div>
      </div>
      </div>
  );
};

export default ThreePillars;