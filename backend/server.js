const express = require('express');
const cors = require('cors');
const app = express();

// Разрешить CORS для всех маршрутов
app.use(cors());

app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Проверьте учетные данные пользователя здесь
  if (username === 'admin' && password === 'password') {
    res.json({ success: true, token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Добавить маршрут для получения данных панели управления
app.get('/api/dashboard', (req, res) => {
  const dashboardData = {
    totalParts: 100,
    totalAdsOnEbay: 50,
    totalEmployees: 20,
    productsStatistics: [
      { productName: 'Product A', sales: 10 },
      { productName: 'Product B', sales: 20 },
    ],
  };
  res.json(dashboardData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
