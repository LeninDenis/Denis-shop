import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Убедитесь, что у вас установлен пакет axios
import './Register.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {
      // Отправить учетные данные (name, email, password) на сервер для создания аккаунта
      const response = await axios.post('ваш_урл_регистрации', { name, email, password });
  
      // Проверка успешной регистрации
      if (response.data.success) {
        // В случае успешной регистрации, перенаправить пользователя на другую страницу
        navigate('/dashboard'); // Замените '/dashboard' на ваш путь после успешной регистрации
      } else {
        // В случае неудачной регистрации, обработать ошибку и, возможно, показать сообщение об ошибке
        console.error('Ошибка регистрации:', response.data.error);
        // Ваша логика для обработки неудачной регистрации
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error);
  
      // Проверка, если есть более детальная информация об ошибке от сервера
      if (error.response) {
        console.error('Детали ошибки:', error.response.data);
      }
  
      // Обработать ошибку регистрации, например, показать сообщение об ошибке
    }
  };
  
  return (
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
  );
};

export default Registration;
