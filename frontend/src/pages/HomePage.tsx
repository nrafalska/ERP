import * as React from 'react';
import Dashboard from '../components/Dashboard';
import api from '../api/api';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [dashboardData, setDashboardData] = React.useState<{
    totalParts: number;
    totalAdsOnEbay: number;
    totalEmployees: number;
    productsStatistics: any[];
  } | null>(null);

  React.useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        console.log('Fetching dashboard data...');
        const response = await api.get('/dashboard');
        setDashboardData(response.data);
        console.log('Dashboard data fetched:', response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  if (!dashboardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page">
      <h1>Home Page</h1> {/* Диагностическое сообщение */}
      <Dashboard
        totalParts={dashboardData.totalParts}
        totalAdsOnEbay={dashboardData.totalAdsOnEbay}
        totalEmployees={dashboardData.totalEmployees}
        productsStatistics={dashboardData.productsStatistics}
      />
    </div>
  );
};

export default HomePage;
