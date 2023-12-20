import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/Register.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:22867', { name, email, password });
  
      if (response.data.success) {
        navigate('/');
      } else {
        console.error('Ошибка регистрации:', response.data.error);
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error);
  
      if (error.response) {
        console.error('Детали ошибки:', error.response.data);
      }
  
    }
  };
  
  return (
    <div className="registerpage-content">
    <div className="registration-form">
      <h2>Регистрация</h2>
      <form onSubmit={handleRegistration}>
        <label htmlFor="registration-name">Имя:</label>
        <input
          type="text"
          id="registration-name"
          name="registration-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="registration-email">Email:</label>
        <input
          type="email"
          id="registration-email"
          name="registration-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="registration-password">Пароль:</label>
        <input
          type="password"
          id="registration-password"
          name="registration-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
    </div>
  );
};

export default Registration;
