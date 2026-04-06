import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardAnalitis from './pages/DashboardAnalitis';
import DaftarSlipJurnal from './pages/DaftarSlipJurnal';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardAnalitis />} />
          <Route path="analitis" element={<Navigate to="/" replace />} />
          <Route path="rekonsiliasi" element={<DaftarSlipJurnal />} />
          <Route path="mapping" element={<PlaceholderPage title="Mapping 4-Level" />} />
          <Route path="laporan-ojk" element={<PlaceholderPage title="Otomasi Laporan OJK" />} />
          <Route path="entri-transaksi" element={<PlaceholderPage title="Entri Transaksi Jurnal" />} />
          <Route path="activity-log" element={<PlaceholderPage title="Activity Log & Audit Trail" />} />
          <Route path="users" element={<PlaceholderPage title="Manajemen Hak Akses" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
