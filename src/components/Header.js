import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './Домашний комфорт.png';

const Header = () => {
  return (
    <header>
                <Link to="/">
                    <img src={logo} alt="" className="header-logo" style={{ width: '100px', height: '100px' }}/>
                </Link>
            <div className="nav-item">
                    <Link to="/main">Главная</Link>
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/discounts">Акции и скидки</Link>
                    <Link to="/about">О нас</Link>
                </div>
          <div className="user-actions">
            <Link to="/login">Войти</Link>
            <Link to="/register">Зарегистрироваться</Link>
          </div>
    </header>
  );
};

export default Header;
