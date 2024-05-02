import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h3>Created by the Scrumbags</h3>
        <ul>
          <li>Alexandra Bomberg</li>
          <li>Miski M. Manzizila</li>
          <li>Wilma Norman</li>
          <li>Lisette Swan</li>
          <li>Maria Hendricks</li>
        </ul>
      </div>
      <div className={styles.footerCenter}>
      <img src="/Images/logo_transparant.png" alt="Logo transparant" style={{ maxWidth: '100px' }} />
      </div>
      <div className={styles.footerRight}>
        <p>The Scrum Guide Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;