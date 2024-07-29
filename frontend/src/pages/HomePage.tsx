import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="header-item">
          <h3>Total parts</h3>
          <p>10,353</p>
        </div>
        <div className="header-item">
          <h3>Total Ads on Ebay</h3>
          <p>10,353</p>
        </div>
        <div className="header-item">
          <h3>Total employees</h3>
          <p>10,353</p>
        </div>
      </div>
      <div className="content">
        <div className="main-chart">
          <h3>Title</h3>
          <div className="chart"> {/* Placeholder for chart */} </div>
        </div>
        <div className="side-info">
          <div className="employees">
            <h3>Employees</h3>
            <ul>
              <li>Helena - email@figmasfakedomain.net</li>
              <li>Oscar - email@figmasfakedomain.net</li>
              <li>Daniel - email@figmasfakedomain.net</li>
              <li>Daniel Jay Park - email@figmasfakedomain.net</li>
              <li>Mark Rojas - email@figmasfakedomain.net</li>
            </ul>
          </div>
          <div className="quick-action">
            <h3>Quick Action</h3>
            <p>Status: <span className="status">in Progress</span></p>
            <button>Start new parser</button>
            <button>Stop parser</button>
            <button>Check log</button>
          </div>
        </div>
        <div className="category-info">
          <h3>Quantity by category</h3>
          <table>
            <tr><td>Car Doors</td><td>2554</td></tr>
            <tr><td>Wheels</td><td>2548</td></tr>
            <tr><td>Headlights</td><td>2133</td></tr>
            <tr><td>Glasses</td><td>1455</td></tr>
            <tr><td>Grids</td><td>745</td></tr>
          </table>
        </div>
        <div className="last-24-hours">
          <h3>Added in the last 24 hours</h3>
          <table>
            <tr><td>Car Doors</td><td>+54</td></tr>
            <tr><td>Wheels</td><td>+48</td></tr>
            <tr><td>Headlights</td><td>+33</td></tr>
            <tr><td>Glasses</td><td>+55</td></tr>
            <tr><td>Grids</td><td>+45</td></tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
