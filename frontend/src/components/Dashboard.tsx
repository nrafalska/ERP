import * as React from 'react';

interface DashboardProps {
  totalParts: number;
  totalAdsOnEbay: number;
  totalEmployees: number;
  productsStatistics: any[];
}

const Dashboard: React.FC<DashboardProps> = ({
  totalParts,
  totalAdsOnEbay,
  totalEmployees,
  productsStatistics,
}) => {
  console.log('Rendering Dashboard with data:', {
    totalParts,
    totalAdsOnEbay,
    totalEmployees,
    productsStatistics,
  });

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Parts: {totalParts}</p>
      <p>Total Ads on eBay: {totalAdsOnEbay}</p>
      <p>Total Employees: {totalEmployees}</p>
      <div>
        <h3>Products Statistics</h3>
        {/* Render your productsStatistics here */}
        {productsStatistics.map((stat, index) => (
          <div key={index}>{/* Customize as needed */}</div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
