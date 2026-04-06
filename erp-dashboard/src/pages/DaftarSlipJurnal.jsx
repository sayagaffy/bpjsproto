import React, { useState } from 'react';
import { transactions, formatCurrency } from '../data/dummyData';
import { Filter, Download, Plus, Eye, CheckCircle, XCircle } from 'lucide-react';

const StatusChip = ({ status }) => {
  const statusStyles = {
    'Completed': 'bg-[#86f7a8] text-[#00723b]',
    'Pending Approval': 'bg-[#ffdbc9] text-[#763300]',
    'Draft': 'bg-slate-200 text-slate-700',
    'Rejected': 'bg-red-100 text-red-700'
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[status] || statusStyles['Draft']}`}>
      {status}
    </span>
  );
};

const DaftarSlipJurnal = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Journal & Reconciliation</h2>
          <p className="text-sm text-slate-500 mt-1">Manage and reconcile financial transactions.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-slate-200 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
            <Filter size={16} /> Filter
          </button>
          <button className="px-3 py-2 border border-slate-200 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
            <Download size={16} /> Export
          </button>
          <button className="px-4 py-2 bg-bpjs-blue text-white rounded-md text-sm font-medium hover:bg-[#003c73] transition-colors flex items-center gap-2">
            <Plus size={16} /> New Entry
          </button>
        </div>
      </div>

      <div className="px-6 border-b border-slate-200">
        <nav className="flex space-x-8">
          {['All', 'BPJS (Badan)', 'DJS (Dana Jaminan Sosial)', 'Pending Reconciliation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'border-bpjs-blue text-bpjs-blue'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/50">
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Trx ID</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Entity</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Description</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Amount</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((trx) => (
              <tr key={trx.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="py-3 px-6 text-sm font-medium text-bpjs-blue">{trx.id}</td>
                <td className="py-3 px-6 text-sm text-slate-600">{trx.date}</td>
                <td className="py-3 px-6 text-sm">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${trx.entity === 'BPJS' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {trx.entity}
                  </span>
                </td>
                <td className="py-3 px-6 text-sm text-slate-600 truncate max-w-xs">{trx.description}</td>
                <td className={`py-3 px-6 text-sm font-medium text-right tabular-nums ${trx.type === 'Credit' ? 'text-bpjs-green' : 'text-slate-700'}`}>
                  {trx.type === 'Credit' ? '+' : '-'}{formatCurrency(trx.amount)}
                </td>
                <td className="py-3 px-6"><StatusChip status={trx.status} /></td>
                <td className="py-3 px-6 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 text-slate-400 hover:text-bpjs-blue" title="View Details"><Eye size={18} /></button>
                    {trx.status === 'Pending Approval' && (
                      <>
                        <button className="p-1 text-slate-400 hover:text-bpjs-green" title="Approve"><CheckCircle size={18} /></button>
                        <button className="p-1 text-slate-400 hover:text-red-500" title="Reject"><XCircle size={18} /></button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-slate-200 flex justify-between items-center text-sm text-slate-500">
        <span>Showing 1 to {transactions.length} of {transactions.length} entries</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 border border-slate-200 rounded text-slate-400 cursor-not-allowed">Prev</button>
          <button className="px-3 py-1 border border-slate-200 rounded bg-bpjs-blue text-white">1</button>
          <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">2</button>
          <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default DaftarSlipJurnal;
