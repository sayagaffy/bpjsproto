import React, { useState } from 'react';
import { Network, Plus, Settings, ChevronRight, ChevronDown } from 'lucide-react';

const Node = ({ label, code, childrenNodes, isExpanded: initiallyExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
  
  return (
    <div className="ml-4 border-l border-slate-200 pl-4 py-1">
      <div className="flex items-center justify-between group">
        <div 
          className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 py-1.5 px-2 rounded-md font-medium text-slate-700"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {childrenNodes && childrenNodes.length > 0 ? (
            isExpanded ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />
          ) : (
            <div className="w-4 h-4 border-b border-l border-slate-300 rounded-bl-sm opacity-50 ml-1 translate-y-[-4px]"></div>
          )}
          <span className="font-mono text-xs text-bpjs-blue bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">{code}</span>
          <span>{label}</span>
        </div>
        <button className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-bpjs-blue transition-colors">
          <Settings className="w-3.5 h-3.5" />
        </button>
      </div>
      
      {isExpanded && childrenNodes && (
        <div className="mt-1">
          {childrenNodes.map((child, idx) => (
            <Node key={idx} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

const dummyChartOfAccounts = [
  {
    code: '1', label: 'Aset', isExpanded: true, childrenNodes: [
      { code: '11', label: 'Aset Lancar', isExpanded: true, childrenNodes: [
        { code: '111', label: 'Kas dan Bank', isExpanded: true, childrenNodes: [
          { code: '11101', label: 'Kas Operasional BPJS' },
          { code: '11102', label: 'Kas Pendapatan DJS' }
        ]}
      ]},
      { code: '12', label: 'Aset Tidak Lancar', childrenNodes: [] }
    ]
  },
  {
    code: '2', label: 'Kewajiban', childrenNodes: [
      { code: '21', label: 'Kewajiban Lancar', childrenNodes: [
        { code: '211', label: 'Hutang Klaim Faskes' }
      ]}
    ]
  }
];

const MappingAkun = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Mapping Referensi Akun (4-Level)</h1>
          <p className="text-slate-500 text-sm mt-1">Struktur Chart of Accounts (CoA) BPJS & DJS</p>
        </div>
        <button className="bg-bpjs-blue hover:bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm text-sm">
          <Plus className="w-4 h-4" /> Tambah Akun Induk
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
          <Network className="w-5 h-5 text-bpjs-blue" />
          <h2 className="font-bold text-slate-700">Hierarki Jurnal</h2>
        </div>
        <div className="p-4 pb-8">
          {dummyChartOfAccounts.map(account => (
            <Node key={account.code} {...account} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MappingAkun;
