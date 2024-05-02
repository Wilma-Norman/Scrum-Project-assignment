import React from 'react';
import { Essence } from '../../../data/data';
import styles from './ThreePillars.module.css';

const Pillar = ({ title, content, postscript }) => (
  <div className={styles.pillar}>
    <h2>{title}</h2>
    <p>{content}</p>
    <p className={styles.postscript}>{postscript}</p>
  </div>
);

const ThreePillars = () => {
  return (
    <div className={styles.container}>
      <h1>{Essence.empiricismText}</h1>
      <Pillar title="Inspection" content={Essence.inspectionText} postscript={Essence.inspectionPS} />
      <Pillar title="Adaptation" content={Essence.adaptionText} postscript={Essence.adaptionPS} />
      <Pillar title="Transparency" content={Essence.transparencyText} postscript={Essence.transparencyPS} />
    </div>
  );
};

export default ThreePillars;