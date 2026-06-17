"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative bg-black mt-24" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Himanshu Gupta</h2>
          <p className="text-neutral-500 text-sm">Building Intelligent Systems That Learn, Explain and Scale</p>
        </div>
        
        <div className="flex gap-6">
          <a href="mailto:himanshugupta00235@gmail.com" className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            <Mail className="w-4 h-4" />
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary-400" />
          </a>
          <a href="https://github.com/himanshugupta00235" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary-400" />
          </a>
          <a href="https://www.linkedin.com/in/himanshu-gupta-383a6b220/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            <FaLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary-400" />
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 text-center text-neutral-600 text-xs">
        <p>&copy; {new Date().getFullYear()} Himanshu Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
}
