import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
  const location = useLocation();

  const getPageTitle = (path) => {
    switch (path) {
      case '/': return 'Dashboard';
      case '/rekonsiliasi': return 'Rekonsiliasi Jurnal';
      case '/mapping': return 'Mapping 4-Level';
      case '/laporan-ojk': return 'Laporan OJK';
      case '/entri-transaksi': return 'Entri Transaksi';
      case '/analitis': return 'Dashboard Analitis';
      case '/activity-log': return 'Activity Log';
      case '/users': return 'Manajemen Hak Akses';
      default: return 'BPJS ERP';
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={getPageTitle(location.pathname)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-[#f3f4f5]">
          <div className="mx-auto max-w-7xl">
             <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
