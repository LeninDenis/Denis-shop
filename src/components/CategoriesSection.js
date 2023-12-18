// src/components/CategoriesSection.js
import React from 'react';
import './styles/CategoriesSection.css';

const CategoriesSection = () => {
  return (
    <section id="categories" className="categories">
      <h2>Категории товаров</h2>
      <ul>
        <li><a href="#furniture">Мебель</a></li>
        <li><a href="#dishes">Посуда</a></li>
        <li><a href="#decor">Декор</a></li>
        <li><a href="#textile">Постельное белье</a></li>
        <li><a href="#electronics">Электроника</a></li>
      </ul>
    </section>
  );
};

export default CategoriesSection;
