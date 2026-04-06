import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardAnalitis from './pages/DashboardAnalitis';
import RekonsiliasiJurnal from './pages/RekonsiliasiJurnal';
import MappingAkun from './pages/MappingAkun';
import LaporanSEOJK from './pages/LaporanSEOJK';
import ManajemenTransaksi from './pages/ManajemenTransaksi';
import LogAktivitas from './pages/LogAktivitas';
import ManajemenPengguna from './pages/ManajemenPengguna';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardAnalitis />} />
          <Route path="analitis" element={<Navigate to="/" replace />} />
          <Route path="rekonsiliasi" element={<RekonsiliasiJurnal />} />
          <Route path="mapping" element={<MappingAkun />} />
          <Route path="laporan-ojk" element={<LaporanSEOJK />} />
          <Route path="entri-transaksi" element={<ManajemenTransaksi />} />
          <Route path="activity-log" element={<LogAktivitas />} />
          <Route path="users" element={<ManajemenPengguna />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
