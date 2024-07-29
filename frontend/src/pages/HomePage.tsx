import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-page__stats">
        <div className="home-page__stat">Total parts: 10,353</div>
        <div className="home-page__stat">Total Ads on eBay: 10,353</div>
        <div className="home-page__stat">Total employees: 10,353</div>
      </div>
      <div className="home-page__chart">
        <h3>Title</h3>
        {/* Вставьте компонент графика здесь */}
      </div>
      <div className="home-page__employees">
        <h3>Employees</h3>
        <ul>
          <li>Helena - email@figmasfakedomain.net</li>
          <li>Oscar - email@figmasfakedomain.net</li>
          <li>Daniel - email@figmasfakedomain.net</li>
          <li>Daniel Jay Park - email@figmasfakedomain.net</li>
          <li>Mark Rojas - email@figmasfakedomain.net</li>
        </ul>
      </div>
      <div className="home-page__categories">
        <h3>Quantity by category</h3>
        <ul>
          <li>Car Doors: 2554</li>
          <li>Wheels: 2548</li>
          <li>Headlights: 2133</li>
          <li>Glasses: 1455</li>
          <li>Grids: 745</li>
        </ul>
      </div>
      <div className="home-page__recent">
        <h3>Added in the last 24 hours</h3>
        <ul>
          <li>Car Doors: +54</li>
          <li>Wheels: +48</li>
          <li>Headlights: +33</li>
          <li>Glasses: +55</li>
          <li>Grids: +45</li>
        </ul>
      </div>
      <div className="home-page__actions">
        <h3>Quick Action</h3>
        <p>Status: in Progress</p>
        <button>Start new parser</button>
        <button>Stop parser</button>
        <button>Check log</button>
      </div>
    </div>
  );
};

export default HomePage;
