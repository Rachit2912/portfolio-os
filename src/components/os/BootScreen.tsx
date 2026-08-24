"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, ArrowRight, LogIn } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

const BOOT_LOGS = [
  "BIOS VERSION 2.29.12 // RACHIT-PORTFOLIO-OS KERNEL",
  "Initializing CPU Core Array... [OK]",
  "Checking Memory Allocation (VIT_IT_8.87_CGPA)... [OK]",
  "Loading Core Modules: C++, Go, Python, Node.js, AWS... [OK]",
  "Mounting Virtual Filesystem (~/projects, ~/experience, ~/about.md)... [OK]",
  "Establishing Secure Telemetry & Network Stack... [OK]",
  "Initializing Dual Navigation (Visual UI + Functional CLI)... [OK]",
  "SYSTEM READY // RACHIT-PORTFOLIO-OS IS ONLINE."
];

export const BootScreen: React.FC = () => {
  const { setBooted, setActiveWorkspace, logoutMessage } = useOSStore();
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < BOOT_LOGS.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, BOOT_LOGS[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleBoot = (targetWorkspace: 'desktop' | 'terminal' = 'desktop') => {
    setActiveWorkspace(targetWorkspace);
    setBooted(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleBoot('desktop');
      } else if (e.key.toLowerCase() === 't') {
        handleBoot('terminal');
      } else if (e.key.toLowerCase() === 'h') {
        handleBoot('desktop');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#020904] text-[#E8FFE8] flex flex-col justify-between p-6 sm:p-12 z-50 font-mono select-none bg-micro-grid">
      <div className="flex justify-between items-center border-b border-[#39FF14]/30 pb-4">
        <div className="flex items-center space-x-2 text-[#39FF14]">
          <Cpu className="w-5 h-5 animate-pulse" />
          <span className="font-bold tracking-wider text-sm sm:text-base">RACHIT_PORTFOLIO_OS v2.5</span>
        </div>
        <div className="text-xs text-[#70A080] hidden sm:block">
          SYS_STATUS: ONLINE | SECURITY: JWT_ENCRYPTED | LATENCY: 12ms
        </div>
      </div>

      <div className="my-auto max-w-3xl w-full mx-auto space-y-6">
        {logoutMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-[#FF2A55]/15 border border-[#FF2A55] text-[#FF2A55] rounded text-center text-xs font-bold tracking-wider shadow-lg"
          >
            [SYSTEM ALERT]: {logoutMessage}
          </motion.div>
        )}

        <div className="text-center space-y-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center p-3 rounded-full bg-[#0A1C10] border border-[#39FF14]/40 glow-green-sm mb-2"
          >
            <Shield className="w-10 h-10 text-[#39FF14]" />
          </motion.div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#E8FFE8]">
            RACHIT JOSHI <span className="text-[#39FF14]">// PORTFOLIO OS</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#70A080]">
            Backend / Systems / Cloud / High-Performance C++ / AI Systems
          </p>
        </div>

        <div className="bg-[#030D06] border border-[#39FF14]/30 rounded p-4 h-48 overflow-y-auto text-xs space-y-1 font-mono text-[#00FF66]">
          {logs.map((log, idx) => (
            <div key={idx} className="flex space-x-2">
              <span className="text-[#39FF14]">&gt;</span>
              <span>{log}</span>
            </div>
          ))}
          {currentIndex < BOOT_LOGS.length && (
            <div className="text-[#39FF14] animate-pulse">&gt; Loading system resources...</div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <button
            onClick={() => handleBoot('desktop')}
            className="w-full sm:w-auto px-6 py-3 bg-[#39FF14] text-[#020904] font-bold rounded flex items-center justify-center space-x-2 hover:bg-[#00FF66] transition-all glow-green cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            <span>BOOT PORTFOLIO OS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleBoot('terminal')}
            className="w-full sm:w-auto px-6 py-3 bg-[#0A1C10] border border-[#39FF14]/50 text-[#39FF14] font-bold rounded flex items-center justify-center space-x-2 hover:bg-[#39FF14]/15 transition-all cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>TERMINAL MODE [T]</span>
          </button>
        </div>

        <div className="text-center text-xs text-[#70A080] space-x-4">
          <span>Press <kbd className="bg-[#0A1C10] border border-[#39FF14]/30 px-1.5 py-0.5 rounded text-[#E8FFE8]">Enter</kbd> to Boot</span>
          <span>•</span>
          <span>Press <kbd className="bg-[#0A1C10] border border-[#39FF14]/30 px-1.5 py-0.5 rounded text-[#E8FFE8]">T</kbd> for Terminal</span>
        </div>
      </div>

      <div className="border-t border-[#39FF14]/20 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-[#70A080]">
        <div>VIT Vellore B.Tech IT | CGPA 8.87 | AWS Certified Solutions Architect</div>
        <div>Press any button to skip boot sequence</div>
      </div>
    </div>
  );
};
