import React, { useState } from 'react';
import { X, Calendar, Search, Award, Code, FileText, GraduationCap, ArrowRight } from 'lucide-react';

const archiveLogs = [
  {
    date: 'Dec 2025',
    title: 'Finished SHEN Gender Bias Research',
    category: 'Paper',
    color: 'indigo',
    icon: FileText,
    projectId: 'shen',
    description: 'Co-authored paper evaluating hidden bias footprints in Korean pre-trained transformer architectures. Highlighted "Feature Misattribution" where gendered prefixes hijack sentiment predictions.',
    tags: ['NLP', 'XAI', 'Transformers', 'KcELECTRA', 'LIME/SHAP']
  },
  {
    date: 'Nov 2025',
    title: "Designed µ's Mel-Spectrogram pipeline",
    category: 'Project',
    color: 'purple',
    icon: Code,
    projectId: 'mus',
    description: 'Implemented a Computer Vision model for classifying music audio clips by converting signals into 2D Log-Mel Spectrogram representations, feeding into ResNet50 classification layers.',
    tags: ['Computer Vision', 'PyTorch', 'Librosa', 'ResNet50', 'Audio Processing']
  },
  {
    date: 'Jun 2025',
    title: 'Finished AI Football Scouter NLP Project',
    category: 'Project',
    color: 'amber',
    icon: Code,
    projectId: 'scout',
    description: 'Developed an NLP recommendation system combining numeric football player cards metrics with subjective fan commentaries scraped via Reddit APIs. Summaries generated using local phi-1.5 model.',
    tags: ['BERT', 'phi-1.5', 'Reddit API', 'Streamlit', 'Text Toxicity']
  },
  {
    date: 'Mar 2021',
    title: 'Entered Sogang University Art & Tech',
    category: 'Academic',
    color: 'blue',
    icon: GraduationCap,
    description: 'Began undergraduate study in the Art & Technology department, focusing on creative systems integration, machine learning architectures, and computational media arts.',
    tags: ['Art & Technology', 'Sogang University', 'Interactive Art', 'Admissions']
  }
];

export const ArchiveModal = ({ onClose, onOpenProject }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const categories = ['All', 'Project', 'Paper', 'Release', 'Academic'];

  const filteredLogs = archiveLogs.filter(log => {
    const matchesSearch = log.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          log.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          log.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || log.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Release': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Paper': return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
      case 'Project': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'Academic': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      default: return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  const getDotColor = (category) => {
    switch (category) {
      case 'Release': return 'bg-emerald-500 shadow-emerald-500/50';
      case 'Paper': return 'bg-indigo-500 shadow-indigo-500/50';
      case 'Project': return 'bg-purple-500 shadow-purple-500/50';
      case 'Academic': return 'bg-blue-500 shadow-blue-500/50';
      default: return 'bg-slate-500 shadow-slate-500/50';
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/75 backdrop-blur-lg animate-fade-in">
      <div 
        className="glass-panel w-full max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="text-indigo-500" size={24} />
              Interactive Timeline Archive
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Explore key milestones, publications, and technical project history.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors duration-150"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-6 border-b border-slate-200/30 dark:border-slate-800/30 bg-slate-50/50 dark:bg-slate-950/20 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-indigo-500 border-indigo-500 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search history, tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/85 dark:border-slate-800/80 text-xs text-slate-800 dark:text-slate-250 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
            />
          </div>
        </div>

        {/* Scrollable Timeline */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {filteredLogs.length === 0 ? (
            <div className="text-center py-12 text-slate-450 dark:text-slate-500 font-mono text-xs">
              No matching archive logs found.
            </div>
          ) : (
            <div className="relative pl-6 md:pl-10 border-l-2 border-slate-200 dark:border-slate-800 space-y-8 ml-4 md:ml-8 py-2">
              {filteredLogs.map((log, idx) => {
                const LogIcon = log.icon;
                const isExpanded = expandedIndex === idx;

                return (
                  <div key={idx} className="relative group/timeline">
                    {/* Floating Dot Icon */}
                    <div className={`absolute -left-[37px] md:-left-[53px] top-1.5 w-7 h-7 md:w-8 md:h-8 rounded-full border-4 border-white dark:border-slate-950 ${getDotColor(log.category)} flex items-center justify-center text-white shadow-md transition-transform duration-200 group-hover/timeline:scale-110`}>
                      <LogIcon size={12} className="md:size-[14px]" />
                    </div>

                    {/* Timeline card content */}
                    <div 
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isExpanded 
                          ? 'bg-slate-50 dark:bg-slate-850/50 border-indigo-500/40 dark:border-indigo-500/30 shadow-lg shadow-indigo-500/5' 
                          : 'bg-white/60 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-850/20 hover:border-slate-200/80 dark:hover:border-slate-850 shadow-sm'
                      }`}
                    >
                      {/* Top row Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">{log.date}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider border ${getCategoryStyles(log.category)}`}>
                            {log.category}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-150 mt-2 leading-snug">
                        {log.title}
                      </h3>

                      {/* Expandable Section */}
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-355 leading-relaxed">
                          {log.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {log.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-950 text-[9px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/40">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Project Link */}
                        {log.projectId && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenProject(log.projectId);
                            }}
                            className="mt-5 flex items-center gap-1 text-[11px] font-semibold text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150"
                          >
                            <span>Open Project Details</span>
                            <ArrowRight size={12} className="animate-pulse" />
                          </button>
                        )}
                      </div>
                      
                      {!isExpanded && (
                        <p className="text-xs text-slate-400 mt-2 line-clamp-1">
                          {log.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center px-6 md:px-8">
          <span className="text-[10px] text-slate-400 font-mono">[Interactive Timeline v1.0]</span>
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold transition-colors duration-150 shadow-md shadow-indigo-500/10"
          >
            Close Archive
          </button>
        </div>
      </div>
    </div>
  );
};
