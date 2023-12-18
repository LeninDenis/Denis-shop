// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeSection from './WelcomeSection';
import CategoriesSection from './CategoriesSection';
import PopularProductsSection from './PopularProductsSection';

const HomePage = () => {
  return (
    <div className="col-md-12">
      <WelcomeSection />
      <CategoriesSection />
      <PopularProductsSection />
      {/* Ссылка для перехода на страницу с товарами */}
      <Link to="/products">Посмотреть товары</Link>
    </div>
  );
};

export default HomePage;
