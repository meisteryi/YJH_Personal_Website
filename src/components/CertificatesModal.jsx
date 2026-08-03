import React from 'react';
import { X, Award, CheckCircle, ArrowLeft, Calendar } from 'lucide-react';

export const CertificatesModal = ({ onClose }) => {
  const certificates = [
    { name: 'TOEFL iBT', issuer: 'ETS', date: '2025.04', status: '85점' },
    { name: '매경TEST', issuer: '매일경제신문', date: '2024.05', status: '705점' },
    { name: 'TESAT', issuer: '한국경제신문', date: '2024.04', status: '275점' },
    { name: 'FLEX Japanese', issuer: '한국외국어대학교', date: '2024.03', status: '865점' },
    { name: '한국사능력검정시험', issuer: '국사편찬위원회', date: '2024.02', status: '1급' },
    { name: 'JLPT N1', issuer: '일본국제교류기금', date: '2024.01', status: 'Completed' },
    { name: 'JLPT N3', issuer: '일본국제교류기금', date: '2022.08', status: 'Completed' },
  ];

  return (
    <main
      className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-10 md:pb-16 w-full animate-page-in flex flex-col gap-4"
    >
      {/* Back button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800 shadow-sm hover:shadow-md text-slate-600 dark:text-slate-300 text-xs font-bold transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header */}
      <div className="pb-6 border-b border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="text-pink-500" size={20} sm:size={24} />
            Certificates & Awards
          </h2>
          <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-350">
            A list of my language qualifications, standardized test scores, and credentials.
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors duration-150 cursor-pointer"
        >
          <X size={16} sm:size={20} />
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, idx) => (
            <div 
              key={idx} 
              className="glass-panel glow-primary rounded-2xl p-5 border border-slate-200/60 dark:border-slate-800/80 hover:border-pink-500/40 dark:hover:border-pink-400/40 transition-all duration-300 flex flex-col justify-between gap-4 group"
            >
              <div className="space-y-1.5">
                <span className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold bg-pink-500/10 text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                  {cert.issuer}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-pink-500 transition-colors duration-200">
                  {cert.name}
                </h3>
              </div>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100/50 dark:border-slate-900/50 mt-2">
                <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1 font-medium">
                  <Calendar size={12} />
                  {cert.date}
                </span>
                <span className="text-emerald-500 font-mono font-bold flex items-center gap-1 bg-emerald-500/5 px-2.5 py-0.5 rounded-lg border border-emerald-500/10">
                  <CheckCircle size={12} />
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
