import React, { useState } from 'react';
import dummyData from '../data/dummyData.json';
import { FileText, Download, Eye, FileSpreadsheet, Send } from 'lucide-react';

const LaporanSEOJK = () => {
  const [showToast, setShowToast] = useState(false);

  const handleGenerate = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="space-y-6 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-0 right-0 bg-bpjs-green text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-4 z-50">
          <Send className="w-5 h-5" />
          <div>
            <p className="font-bold text-sm">Laporan Berhasil Dibuat!</p>
            <p className="text-xs text-white/90">Laporan SEOJK siap diunduh dalam format PDF/Excel.</p>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Otomasi Laporan SEOJK</h1>
          <p className="text-slate-500 text-sm mt-1">Pembuatan laporan terstandarisasi SEOJK 22/2023</p>
        </div>
        <button 
          onClick={handleGenerate}
          className="bg-bpjs-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm"
        >
          <FileText className="w-4 h-4" /> Generate Semua Laporan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyData.laporanSeojk.map((laporan) => (
          <div key={laporan.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-slate-50 rounded-lg text-bpjs-blue border border-slate-100">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                laporan.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                laporan.status === 'In Review' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                'bg-slate-50 text-slate-600 border-slate-200'
              }`}>
                {laporan.status}
              </span>
            </div>
            
            <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2 flex-grow">{laporan.title}</h3>
            
            <div className="text-sm text-slate-500 mb-6 space-y-1">
              <p>Periode: <span className="font-medium text-slate-700">{laporan.periode}</span></p>
              <p>Tanggal Modifikasi: <span>{laporan.lastModified}</span></p>
            </div>
            
            <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">
              <button className="flex-1 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 transition-colors flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" /> Pratinjau
              </button>
              <button className="flex-1 py-2 bg-bpjs-green/10 hover:bg-bpjs-green/20 text-bpjs-green rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Unduh
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaporanSEOJK;
