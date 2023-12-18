import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Register';
import ProductPage from './components/ProductPage';
import Discount from './components/Discount';
import HomePage from './components/HomePage';
import ProductCatalog from './components/ProductCatalog';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/discounts" element={<Discount />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
