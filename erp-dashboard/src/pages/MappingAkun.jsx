import React, { useState } from 'react';

const MappingAkun = () => {
  const [activeTab, setActiveTab] = useState('Level 1');
  const [formData, setFormData] = useState({ jenis: 'BPJS' });

  const renderFormContent = () => {
    switch (activeTab) {
      case 'Level 1':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">ID</label>
              <div className="col-span-3">
                <input type="text" disabled value="autoincrement" className="bg-slate-100 border border-slate-300 px-3 py-1.5 rounded text-sm w-48 text-slate-500" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">KATEGORI GRUP</label>
              <div className="col-span-3">
                <input type="text" placeholder="(Text input) Aset" className="border border-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-md focus:ring-bpjs-blue focus:border-bpjs-blue outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">JENIS</label>
              <div className="col-span-3 flex items-center gap-2">
                <select className="border border-slate-300 px-3 py-1.5 rounded text-sm w-48 focus:ring-bpjs-blue focus:border-bpjs-blue outline-none bg-white">
                  <option>BPJS</option>
                  <option>DJS</option>
                </select>
                <span className="text-xs text-slate-500 italic">Sesuai jenis login</span>
              </div>
            </div>
          </div>
        );
      case 'Level 2':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">ID</label>
              <div className="col-span-3">
                <input type="text" disabled value="autoincrement" className="bg-slate-100 border border-slate-300 px-3 py-1.5 rounded text-sm w-48 text-slate-500" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">KATEGORI GRUP</label>
              <div className="col-span-3">
                <select className="border border-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-md bg-white">
                  <option>Aset Lancar</option>
                  <option>Aset Tidak Lancar</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">SUB KATEGORI GRUP</label>
              <div className="col-span-3">
                <input type="text" placeholder="(Text input) Kas dan Setara Kas" className="border border-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-md" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">JENIS</label>
              <div className="col-span-3 flex items-center gap-2">
                <select className="border border-slate-300 px-3 py-1.5 rounded text-sm w-48 bg-white"><option>BPJS</option><option>DJS</option></select>
                <span className="text-xs text-slate-500 italic">Sesuai jenis login</span>
              </div>
            </div>
          </div>
        );
      case 'Detail Akun':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">ID</label>
              <div className="col-span-3">
                <input type="text" disabled value="autoincrement" className="bg-slate-100 border border-slate-300 px-3 py-1.5 rounded text-sm w-48 text-slate-500" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">KATEGORI GRUP</label>
              <div className="col-span-3">
                <select className="border border-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-md bg-white"><option>Aset Lancar</option></select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">SUB KATEGORI GRUP</label>
              <div className="col-span-3">
                <select className="border border-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-md bg-white"><option>Kas dan Setara Kas</option></select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">SUB SUBKATEGORI GRUP</label>
              <div className="col-span-3">
                <input type="text" placeholder="(Text input) Kas" className="border border-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-md" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">JENIS</label>
              <div className="col-span-3">
                <select className="border border-slate-300 px-3 py-1.5 rounded text-sm w-48 bg-white"><option>BPJS</option></select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">KODE AKUN</label>
              <div className="col-span-3">
                 <input type="text" placeholder="(Text input) Kode" className="border border-slate-300 px-3 py-1.5 rounded text-sm w-48" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-slate-700">KODE TAMBAHAN</label>
              <div className="col-span-3">
                 <input type="text" placeholder="(Text input) Tambahan" className="border border-slate-300 px-3 py-1.5 rounded text-sm w-48" />
              </div>
            </div>
          </div>
        );
      default:
        return <p className="text-sm text-slate-500">Not implemented in prototype</p>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Mapping Akuntansi & Kategori</h1>
        <p className="text-slate-500 text-sm mt-1">Konfigurasi Referensi Level Kelompok Akun dan Detail Akun</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Wireframe Header Tab */}
        <div className="border-b border-slate-200 bg-slate-50 flex overflow-x-auto text-sm">
          {['Level 1', 'Level 2', 'Level 3', 'Detail Akun'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-bold transition-colors border-b-2 ${
                activeTab === tab 
                  ? 'border-bpjs-blue text-bpjs-blue bg-white' 
                  : 'border-transparent text-slate-600 hover:text-slate-800'
              }`}
            >
              Mapping Kategori {tab}
            </button>
          ))}
        </div>

        {/* Wireframe Form Area */}
        <div className="p-6 max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
             {renderFormContent()}

             <div className="mt-8 flex gap-3 pl-[25%]">
               <button className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-medium rounded transition-colors shadow-sm">Baru</button>
               <button className="px-5 py-2 bg-bpjs-blue hover:bg-blue-800 text-white text-sm font-bold rounded transition-colors shadow-sm">Simpan</button>
               <button className="px-5 py-2 bg-rose-100 hover:bg-rose-200 text-rose-700 text-sm font-medium rounded transition-colors shadow-sm">Batal</button>
             </div>
          </div>

          <hr className="border-slate-200" />

          {/* Wireframe Table Data */}
          <div>
            <div className="overflow-x-auto border border-slate-300 rounded-md">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-100 border-b border-slate-300">
                  <tr>
                    <th className="px-3 py-2 border-r border-slate-300 w-16 text-center">Aksi</th>
                    <th className="px-4 py-2 border-r border-slate-300">Id</th>
                    {activeTab === 'Level 1' && <th className="px-4 py-2 border-r border-slate-300">Kategori Grup</th>}
                    {activeTab === 'Level 2' && (
                      <>
                        <th className="px-4 py-2 border-r border-slate-300">Kategori Grup</th>
                        <th className="px-4 py-2 border-r border-slate-300">Sub Kategori Grup</th>
                      </>
                    )}
                    {activeTab === 'Detail Akun' && (
                      <>
                        <th className="px-4 py-2 border-r border-slate-300">Kategori Grup</th>
                        <th className="px-4 py-2 border-r border-slate-300">Sub Kat. Grup</th>
                        <th className="px-4 py-2 border-r border-slate-300">Sub SubKat. Grup</th>
                        <th className="px-4 py-2 border-r border-slate-300">Kode Akun</th>
                      </>
                    )}
                    <th className="px-4 py-2">Grup Sumber Dana</th>
                  </tr>
                  {/* Search Row */}
                  <tr className="bg-slate-50 border-b border-slate-300">
                    <td className="px-3 py-2 border-r border-slate-300"></td>
                    <td className="px-2 py-2 border-r border-slate-300">
                      <input type="text" placeholder="Q id" className="w-full px-2 py-1 text-xs border rounded" />
                    </td>
                    <td className="px-2 py-2 border-r border-slate-300">
                      <input type="text" placeholder="Q kategori" className="w-full px-2 py-1 text-xs border rounded" />
                    </td>
                    {activeTab === 'Level 2' && (
                       <td className="px-2 py-2 border-r border-slate-300"><input type="text" className="w-full px-2 py-1 text-xs border rounded" /></td>
                    )}
                    {activeTab === 'Detail Akun' && (
                       <>
                         <td className="px-2 py-2 border-r border-slate-300"><input type="text" className="w-full px-2 py-1 text-xs border rounded" /></td>
                         <td className="px-2 py-2 border-r border-slate-300"><input type="text" className="w-full px-2 py-1 text-xs border rounded" /></td>
                         <td className="px-2 py-2 border-r border-slate-300"><input type="text" className="w-full px-2 py-1 text-xs border rounded" /></td>
                       </>
                    )}
                    <td className="px-2 py-2">
                       <input type="text" placeholder="Q sumber dana" className="w-full px-2 py-1 text-xs border rounded" />
                    </td>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-3 py-2 border-r border-slate-300 text-center"><button className="px-3 py-1 bg-white border border-slate-300 rounded text-xs hover:bg-slate-100 font-medium text-slate-700 shadow-sm">Edit</button></td>
                    <td className="px-4 py-2 border-r border-slate-300 text-slate-600">017</td>
                    <td className="px-4 py-2 border-r border-slate-300 text-slate-800">Aset Lancar</td>
                    {activeTab === 'Level 2' && <td className="px-4 py-2 border-r border-slate-300 text-slate-800">Kas dan Setara Kas</td>}
                    {activeTab === 'Detail Akun' && (
                       <>
                         <td className="px-4 py-2 border-r border-slate-300 text-slate-800">Kas dan Setara Kas</td>
                         <td className="px-4 py-2 border-r border-slate-300 text-slate-800">Kas</td>
                         <td className="px-4 py-2 border-r border-slate-300 font-mono text-slate-600">11101</td>
                       </>
                    )}
                    <td className="px-4 py-2 text-slate-600">1</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                     <td className="px-3 py-2 border-r border-slate-300 text-center"><button className="px-3 py-1 bg-white border border-slate-300 rounded text-xs hover:bg-slate-100 font-medium text-slate-700 shadow-sm">Edit</button></td>
                     <td colSpan={activeTab === 'Detail Akun' ? 6 : activeTab === 'Level 2' ? 4 : 3} className="px-4 py-4 text-center text-slate-400 text-xs text-italic">...</td>
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

export default MappingAkun;
