import React from 'react';
import Sidebar from './Sidebar';
import './PageLayout.css';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
