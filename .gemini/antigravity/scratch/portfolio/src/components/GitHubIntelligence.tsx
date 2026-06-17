"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, GitPullRequest, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function GitHubIntelligence() {
  const [weeks, setWeeks] = useState<number[][]>([]);

  useEffect(() => {
    setWeeks(
      Array.from({ length: 12 }, () => 
        Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
      )
    );
  }, []);

  // Use a fallback uniform grid for SSR so the layout doesn't jump
  const displayWeeks = weeks.length > 0 ? weeks : Array.from({ length: 12 }, () => Array.from({ length: 7 }, () => 0));

  const getColor = (level: number) => {
    switch (level) {
      case 1: return "bg-primary-900/40";
      case 2: return "bg-primary-800/60";
      case 3: return "bg-primary-600/80";
      case 4: return "bg-primary-500";
      default: return "bg-white/5";
    }
  };

  const repositories = [
    { name: "Enterprise-RAG-System", lang: "Python", stars: 12, forks: 4 },
    { name: "Driver-Drowsiness-Detection", lang: "Python", stars: 24, forks: 8 },
    { name: "Resume-ATS-Analyzer", lang: "TypeScript", stars: 18, forks: 5 },
    { name: "Audio-Text-ISL", lang: "Python", stars: 32, forks: 10 }
  ];

  return (
    <section className="py-24 px-6 relative" id="github">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <FaGithub className="w-8 h-8 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold">GitHub <span className="text-gradient">Intelligence</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contribution Graph Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-6 md:p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">Contribution Activity</h3>
              <span className="text-sm text-neutral-400">Last 3 Months</span>
            </div>
            
            <div className="flex gap-2 mb-8 overflow-x-auto pb-4 custom-scrollbar">
              {displayWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-2">
                  {week.map((day, dIdx) => (
                    <motion.div 
                      key={`${wIdx}-${dIdx}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (wIdx * 0.05) + (dIdx * 0.01) }}
                      className={`w-4 h-4 rounded-sm ${getColor(day)}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <div className="text-2xl font-bold text-white mb-1">482</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider flex items-center gap-1"><GitCommit className="w-3 h-3" /> Commits</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">24</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider flex items-center gap-1"><GitPullRequest className="w-3 h-3" /> PRs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider flex items-center gap-1"><GitBranch className="w-3 h-3" /> Code Review</div>
              </div>
            </div>
          </motion.div>

          {/* Top Repositories Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Repository Highlights</h3>
            
            <div className="flex flex-col gap-4 flex-grow">
              {repositories.map((repo, idx) => (
                <a key={idx} href="https://github.com/himanshugupta00235" target="_blank" rel="noreferrer" className="block group">
                  <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-primary-500/30 hover:bg-white/10 transition-all">
                    <h4 className="text-primary-400 font-medium mb-2 group-hover:text-primary-300 transition-colors">{repo.name}</h4>
                    <div className="flex items-center gap-4 text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${repo.lang === 'Python' ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                        {repo.lang}
                      </span>
                      <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {repo.stars}</span>
                      <span className="flex items-center gap-1"><GitBranch className="w-3 h-3" /> {repo.forks}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
