import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import UserManagementPage from './pages/UserManagementPage';
import EbayPostsPage from './pages/eBayPostsPage';
import SettingsPage from './pages/SettingsPage';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/products" element={<PrivateRoute><ProductsPage /></PrivateRoute>} />
          <Route path="/product-details/:id" element={<PrivateRoute><ProductDetailsPage /></PrivateRoute>} />
          <Route path="/user-management" element={<PrivateRoute><UserManagementPage /></PrivateRoute>} />
          <Route path="/ebay-posts" element={<PrivateRoute><EbayPostsPage /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
