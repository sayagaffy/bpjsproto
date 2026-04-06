import React, { useState } from 'react';
import dummyData from '../data/dummyData.json';
import { PenSquare, Send, CheckCircle2, ChevronRight, Calculator, FileImage, Sparkles, Loader2 } from 'lucide-react';

const ManajemenTransaksi = () => {
  const [showToast, setShowToast] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);
  const [transactions, setTransactions] = useState(dummyData.transactions);
  const [formData, setFormData] = useState({ description: '', amount: '', account: 'Kas DJS', type: 'Debit' });

  const handleSimpan = (e) => {
    e.preventDefault();
    const newTrx = {
       id: `TRX-${Math.floor(Math.random() * 10000)}`,
       date: formData.date || "2026-04-10",
       description: formData.description,
       account: formData.account,
       type: formData.type,
       amount: parseInt(formData.amount)
    };
    setTransactions([newTrx, ...transactions]);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setFormData({ description: '', amount: '', account: 'Kas DJS', type: 'Debit' });
    }, 3000);
  };

  const handleAIUpload = () => {
    setIsScanning(true);
    setTimeout(() => {
       setIsScanning(false);
       setScanSuccess(true);
       
       // Simulasi OCR memecah tagihan menjadi Beban Tagihan & Pajak
       const aiExtracted = [
         { id: 'TRX-AI01', date: '2026-04-06', description: '[AI] Beban Jaminan Kesehatan (Klaim RSCM)', account: 'Hutang Klaim DJS', type: 'Credit', amount: 100000000 },
         { id: 'TRX-AI02', date: '2026-04-06', description: '[AI] Otomasi Pajak - Taksiran PPh Badan (2%)', account: 'Hutang Pajak PPh', type: 'Credit', amount: 2000000 },
         { id: 'TRX-AI03', date: '2026-04-06', description: '[AI] Pelunasan Tagihan Kas DJS', account: 'Kas DJS', type: 'Debit', amount: 98000000 },
       ];
       
       setTransactions([...aiExtracted, ...transactions]);
       
       setTimeout(() => setScanSuccess(false), 4000);
    }, 2500);
  };

  return (
    <div className="space-y-6 relative">
      {/* Toast */}
      {showToast && (
        <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-4 z-50">
          <CheckCircle2 className="w-5 h-5" />
          <div>
            <p className="font-bold text-sm">Entri Berhasil Tersimpan!</p>
            <p className="text-xs text-white/90">Transaksi telah ditambahkan ke antrian approval Checker.</p>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Entri Transaksi Jurnal</h1>
          <p className="text-slate-500 text-sm mt-1">Modul pencatatan transaksi manual oleh Maker</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Entri & AI */}
        <div className="lg:col-span-1 space-y-6">
          {/* AI Banner */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-sm border border-indigo-100 overflow-hidden">
            <div className="p-4 border-b border-indigo-100 flex items-center gap-2">
               <Sparkles className="w-5 h-5 text-indigo-600" />
               <h2 className="font-bold text-indigo-900">AI Document OCR</h2>
            </div>
            <div className="p-5 text-center">
               <p className="text-xs text-indigo-700 mb-4">Upload Kwitansi Faskes. AI akan membaca nominal tagihan dan otomatis memecah jurnal taksiran PPh Badan.</p>
               <button 
                 onClick={handleAIUpload}
                 disabled={isScanning}
                 className="w-full flex flex-col items-center justify-center gap-3 py-6 px-4 bg-white border-2 border-dashed border-indigo-300 rounded-xl hover:bg-indigo-50 hover:border-indigo-500 transition-all font-medium text-indigo-600"
               >
                 {isScanning ? (
                    <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
                 ) : (
                    <FileImage className="w-8 h-8 text-indigo-400" />
                 )}
                 <span>{isScanning ? 'Memproses Ekstraksi AI...' : 'Upload Bukti Tagihan (PDF/JPG)'}</span>
               </button>
               {scanSuccess && <p className="text-xs mt-3 text-emerald-600 font-bold animate-pulse">Berhasil! 3 Baris Transaksi + Pajak dientri otomatis.</p>}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex items-center gap-2">
              <PenSquare className="w-5 h-5 text-bpjs-blue" />
              <h2 className="font-bold text-slate-700">Form Jurnal Manual</h2>
            </div>
            <form onSubmit={handleSimpan} className="p-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal Transaksi</label>
              <input type="date" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Deskripsi Transaksi</label>
              <textarea 
                required 
                rows="3" 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue outline-none text-sm resize-none" 
                placeholder="Misal: Penerimaan Iuran Bulan April 2026..."
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Akun Referensi</label>
              <select 
                value={formData.account}
                onChange={(e) => setFormData({...formData, account: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue outline-none text-sm"
              >
                <option>Kas DJS</option>
                <option>Hutang Klaim DJS</option>
                <option>Kas Operasional BPJS</option>
                <option>Beban IT BPJS</option>
              </select>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-1">Tipe</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue outline-none text-sm"
                >
                  <option>Debit</option>
                  <option>Credit</option>
                </select>
              </div>
              <div className="flex-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Nominal (Rp)</label>
                <input 
                  type="number" 
                  required 
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bpjs-blue outline-none text-sm" 
                  placeholder="0" 
                />
              </div>
            </div>
            <button type="submit" className="w-full mt-2 flex items-center justify-center gap-2 bg-bpjs-blue hover:bg-blue-800 text-white py-2.5 rounded-lg px-4 font-bold transition-colors shadow-sm">
              <Send className="w-4 h-4" /> Simpan Entri
            </button>
          </form>
          </div>
        </div>

        {/* Neraca Saldo Preview */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col">
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-bpjs-blue" />
                <h2 className="font-bold text-slate-700">Preview Neraca Saldo Berjalan</h2>
              </div>
              <button className="text-sm text-bpjs-blue font-medium hover:underline flex items-center">Lihat Semua <ChevronRight className="w-4 h-4" /></button>
            </div>
            <div className="p-0 overflow-x-auto flex-1">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
                    <th className="py-2.5 px-4">Ref ID</th>
                    <th className="py-2.5 px-4">Akun</th>
                    <th className="py-2.5 px-4">Keterangan</th>
                    <th className="py-2.5 px-4 text-right">Debit (Rp)</th>
                    <th className="py-2.5 px-4 text-right">Credit (Rp)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {transactions.slice(0, 10).map((trx) => (
                    <tr key={trx.id} className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-mono text-xs text-slate-500">{trx.id}</td>
                      <td className="py-3 px-4 font-medium text-slate-700">{trx.account}</td>
                      <td className="py-3 px-4 text-slate-600 truncate max-w-[200px]" title={trx.description}>{trx.description}</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">
                        {trx.type === 'Debit' ? trx.amount.toLocaleString('id-ID') : '-'}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">
                        {trx.type === 'Credit' ? trx.amount.toLocaleString('id-ID') : '-'}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 border-t-2 border-slate-200 font-bold text-slate-800">
                    <td colSpan="3" className="py-3 px-4 text-right">TOTAL SEMENTARA</td>
                    <td className="py-3 px-4 text-right font-mono">18.120.000.000</td>
                    <td className="py-3 px-4 text-right font-mono">25.000.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManajemenTransaksi;
