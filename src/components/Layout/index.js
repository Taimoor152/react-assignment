import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout-main">
        <Header />
        <div className="layout-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;

