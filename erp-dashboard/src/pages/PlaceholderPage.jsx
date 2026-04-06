import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-12 text-center h-[60vh] flex flex-col justify-center items-center">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-bpjs-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>
      <p className="text-slate-500 max-w-md">This module is currently under development. Please check back later for updates on the {title} features.</p>
    </div>
  );
};

export default PlaceholderPage;
