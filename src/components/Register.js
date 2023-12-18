import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      // И обработать ответ (например, получить токен доступа)
      // В случае успешной регистрации, перенаправить пользователя на другую страницу
      navigate('/dashboard'); // Замените '/dashboard' на ваш путь после успешной регистрации
    } catch (error) {
      console.error('Ошибка регистрации:', error);
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
