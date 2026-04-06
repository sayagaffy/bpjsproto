import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <h2 className="text-lg font-semibold text-slate-800">{title}</h2>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="pl-9 pr-4 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-bpjs-blue focus:border-bpjs-blue w-64 bg-slate-50"
          />
        </div>

        <button className="relative text-slate-500 hover:text-bpjs-blue transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
