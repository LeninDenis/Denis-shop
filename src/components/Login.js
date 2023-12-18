import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Отправить учетные данные (email, password) на сервер для проверки
      // И обработать ответ (например, получить токен доступа)
      // В случае успешного входа, перенаправить пользователя на другую страницу
      navigate('/dashboard'); // Замените '/dashboard' на ваш путь после успешного входа
    } catch (error) {
      console.error('Ошибка входа:', error);
      // Обработать ошибку входа, например, показать сообщение об ошибке
    }
  };

  return (
    <div className="login-form">
      <h2>Вход</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="login-email">Email:</label>
        <input
          type="email"
          id="login-email"
          name="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="login-password">Пароль:</label>
        <input
          type="password"
          id="login-password"
          name="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;