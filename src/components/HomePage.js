// src/pages/HomePage.js
import React from 'react';
import WelcomeSection from './WelcomeSection';
import PopularProductsSection from './PopularProductsSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-content">
      <WelcomeSection />
      <PopularProductsSection />
    </div>
  );
};

export default HomePage;
