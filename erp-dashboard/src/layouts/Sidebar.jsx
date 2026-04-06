import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileSpreadsheet,
  Network,
  FileText,
  PenSquare,
  Activity,
  Users
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Rekonsiliasi Jurnal', path: '/rekonsiliasi', icon: <FileSpreadsheet size={20} /> },
    { name: 'Mapping 4-Level', path: '/mapping', icon: <Network size={20} /> },
    { name: 'Laporan OJK', path: '/laporan-ojk', icon: <FileText size={20} /> },
    { name: 'Entri Transaksi', path: '/entri-transaksi', icon: <PenSquare size={20} /> },
    { name: 'Dashboard Analitis', path: '/analitis', icon: <Activity size={20} /> },
    { name: 'Activity Log', path: '/activity-log', icon: <FileText size={20} /> },
    { name: 'Manajemen Hak Akses', path: '/users', icon: <Users size={20} /> },
  ];

  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-bpjs-blue tracking-tight">BPJS ERP</h1>
        <p className="text-xs text-slate-500 mt-1">Financial Dashboard</p>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-bpjs-blue text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-bpjs-blue'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-bpjs-green text-white flex items-center justify-center font-bold text-sm">
            AD
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700">Admin BPJS</p>
            <p className="text-xs text-slate-500">Superadmin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
