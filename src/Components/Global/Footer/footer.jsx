import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Created by the Scrumbags</h3>
        <ul>
          <li>Alexandra Bomberg</li>
          <li>Miski M. Manzizila</li>
          <li>Wilma Norman</li>
          <li>Lisette Swan</li>
          <li>Maria Hendricks</li>
        </ul>
      </div>

      <div className="footer-center">
      <img src="/Images/logo_transparant.png" alt="Logo transparant" style={{ maxWidth: '100px' }} />
      </div>

      <div className="footer-right">
        <p>The Scrum Guide Copyright 2024</p>
      </div>

    </footer>
  );
};

export default Footer;