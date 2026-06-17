"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Beaker, FileText, ChevronRight, BarChart3, Database, X, ExternalLink } from "lucide-react";

const papers = [
  {
    id: "crop-prediction",
    title: "Enhancing Crop Prediction with Explainable AI: SHAP-Based Approach",
    status: "Published",
    details: [
      { label: "Methodology", value: "LightGBM + SMOTE" },
      { label: "Accuracy", value: "98.64%" },
      { label: "Dataset", value: "SF24 (4,800 records)" },
    ],
    tags: ["Explainable AI", "SHAP", "LightGBM", "Data Preprocessing"],
    description: "Developed a robust prediction pipeline utilizing class balancing and generated feature importance explanations to enable transparent interpretation of environmental factors influencing predictions.",
    link: "https://ieeexplore.ieee.org/abstract/document/11398280"
  },
  {
    id: "waste-management",
    title: "Revolutionizing Waste Management: An AI-driven Approach Towards Sustainability",
    status: "Published",
    details: [
      { label: "Methodology", value: "Random Forest & Decision Tree" },
      { label: "Optimization", value: "PCA + LASSO" },
      { label: "Dataset", value: "22,500+ Image Kaggle Dataset" },
    ],
    tags: ["Computer Vision Pipeline", "Random Forest", "PCA", "LASSO"],
    description: "Designed an automated waste classification workflow using dimensionality reduction and feature selection to support sustainable waste segregation and enhance recycling decisions.",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003593089-140/revolutionizing-waste-management-ai-driven-approach-towards-sustainability-sankalp-bijalwan-aniket-saroj-himanshu-gupta-shashwat-sharma-saurabh-kumar-srivastava-ambrish-kumar"
  }
];

export function ResearchLab() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedPaper = papers.find(p => p.id === selectedId);

  return (
    <section className="py-24 px-6 relative" id="research">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 glass">
            <Beaker className="w-8 h-8 text-primary-400" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Research <span className="text-gradient">Lab</span></h2>
            <p className="text-neutral-400 text-lg mt-2">Applied research and scientific contributions.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {papers.map((paper, idx) => (
            <motion.div
              layoutId={`research-card-${paper.id}`}
              key={paper.id}
              onClick={() => setSelectedId(paper.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-panel p-1 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-neutral-950/80 rounded-[1.4rem] p-6 md:p-8 h-full relative z-10 border border-white/5 group-hover:border-primary-500/30 transition-colors flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold border border-primary-500/20">
                    <FileText className="w-3.5 h-3.5" /> {paper.status}
                  </span>
                  <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group/btn">
                    <ChevronRight className="w-4 h-4 text-neutral-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                  </button>
                </div>
                
                <motion.h3 layoutId={`research-title-${paper.id}`} className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  {paper.title}
                </motion.h3>
                
                <motion.p layoutId={`research-desc-${paper.id}`} className="text-neutral-400 text-sm mb-8 leading-relaxed flex-grow">
                  {paper.description}
                </motion.p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {paper.details.map(detail => (
                    <div key={detail.label} className="flex flex-col">
                      <span className="text-xs text-neutral-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        {detail.label === 'Accuracy' ? <BarChart3 className="w-3 h-3" /> : <Database className="w-3 h-3" />}
                        {detail.label}
                      </span>
                      <span className="text-sm font-medium text-neutral-200">{detail.value}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div layoutId={`research-tags-${paper.id}`} className="pt-6 border-t border-white/10 flex flex-wrap gap-2 mt-auto">
                  {paper.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedPaper && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`research-card-${selectedPaper.id}`}
                className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col"
              >
                <div className="sticky top-0 bg-neutral-900/80 backdrop-blur-md p-6 border-b border-white/10 flex justify-between items-start z-20">
                  <div>
                    <motion.h3 layoutId={`research-title-${selectedPaper.id}`} className="text-xl md:text-2xl font-bold text-white mb-2">
                      {selectedPaper.title}
                    </motion.h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold border border-primary-500/20">
                      <FileText className="w-3.5 h-3.5" /> {selectedPaper.status}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  <motion.p layoutId={`research-desc-${selectedPaper.id}`} className="text-lg text-neutral-300 leading-relaxed border-l-2 border-primary-500 pl-4">
                    {selectedPaper.description}
                  </motion.p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {selectedPaper.details.map(detail => (
                      <div key={detail.label} className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <span className="text-xs text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                          {detail.label === 'Accuracy' ? <BarChart3 className="w-4 h-4 text-primary-400" /> : <Database className="w-4 h-4 text-primary-400" />}
                          {detail.label}
                        </span>
                        <span className="text-lg font-bold text-white">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.div layoutId={`research-tags-${selectedPaper.id}`} className="flex flex-wrap gap-2">
                    {selectedPaper.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 text-sm font-medium bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  
                  <div className="pt-6 border-t border-white/10">
                    {selectedPaper.link ? (
                      <a href={selectedPaper.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20 group">
                        <FileText className="w-4 h-4" /> Read Full Paper <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2" />
                      </a>
                    ) : (
                      <button disabled className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white/50 font-medium rounded-xl border border-white/10 cursor-not-allowed">
                        <FileText className="w-4 h-4 opacity-50" /> Publication Link Pending
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
