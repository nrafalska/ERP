import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">SellGlobally ERP</h2>
      </div>
      <div className="sidebar-section">
        <h3 className="sidebar-section-title">Discover</h3>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/sellers" className={({ isActive }) => (isActive ? 'active' : '')}>
                Sellers
              </NavLink>
            </li>
            <li>
              <NavLink to="/parser" className={({ isActive }) => (isActive ? 'active' : '')}>
                Parser
              </NavLink>
            </li>
            <li>
              <NavLink to="/ebay-posts" className={({ isActive }) => (isActive ? 'active' : '')}>
                eBay Posts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-section-title">Quick Action</h3>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/add-item" className={({ isActive }) => (isActive ? 'active' : '')}>
                Add new item
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-post" className={({ isActive }) => (isActive ? 'active' : '')}>
                Add new post to eBay
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-section-title">Account</h3>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/log-of-parser" className={({ isActive }) => (isActive ? 'active' : '')}>
                Log of parser
              </NavLink>
            </li>
            <li>
              <NavLink to="/employees" className={({ isActive }) => (isActive ? 'active' : '')}>
                Employees
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : '')}>
                Log out
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
