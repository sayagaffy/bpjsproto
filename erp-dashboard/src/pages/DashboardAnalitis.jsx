import React from 'react';
import { dashboardStats, formatCurrency } from '../data/dummyData';
import { ArrowUpRight, ArrowDownRight, Activity, PieChart, TrendingUp, DollarSign } from 'lucide-react';

const StatCard = ({ title, amount, trend, isPositive, icon, isCurrency }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800">{isCurrency ? formatCurrency(amount, true) : amount.toLocaleString('id-ID')}</h3>
      <div className={`flex items-center gap-1 mt-2 text-sm ${isPositive ? 'text-bpjs-green' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span>{Math.abs(trend)}% vs last month</span>
      </div>
    </div>
    <div className="p-3 bg-slate-50 rounded-md text-bpjs-blue">
      {icon}
    </div>
  </div>
);

const DashboardAnalitis = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Financial Overview</h1>
          <p className="text-slate-500 mt-1">Key metrics and financial ratios for BPJS & DJS.</p>
        </div>
        <div className="flex gap-3">
           <select className="border border-slate-200 rounded-md px-3 py-2 text-sm bg-white text-slate-700 outline-none">
             <option>All Entities</option>
             <option>BPJS</option>
             <option>DJS</option>
           </select>
           <select className="border border-slate-200 rounded-md px-3 py-2 text-sm bg-white text-slate-700 outline-none">
             <option>This Year</option>
             <option>Last Year</option>
           </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Consolidated Assets"
          amount={dashboardStats.totalAssets}
          trend={4.2}
          isPositive={true}
          icon={<DollarSign size={24} />}
          isCurrency={true}
        />
        <StatCard
          title="DJS Assets (Dana Jaminan)"
          amount={dashboardStats.djsAssets}
          trend={5.1}
          isPositive={true}
          icon={<PieChart size={24} />}
          isCurrency={true}
        />
        <StatCard
          title="BPJS Assets (Aset Badan)"
          amount={dashboardStats.bpjsAssets}
          trend={1.2}
          isPositive={true}
          icon={<Activity size={24} />}
          isCurrency={true}
        />
        <StatCard
          title="Active Transactions"
          amount={dashboardStats.activeTransactions}
          trend={-2.4}
          isPositive={false}
          icon={<TrendingUp size={24} />}
          isCurrency={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-lg font-semibold text-slate-800">Asset Growth Trend</h3>
             <button className="text-sm text-bpjs-blue hover:underline">View Report</button>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 border-b border-l border-slate-200 p-4 relative">
             {/* Simple bar chart mock */}
             {[40, 55, 45, 60, 80, 70, 90, 85, 100, 95, 110, 105].map((h, i) => (
                <div key={i} className="w-full flex gap-1 items-end h-full">
                  <div className="w-1/2 bg-bpjs-blue rounded-t-sm transition-all hover:opacity-80" style={{ height: `${h}%` }}></div>
                  <div className="w-1/2 bg-bpjs-green rounded-t-sm transition-all hover:opacity-80" style={{ height: `${h * 0.7}%` }}></div>
                </div>
             ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-400">
             <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
          <div className="flex gap-4 mt-4 text-sm justify-center">
             <div className="flex items-center gap-2"><div className="w-3 h-3 bg-bpjs-blue rounded-full"></div> DJS</div>
             <div className="flex items-center gap-2"><div className="w-3 h-3 bg-bpjs-green rounded-full"></div> BPJS</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
           <h3 className="text-lg font-semibold text-slate-800 mb-6">Quick Actions</h3>
           <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-md border border-slate-200 hover:border-bpjs-blue hover:bg-slate-50 transition-colors flex justify-between items-center group">
                 <span className="text-sm font-medium text-slate-700 group-hover:text-bpjs-blue">Create Journal Entry</span>
                 <ArrowUpRight size={16} className="text-slate-400 group-hover:text-bpjs-blue" />
              </button>
              <button className="w-full text-left p-3 rounded-md border border-slate-200 hover:border-bpjs-blue hover:bg-slate-50 transition-colors flex justify-between items-center group">
                 <span className="text-sm font-medium text-slate-700 group-hover:text-bpjs-blue">Generate OJK Report</span>
                 <ArrowUpRight size={16} className="text-slate-400 group-hover:text-bpjs-blue" />
              </button>
              <button className="w-full text-left p-3 rounded-md border border-slate-200 hover:border-bpjs-blue hover:bg-slate-50 transition-colors flex justify-between items-center group">
                 <span className="text-sm font-medium text-slate-700 group-hover:text-bpjs-blue">Review Pending ({dashboardStats.pendingReconciliation})</span>
                 <ArrowUpRight size={16} className="text-slate-400 group-hover:text-bpjs-blue" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalitis;
