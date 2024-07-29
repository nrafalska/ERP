import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Изменено на useNavigate
import './LoginPage.css'; // Импорт CSS-файла
import logo from '../assets/logo.png'; // Импорт логотипа
import { useAuth } from '../context/AuthContext'; // Импорт useAuth из AuthContext

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Изменено на useNavigate
  const { login } = useAuth(); // Использование функции login из контекста AuthContext

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена', { username, password }); // Отладочный вывод

    if (username && password) {
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.success) {
          console.log('Успешный вход'); // Отладочный вывод
          await login(username, password); // Вызов функции login из контекста AuthContext
          navigate('/home'); // Перенаправление после успешного входа
        } else {
          console.log('Ошибка входа'); // Отладочный вывод
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('Введите имя пользователя и пароль'); // Отладочный вывод
    }
  };

  return (
    <div className="login-page">
      <img src={logo} alt="logo" className="logo" />
      <h1>SellGlobally ERP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
