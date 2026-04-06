import React, { useState } from 'react';
import dummyData from '../data/dummyData.json';
import { Search, Filter, Download } from 'lucide-react';

const RekonsiliasiJurnal = () => {
  const [filterType, setFilterType] = useState('All');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Dashboard Rekonsiliasi Jurnal</h1>
          <p className="text-slate-500 text-sm mt-1">Rekonsiliasi otomatis Transaksi vs Saldo Kas</p>
        </div>
        <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm text-sm">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-4 border-b border-slate-200 flex flex-wrap gap-4 justify-between items-center bg-slate-50/50 rounded-t-xl">
          <div className="relative w-72">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Cari referensi atau deskripsi..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue focus:border-bpjs-blue outline-none transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue outline-none"
            >
              <option value="All">Semua Tipe</option>
              <option value="Debit">Debit</option>
              <option value="Credit">Credit</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-medium">
                <th className="py-3 px-4">Ref ID</th>
                <th className="py-3 px-4">Tanggal Jurnal</th>
                <th className="py-3 px-4">Deskripsi</th>
                <th className="py-3 px-4">Akun Mapping</th>
                <th className="py-3 px-4 text-center">Tipe</th>
                <th className="py-3 px-4 text-right">Nominal (Rp)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dummyData.transactions
                .filter(t => filterType === 'All' || t.type === filterType)
                .map((trx) => (
                <tr key={trx.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="py-3 px-4 font-mono text-slate-700 font-medium">{trx.id}</td>
                  <td className="py-3 px-4 text-slate-600">{trx.date}</td>
                  <td className="py-3 px-4 text-slate-800">{trx.description}</td>
                  <td className="py-3 px-4 text-slate-600">{trx.account}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold border ${
                      trx.type === 'Credit' ? 'bg-bpjs-green/10 text-bpjs-green border-bpjs-green/20' : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {trx.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-medium text-slate-700">
                    {trx.amount.toLocaleString('id-ID')}
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

export default RekonsiliasiJurnal;
