import React, { useState } from 'react';
import dummyData from '../data/dummyData.json';
import { Users, UserPlus, Settings, MoreVertical, X } from 'lucide-react';

const ManajemenPengguna = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="space-y-6 relative">
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95">
            <div className="flex justify-between items-center p-5 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-800">Tambah Pengguna Baru</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue focus:border-bpjs-blue outline-none transition-all text-sm" placeholder="Masukkan nama..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue focus:border-bpjs-blue outline-none transition-all text-sm">
                  <option>Pilih Role</option>
                  <option>Maker</option>
                  <option>Checker</option>
                  <option>Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Departemen</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue focus:border-bpjs-blue outline-none transition-all text-sm">
                  <option>Finance</option>
                  <option>Investment</option>
                  <option>Risk Management</option>
                  <option>IT Support</option>
                </select>
              </div>
            </div>
            <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">Batal</button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-bpjs-blue hover:bg-blue-800 rounded-lg transition-colors shadow-sm">Simpan</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Manajemen Pengguna & Hak Akses</h1>
          <p className="text-slate-500 text-sm mt-1">Kelola peranan pengguna Maker, Checker, dan Administrator</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-bpjs-blue hover:bg-blue-800 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm text-sm"
        >
          <UserPlus className="w-4 h-4" /> Pengguna Baru
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="border-b border-slate-200 px-2 flex">
          {['All', 'Maker', 'Checker', 'Admin'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-bpjs-blue text-bpjs-blue' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
            >
              {tab} ( {tab === 'All' ? dummyData.users.length : dummyData.users.filter(u => u.role === tab).length} )
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-100">
                <th className="py-3 px-4 font-medium">Nama Pengguna</th>
                <th className="py-3 px-4 font-medium">Role</th>
                <th className="py-3 px-4 font-medium">Departemen</th>
                <th className="py-3 px-4 font-medium text-center">Status</th>
                <th className="py-3 px-4 font-medium w-16"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {dummyData.users.filter(u => activeTab === 'All' || u.role === activeTab).map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs border border-slate-200">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="font-medium text-slate-800">{user.name}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${
                      user.role === 'Maker' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' :
                      user.role === 'Checker' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                      'bg-slate-50 text-slate-700 border-slate-200'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{user.department}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-2 py-0.5 inline-flex text-xs leading-5 font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 cursor-pointer">
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-slate-400 hover:text-slate-700 transition-colors p-1.5 rounded hover:bg-slate-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManajemenPengguna;
