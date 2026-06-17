"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "driver-drowsiness",
    title: "Driver Drowsiness Detection",
    tags: ["OpenCV", "Dlib", "EAR/MAR", "Raspberry Pi"],
    summary: "Real-time computer vision system to prevent accidents by detecting driver fatigue.",
    problem: "Fatigue-related accidents are a leading cause of road fatalities. Existing systems are often intrusive or expensive.",
    approach: "Developed a non-intrusive vision-based approach using facial landmark detection to calculate Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR).",
    architecture: "Video Feed -> OpenCV Face Detection -> Dlib Shape Predictor -> Metric Calculation -> Alert System. Deployed on Raspberry Pi for edge inference.",
    results: "Achieved high accuracy in varied lighting conditions with <100ms latency on edge devices.",
    impact: "Provides a cost-effective, real-time safety mechanism that can be retrofitted into any vehicle.",
    sourceUrl: "https://github.com/himanshugupta00235/Real-Time-Driver-Drowsiness-Detection-System-By-Himanshu",
    demoUrl: "",
  },
  {
    id: "resume-ats",
    title: "Resume ATS Analyzer",
    tags: ["Next.js", "TypeScript", "Tailwind", "NLP"],
    summary: "Intelligent platform to score and optimize resumes against job descriptions.",
    problem: "Candidates struggle to pass automated ATS filters, lacking visibility into how their resumes are parsed and scored.",
    approach: "Built a web application that extracts text from resumes, performs NLP-based keyword matching, and calculates an ATS compatibility score.",
    architecture: "Next.js Frontend -> API Routes -> Resume Parsing (PDF.js/Tesseract) -> Text Similarity Engine -> Interactive Dashboard.",
    results: "Provides actionable feedback, highlighting missing keywords and formatting issues.",
    impact: "Empowers job seekers to optimize their applications, significantly improving their interview callback rates.",
    sourceUrl: "https://github.com/himanshugupta00235/resume-ats-analyzer",
    demoUrl: "https://resume-ats-analyzer-ten.vercel.app/",
  },
  {
    id: "isl-converter",
    title: "Audio/Text to ISL Converter",
    tags: ["Whisper", "TensorFlow", "Flask", "MediaPipe"],
    summary: "Accessibility tool translating spoken language into Indian Sign Language animations.",
    problem: "Communication barrier between the deaf/mute community and the general public, specifically for Indian Sign Language.",
    approach: "Utilized OpenAI's Whisper for robust speech-to-text, processed the text to ISL grammar, and mapped it to a 3D avatar using MediaPipe.",
    architecture: "Audio Input -> Whisper API -> NLP Processing Engine -> Flask Backend -> Unity/MediaPipe Avatar Animation.",
    results: "Accurate translation of continuous speech into fluid sign language gestures.",
    impact: "Bridges the communication gap, fostering inclusivity in educational and public service environments.",
    sourceUrl: "https://github.com/himanshugupta00235/Real-time-audio-text-to-Indian-sign-language-and-vice-versa-converter",
    demoUrl: "",
  }
];

export function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section className="py-24 px-6 relative bg-neutral-950" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-neutral-400 text-lg">Engineering solutions to real-world problems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              layoutId={`card-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="glass-card p-6 cursor-pointer hover:border-primary-500/50 transition-colors group flex flex-col h-full"
            >
              <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {project.title}
              </motion.h3>
              <motion.p layoutId={`summary-${project.id}`} className="text-neutral-400 text-sm mb-6 flex-grow">
                {project.summary}
              </motion.p>
              <motion.div layoutId={`tags-${project.id}`} className="flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-neutral-300">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`card-container-${selectedProject.id}`}
                className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col"
              >
                <div className="sticky top-0 bg-neutral-900/80 backdrop-blur-md p-6 border-b border-white/10 flex justify-between items-start z-20">
                  <div>
                    <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </motion.h3>
                    <motion.div layoutId={`tags-${selectedProject.id}`} className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-md text-primary-300 border border-primary-500/20">
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  <motion.p layoutId={`summary-${selectedProject.id}`} className="text-lg text-neutral-300 leading-relaxed border-l-2 border-primary-500 pl-4">
                    {selectedProject.summary}
                  </motion.p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-3 font-bold">Problem</h4>
                      <p className="text-neutral-300 text-sm leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-3 font-bold">Approach</h4>
                      <p className="text-neutral-300 text-sm leading-relaxed">{selectedProject.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-3 font-bold">Architecture</h4>
                      <p className="text-neutral-300 text-sm leading-relaxed">{selectedProject.architecture}</p>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-3 font-bold">Results & Impact</h4>
                      <p className="text-neutral-300 text-sm leading-relaxed mb-2"><span className="text-primary-400 font-semibold">Results:</span> {selectedProject.results}</p>
                      <p className="text-neutral-300 text-sm leading-relaxed"><span className="text-primary-400 font-semibold">Impact:</span> {selectedProject.impact}</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10 flex gap-4">
                    {selectedProject.sourceUrl ? (
                      <a href={selectedProject.sourceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors text-sm group">
                        <FaGithub className="w-4 h-4" /> View Source <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                      </a>
                    ) : (
                      <button disabled className="flex items-center gap-2 px-4 py-2 bg-white/50 text-black/50 font-medium rounded-lg cursor-not-allowed text-sm">
                        <FaGithub className="w-4 h-4 opacity-50" /> Source Pending
                      </button>
                    )}
                    
                    {selectedProject.demoUrl ? (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10 text-sm group">
                        <ExternalLink className="w-4 h-4" /> Live Demo <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                      </a>
                    ) : (
                      <button disabled className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/50 font-medium rounded-lg border border-white/5 text-sm cursor-not-allowed">
                        <ExternalLink className="w-4 h-4 opacity-50" /> Demo Coming Soon
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
