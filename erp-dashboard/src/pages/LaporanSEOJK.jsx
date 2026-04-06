import React, { useState } from 'react';
import dummyData from '../data/dummyData.json';
import { FileText, Download, TrendingUp, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';

const LaporanSEOJK = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [filterType, setFilterType] = useState('Rinci');

  const handleLihat = () => {
    setShowPreview(true);
  };

  const handleExport = () => {
    setShowToast(true);
    setTimeout(() => { setShowToast(false); }, 3000);
  };

  return (
    <div className="space-y-6 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-0 right-0 bg-bpjs-green text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-4 z-50">
          <CheckCircle2 className="w-5 h-5" />
          <div>
            <p className="font-bold text-sm">Berhasil Diekspor!</p>
            <p className="text-xs text-white/90">Laporan Bulanan telah disimpan sebagai file Excel.</p>
          </div>
        </div>
      )}

      {/* Wireframe Header (Page 10) */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
          <FileText className="w-5 h-5 text-bpjs-blue" />
          <h2 className="font-bold text-slate-700">Laporan Bulanan</h2>
        </div>
        
        <div className="p-6 md:flex gap-12 items-start">
          <div className="space-y-3">
             <label className="block text-sm font-bold text-slate-700">Silahkan Pilih Kriteria Laporan :</label>
             <div className="space-y-2">
               <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                 <input type="radio" name="kriteria" value="Rinci" checked={filterType === 'Rinci'} onChange={(e) => setFilterType(e.target.value)} className="w-4 h-4 text-bpjs-blue" /> Laporan Rinci
               </label>
               <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                 <input type="radio" name="kriteria" value="Kelompok" checked={filterType === 'Kelompok'} onChange={(e) => setFilterType(e.target.value)} className="w-4 h-4 text-bpjs-blue" /> Laporan Per Kelompok
               </label>
               <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                 <input type="radio" name="kriteria" value="Banding Realisasi" checked={filterType === 'Banding Realisasi'} onChange={(e) => setFilterType(e.target.value)} className="w-4 h-4 text-bpjs-blue" /> Banding Realisasi
               </label>
               <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                 <input type="radio" name="kriteria" value="Banding RKAT" checked={filterType === 'Banding RKAT'} onChange={(e) => setFilterType(e.target.value)} className="w-4 h-4 text-bpjs-blue" /> Banding RKAT
               </label>
             </div>
          </div>
          
          <div className="mt-6 md:mt-0 space-y-3">
             <label className="block text-sm font-bold text-slate-700 mb-1">Pilih Periode Laporan</label>
             <div className="flex items-center gap-2">
                <input type="month" className="border border-slate-300 px-3 py-2 rounded-lg text-sm w-48 outline-none focus:border-bpjs-blue focus:ring-1 focus:ring-bpjs-blue" defaultValue="2026-04" />
                <CalendarIcon className="w-5 h-5 text-slate-400" />
             </div>
             
             {filterType === 'Banding RKAT' && (
                <div className="pt-3">
                   <label className="block text-sm font-bold text-slate-700 mb-1">Pilih Laporan</label>
                   <select className="border border-slate-300 px-3 py-2 rounded-lg text-sm w-48 outline-none">
                     <option>Laporan Posisi Keuangan BPJS dan DJS</option>
                     <option>Laporan Arus Kas BPJS dan DJS</option>
                   </select>
                </div>
             )}
          </div>
        </div>
        
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex gap-3">
          <button onClick={handleLihat} className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-bold rounded shadow-sm transition-colors">Lihat</button>
          <button onClick={handleExport} className="px-6 py-2 bg-bpjs-blue hover:bg-blue-800 text-white text-sm font-bold rounded shadow-sm transition-colors">Export to Excel</button>
        </div>
      </div>

      {/* Laporan Preview Layout (Pages 11-13 Design) */}
      {showPreview && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
           {/* Report Header Logo */}
           <div className="p-8 border-b-2 border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-bpjs-green rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white w-7 h-7" />
                 </div>
                 <div>
                    <h2 className="text-2xl font-extrabold text-bpjs-blue leading-tight tracking-tight">BPJS Kesehatan</h2>
                    <p className="text-sm font-medium text-slate-500">Badan Penyelenggara Jaminan Sosial</p>
                 </div>
              </div>
           </div>
           
           <div className="p-8">
              <div className="mb-6 font-mono text-sm leading-relaxed text-slate-800 max-w-lg">
                <div className="flex font-bold"><span className="w-48">LI LAPORAN POSISI KEUANGAN</span></div>
                <div className="flex"><span className="w-48">NAMA PELAPOR</span><span>: DJS KESEHATAN</span></div>
                <div className="flex"><span className="w-48">SANDI PELAPOR</span><span>: -</span></div>
                <div className="flex"><span className="w-48">LAPORAN PADA AKHIR PERIODE</span><span>: 30 April 2026</span></div>
              </div>
              
              <div className="border-2 border-slate-800">
                <table className="w-full text-xs font-mono">
                  <thead>
                     <tr className="border-b-2 border-slate-800 bg-slate-100/50">
                        <th className="py-2 px-3 border-r border-slate-400 text-center font-bold text-slate-800 w-1/4">ASET</th>
                        <th className="py-2 px-3 border-r-2 border-slate-800 text-center font-bold text-slate-800 w-1/4">REALISASI</th>
                        <th className="py-2 px-3 border-r border-slate-400 text-center font-bold text-slate-800 w-1/4">LIABILITAS DAN EKUITAS</th>
                        <th className="py-2 px-3 text-center font-bold text-slate-800 w-1/4">REALISASI</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* Row 1 */}
                     <tr className="border-b border-slate-200">
                        <td className="py-1.5 px-3 border-r border-slate-400 font-bold">ASET</td>
                        <td className="py-1.5 px-3 border-r-2 border-slate-800 text-right"></td>
                        <td className="py-1.5 px-3 border-r border-slate-400 font-bold">LIABILITAS</td>
                        <td className="py-1.5 px-3 text-right"></td>
                     </tr>
                     {/* Row Data */}
                     <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6">Kas dan Setara Kas</td>
                        <td className="py-1.5 px-3 border-r-2 border-slate-800 text-right">52.017.155.907.340</td>
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6">Utang Jaminan Kesehatan</td>
                        <td className="py-1.5 px-3 text-right">1.460.600.161.490</td>
                     </tr>
                     <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6">Deposito</td>
                        <td className="py-1.5 px-3 border-r-2 border-slate-800 text-right">-</td>
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6">Pendapatan Diterima Dimuka</td>
                        <td className="py-1.5 px-3 text-right">337.242.109.761</td>
                     </tr>
                     <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6">Piutang Iuran</td>
                        <td className="py-1.5 px-3 border-r-2 border-slate-800 text-right">6.995.221.526.723</td>
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6 font-bold">Cadangan Teknis</td>
                        <td className="py-1.5 px-3 text-right"></td>
                     </tr>
                     <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6">Piutang Investasi</td>
                        <td className="py-1.5 px-3 border-r-2 border-slate-800 text-right">87.289.075.423</td>
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-8">- Liabilitas Yankes Dalam Proses (OSC)</td>
                        <td className="py-1.5 px-3 text-right">770.415.573.505</td>
                     </tr>
                     {filterType === 'Banding RKAT' && (
                     <tr className="border-b border-slate-200 bg-amber-50">
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6 italic font-medium text-amber-800">* Target RKAT Kas</td>
                        <td className="py-1.5 px-3 border-r-2 border-slate-800 text-right italic text-amber-800">55.000.000.000.000</td>
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-8 italic font-medium text-amber-800">* Target RKAT Utang Klaim</td>
                        <td className="py-1.5 px-3 text-right italic text-amber-800">1.200.000.000.000</td>
                     </tr>
                     )}
                     <tr className="border-b border-slate-200">
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6">...</td>
                        <td className="py-1.5 px-3 border-r-2 border-slate-800 text-right"></td>
                        <td className="py-1.5 px-3 border-r border-slate-400 pl-6">...</td>
                        <td className="py-1.5 px-3 text-right"></td>
                     </tr>
                     
                     {/* Summary rows */}
                     <tr className="border-t-2 border-slate-800">
                        <td className="py-2 px-3 border-r border-slate-400"></td>
                        <td className="py-2 px-3 border-r-2 border-slate-800 text-right"></td>
                        <td className="py-2 px-3 border-r border-slate-400 font-bold bg-slate-50">TOTAL LIABILITAS</td>
                        <td className="py-2 px-3 text-right font-bold bg-slate-50">27.838.531.005.996</td>
                     </tr>
                     <tr className="border-y border-slate-800">
                        <td className="py-2 px-3 border-r border-slate-400"></td>
                        <td className="py-2 px-3 border-r-2 border-slate-800 text-right"></td>
                        <td className="py-2 px-3 border-r border-slate-400 font-bold bg-slate-50 text-bpjs-blue">ASET NETO</td>
                        <td className="py-2 px-3 text-right font-bold bg-slate-50 text-bpjs-blue">31.784.009.410.395</td>
                     </tr>
                     <tr className="border-b-2 border-slate-800 bg-slate-100">
                        <td className="py-2 px-3 border-r border-slate-400 font-bold text-center">TOTAL ASET</td>
                        <td className="py-2 px-3 border-r-2 border-slate-800 font-bold text-right">59.622.540.416.391</td>
                        <td className="py-2 px-3 border-r border-slate-400 font-bold text-center">TOTAL LIABILITAS DAN ASET NETO</td>
                        <td className="py-2 px-3 font-bold text-right">59.622.540.416.391</td>
                     </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 flex justify-end">
                 <div className="w-1/2">
                    <table className="w-full text-xs font-mono font-medium border border-slate-800">
                       <thead>
                          <tr className="border-b border-slate-800 bg-slate-50 text-center">
                             <th className="py-2 border-r border-slate-800 w-1/3">Dep. Dir. Bid. Akt.</th>
                             <th className="py-2 border-r border-slate-800 w-1/3">Dirkeuin</th>
                             <th className="py-2 w-1/3">Dirut</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <td className="py-8 border-r border-slate-800"></td>
                             <td className="py-8 border-r border-slate-800"></td>
                             <td className="py-8"></td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default LaporanSEOJK;
