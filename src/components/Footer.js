// Footer.js
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h4>Контактная информация:</h4>
        <p>Адрес: ул. Манаса 34/1, Алматы, Казахстан</p>
        <p>Телефон: +7-800-555-35-35</p>
      </div>

      <div className="footer-section">
        <h4>Посмотреть на карте:</h4>
        <p>
          <a href="https://www.google.com/maps/place/Международный+университет+информационных+технологий/@43.2321946,76.904822,15.65z/data=!4m6!3m5!1s0x3883692f027581ad:0x2426740f56437e63!8m2!3d43.2351489!4d76.9096536!16s%2Fm%2F0cr575r?entry=ttu">
            Посмотреть на карте
          </a>
        </p>
      </div>

      <div className="footer-section">
        <h4>Мы в Instagram:</h4>
        <p>
          <a href="https://www.instagram.com/iitu_kz/">Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
