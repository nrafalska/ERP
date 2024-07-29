import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import UserManagementPage from './pages/UserManagementPage';
import EbayPostsPage from './pages/eBayPostsPage';
import SettingsPage from './pages/SettingsPage';
import SellersPage from './pages/SellersPage';
import ParserPage from './pages/ParserPage';  // Добавьте этот маршрут
import LogOfParserPage from './pages/LogOfParserPage';  // Добавьте этот маршрут
import EmployeesPage from './pages/EmployeesPage';  // Добавьте этот маршрут
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import PageLayout from './components/PageLayout';
import AddItemPage from './pages/AddItemPage';
import AddPostPage from './pages/AddPostPage';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <PageLayout>
                  <HomePage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <PageLayout>
                  <ProductsPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/product-details/:id"
            element={
              <PrivateRoute>
                <PageLayout>
                  <ProductDetailsPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/user-management"
            element={
              <PrivateRoute>
                <PageLayout>
                  <UserManagementPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/ebay-posts"
            element={
              <PrivateRoute>
                <PageLayout>
                  <EbayPostsPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <PageLayout>
                  <SettingsPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/sellers"
            element={
              <PrivateRoute>
                <PageLayout>
                  <SellersPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/parser"
            element={
              <PrivateRoute>
                <PageLayout>
                  <ParserPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/log-of-parser"
            element={
              <PrivateRoute>
                <PageLayout>
                  <LogOfParserPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <PrivateRoute>
                <PageLayout>
                  <EmployeesPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/add-item"
            element={
              <PrivateRoute>
                <PageLayout>
                  <AddItemPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/add-post"
            element={
              <PrivateRoute>
                <PageLayout>
                  <AddPostPage />
                </PageLayout>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
