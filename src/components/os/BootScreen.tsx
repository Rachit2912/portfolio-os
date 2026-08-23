"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, ArrowRight } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

const BOOT_LOGS = [
  "BIOS VERSION 2.29.12 // RACHIT-OS PORTFOLIO KERNEL",
  "Initializing CPU Core Array... [OK]",
  "Checking Memory Allocation (VIT_IT_8.87_CGPA)... [OK]",
  "Loading Core Modules: C++, Go, Python, Node.js, AWS... [OK]",
  "Mounting Virtual Filesystem (~/projects, ~/experience, ~/about.md)... [OK]",
  "Establishing Secure Telemetry & Network Stack... [OK]",
  "Initializing Dual Navigation (Visual UI + Functional CLI)... [OK]",
  "SYSTEM READY // RACHIT_OS PORTFOLIO IS ONLINE."
];

export const BootScreen: React.FC = () => {
  const { setBooted, setActiveWorkspace } = useOSStore();
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < BOOT_LOGS.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, BOOT_LOGS[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
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
    <div className="fixed inset-0 bg-[#020604] text-[#F1F7F3] flex flex-col justify-between p-6 sm:p-12 z-50 font-mono select-none bg-micro-grid">
      <div className="flex justify-between items-center border-b border-[#42F59B]/20 pb-4">
        <div className="flex items-center space-x-2 text-[#42F59B]">
          <Cpu className="w-5 h-5 animate-pulse" />
          <span className="font-bold tracking-wider text-sm sm:text-base">RACHIT_OS v2.5</span>
        </div>
        <div className="text-xs text-[#9DB2A8] hidden sm:block">
          SYS_STATUS: ONLINE | SECURITY: JWT_ENCRYPTED | LATENCY: 12ms
        </div>
      </div>

      <div className="my-auto max-w-3xl w-full mx-auto space-y-6">
        <div className="text-center space-y-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center p-3 rounded-full bg-[#0A1411] border border-[#42F59B]/30 glow-green-sm mb-2"
          >
            <Shield className="w-10 h-10 text-[#42F59B]" />
          </motion.div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F1F7F3]">
            RACHIT JOSHI <span className="text-[#42F59B]">// PORTFOLIO OS</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#9DB2A8]">
            Backend / Systems / Cloud / AI Experiments
          </p>
        </div>

        <div className="bg-[#050A08] border border-[#42F59B]/20 rounded p-4 h-48 overflow-y-auto text-xs space-y-1 font-mono text-[#8CFFC5]">
          {logs.map((log, idx) => (
            <div key={idx} className="flex space-x-2">
              <span className="text-[#42F59B]">&gt;</span>
              <span>{log}</span>
            </div>
          ))}
          {currentIndex < BOOT_LOGS.length && (
            <div className="text-[#44E8FF] animate-pulse">&gt; Loading system resources...</div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <button
            onClick={() => handleBoot('desktop')}
            className="w-full sm:w-auto px-6 py-3 bg-[#42F59B] text-[#020604] font-bold rounded flex items-center justify-center space-x-2 hover:bg-[#8CFFC5] transition-all glow-green cursor-pointer"
          >
            <span>BOOT PORTFOLIO OS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleBoot('terminal')}
            className="w-full sm:w-auto px-6 py-3 bg-[#0A1411] border border-[#44E8FF]/40 text-[#44E8FF] font-bold rounded flex items-center justify-center space-x-2 hover:bg-[#44E8FF]/10 transition-all cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>TERMINAL MODE [T]</span>
          </button>
        </div>

        <div className="text-center text-xs text-[#9DB2A8] space-x-4">
          <span>Press <kbd className="bg-[#0A1411] border border-[#42F59B]/30 px-1.5 py-0.5 rounded text-[#F1F7F3]">Enter</kbd> to Boot</span>
          <span>•</span>
          <span>Press <kbd className="bg-[#0A1411] border border-[#42F59B]/30 px-1.5 py-0.5 rounded text-[#F1F7F3]">T</kbd> for Terminal</span>
        </div>
      </div>

      <div className="border-t border-[#42F59B]/20 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-[#9DB2A8]">
        <div>VIT Vellore B.Tech IT | CGPA 8.87 | AWS SAA</div>
        <div>Press any button to skip boot sequence</div>
      </div>
    </div>
  );
};
