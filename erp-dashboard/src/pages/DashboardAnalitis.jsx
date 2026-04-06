import React from 'react';
import dummyData from '../data/dummyData.json';
import { TrendingUp, TrendingDown, DollarSign, Activity, PieChart, Wallet } from 'lucide-react';

const CardMetric = ({ title, amount, trending, icon: Icon, colorClass, gradient }) => (
  <div className={`rounded-xl p-6 relative overflow-hidden ${colorClass}`}>
    <div className={`absolute right-0 top-0 w-32 h-32 rounded-full transform translate-x-12 -translate-y-12 opacity-10 bg-current`}></div>
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div>
        <p className="text-sm font-medium mb-1 opacity-90">{title}</p>
        <h3 className="text-3xl font-bold font-manrope">Rp {(amount / 1000000000).toFixed(1)}T</h3>
      </div>
      <div className={`p-3 rounded-lg bg-white/20 backdrop-blur-sm`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div className="flex items-center gap-1.5 text-sm font-medium relative z-10">
      {trending >= 0 ? (
        <span className="flex items-center gap-1 text-emerald-100 bg-emerald-900/30 px-2 py-0.5 rounded-full">
          <TrendingUp className="w-3.5 h-3.5" /> +{trending}% Bbl
        </span>
      ) : (
        <span className="flex items-center gap-1 text-rose-100 bg-rose-900/30 px-2 py-0.5 rounded-full">
          <TrendingDown className="w-3.5 h-3.5" /> {trending}% Bbl
        </span>
      )}
    </div>
  </div>
);

const DashboardAnalitis = () => {
  const totalAsetBpjs = dummyData.asetBpjs.reduce((sum, item) => sum + item.amount, 0);
  const totalAsetDjs = dummyData.asetDjs.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight font-manrope">Eksekutif Analitis Keuangan</h1>
          <p className="text-slate-500 text-sm mt-1">Ringkasan Posisi Keuangan BPJS & DJS</p>
        </div>
        <div className="flex bg-white rounded-lg p-1 border border-slate-200">
          <button className="px-4 py-1.5 text-sm font-bold bg-slate-100 text-slate-800 rounded-md">Bulan Ini</button>
          <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-800">Q1 2026</button>
          <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-800">Tahun 2026</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardMetric 
          title="Total Aset BPJS" 
          amount={totalAsetBpjs} 
          trending={3.2} 
          icon={Wallet}
          colorClass="bg-gradient-to-br from-bpjs-blue to-[#003c73] text-white shadow-md"
        />
        <CardMetric 
          title="Total Aset DJS" 
          amount={totalAsetDjs} 
          trending={-1.5} 
          icon={PieChart}
          colorClass="bg-gradient-to-br from-bpjs-green to-[#006d38] text-white shadow-md"
        />
        <CardMetric 
          title="Pembayaran Klaim Bulan Ini" 
          amount={18000000000} 
          trending={5.4} 
          icon={Activity}
          colorClass="bg-white border text-slate-800 border-slate-200 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Aset BPJS Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 overflow-hidden">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3">Rincian Aset BPJS</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-slate-500 font-medium border-b border-slate-100">
                  <th className="py-2 px-1">Nama Akun</th>
                  <th className="py-2 px-1 text-right">Saldo (Rp)</th>
                  <th className="py-2 px-1 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {dummyData.asetBpjs.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-1 text-slate-700 font-medium">{item.name}</td>
                    <td className="py-3 px-1 text-right font-mono text-slate-600">{(item.amount).toLocaleString('id-ID')}</td>
                    <td className="py-3 px-1 text-center">
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Aset DJS Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 overflow-hidden">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3">Rincian Aset DJS</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-slate-500 font-medium border-b border-slate-100">
                  <th className="py-2 px-1">Nama Akun</th>
                  <th className="py-2 px-1 text-right">Saldo (Rp)</th>
                  <th className="py-2 px-1 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {dummyData.asetDjs.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-1 text-slate-700 font-medium">{item.name}</td>
                    <td className="py-3 px-1 text-right font-mono text-slate-600">{(item.amount).toLocaleString('id-ID')}</td>
                    <td className="py-3 px-1 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                        item.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'
                      }`}>{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalitis;
