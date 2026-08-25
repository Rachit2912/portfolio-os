"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, UserCheck, Cpu, ArrowRight, LogIn } from 'lucide-react';
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setBooted, setActiveWorkspace, logoutMessage } = useOSStore();
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background subtle vintage Matrix rain
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ_RACHIT_PORTFOLIO_OS_C++_GO_PYTHON_AWS_GRAPHS_';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 9, 4, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(57, 255, 20, 0.65)';
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className="fixed inset-0 h-screen w-screen bg-[#020904] text-[#E8FFE8] flex flex-col justify-between p-4 sm:p-6 z-50 font-mono select-none bg-micro-grid relative overflow-hidden">
      {/* Active Vintage Matrix Rain Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-65" />

      <div className="relative z-10 flex justify-between items-center border-b border-[#39FF14]/30 pb-3 shrink-0">
        <div className="flex items-center space-x-2 text-[#39FF14]">
          <Cpu className="w-5 h-5 animate-pulse" />
          <span className="font-bold tracking-wider text-sm sm:text-base">RACHIT_PORTFOLIO_OS v2.5</span>
        </div>
        <div className="text-xs text-[#70A080] hidden sm:block">
          SYS_STATUS: ONLINE | SECURITY: JWT_ENCRYPTED | LATENCY: 12ms
        </div>
      </div>

      <div className="relative z-10 max-w-3xl w-full mx-auto space-y-5 my-auto">
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
            <UserCheck className="w-10 h-10 text-[#39FF14]" />
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

      <div className="relative z-10 border-t border-[#39FF14]/20 pt-3 flex flex-col sm:flex-row justify-between items-center text-xs text-[#70A080] shrink-0 mt-auto">
        <div>VIT Vellore B.Tech IT | CGPA 8.87 | AWS Certified Solutions Architect</div>
        <div>Press any button to skip boot sequence</div>
      </div>
    </div>
  );
};
