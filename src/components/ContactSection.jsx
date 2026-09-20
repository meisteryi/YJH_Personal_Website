import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, Heart } from 'lucide-react';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = 'yjh020701@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200/80 dark:border-slate-800/80 text-center max-w-4xl mx-auto relative overflow-hidden">
          
          {/* Background Gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for the Next Challenge</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            새로운 AI 프로덕트를 <br className="hidden sm:inline" />
            함께 만들어갈 기회를 찾고 있습니다.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            AI 프로덕트 기획, 인턴십, 협업 프로젝트, 커피챗 제안 등 언제든 편하게 연락해 주세요.
          </p>

          {/* Email Copy Box & Mailto */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 w-full sm:w-auto">
              <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
              <span className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200">
                {email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="ml-2 p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                title="이메일 복사"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Send className="w-4 h-4" />
              <span>메일 보내기</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center gap-4">
            <a
              href="https://github.com/meisteryi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-slate-400 dark:text-slate-500 space-y-1">
          <p>© {new Date().getFullYear()} Joohyoung Yi (이주형). All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            Crafted with React, Vite & Tailwind CSS · AI Product Planner Portfolio
          </p>
        </footer>

      </div>
    </section>
  );
};
