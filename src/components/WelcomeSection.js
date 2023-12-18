// src/components/WelcomeSection.js
import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <h2>Добро пожаловать в интернет-магазин Домашний Комфорт!</h2>
      <p className="text-muted">У нас вы найдете все для вашего уюта и комфорта в доме. Проверьте наши акции и новинки.</p>
    </section>
  );
};

export default WelcomeSection;
