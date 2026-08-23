"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';
import { CommandRegistry } from './CommandRegistry';

const NEOFETCH_PRE_RUN = (
  <div className="os-panel p-4 border-[#00F0FF] glow-blue-sm space-y-3 font-mono text-xs max-w-xl my-1 bg-[#020A0F]">
    <div className="flex items-center space-x-4 border-b border-[#00F0FF]/30 pb-2">
      <div className="text-[#00F0FF] font-extrabold text-sm tracking-wider text-glow-blue">
        rachit@archlinux-portfolio
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#F0F8FF]">
      <div><span className="text-[#39FF14] font-bold">OS:</span> Arch Linux x86_64</div>
      <div><span className="text-[#39FF14] font-bold">Host:</span> VIT Vellore B.Tech IT</div>
      <div><span className="text-[#39FF14] font-bold">Kernel:</span> 6.8.0-rachit-arch</div>
      <div><span className="text-[#39FF14] font-bold">Uptime:</span> 887 days (CGPA 8.87)</div>
      <div><span className="text-[#39FF14] font-bold">Current Role:</span> SDE Intern @ Hitwicket</div>
      <div><span className="text-[#39FF14] font-bold">Certification:</span> AWS SAA Certified</div>
      <div><span className="text-[#39FF14] font-bold">Shell:</span> shellB C++ custom REPL</div>
      <div><span className="text-[#39FF14] font-bold">LeetCode:</span> Global Rank #408</div>
    </div>

    <div className="pt-2 border-t border-[#00F0FF]/20 text-[11px]">
      <span className="text-[#8DAAC0]">Core Stack: </span>
      <span className="text-[#39FF14] font-semibold">C/C++, Go, Python, Node.js, PostgreSQL, Redis, Docker, AWS</span>
    </div>
  </div>
);

export const TerminalWindow: React.FC = () => {
  const {
    currentPath,
    commandHistory,
    addCommandHistory,
    clearCommandHistory,
    setCurrentPath,
    setActiveWorkspace,
    setSelectedProjectSlug
  } = useOSStore();

  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastInputs, setPastInputs] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandHistory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      clearCommandHistory();
      setInputVal('');
      setHistoryIndex(-1);
      return;
    }

    const res = CommandRegistry.execute(trimmed, currentPath);

    addCommandHistory({
      id: Math.random().toString(36).substring(7),
      command: trimmed,
      output: res.output,
      timestamp: new Date().toLocaleTimeString(),
      isError: res.isError
    });

    if (res.newPath) setCurrentPath(res.newPath);
    if (res.selectedProjectSlug) setSelectedProjectSlug(res.selectedProjectSlug);

    setPastInputs((prev) => [...prev, trimmed]);
    setInputVal('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastInputs.length > 0) {
        const nextIdx = historyIndex === -1 ? pastInputs.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(pastInputs[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= pastInputs.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(pastInputs[nextIdx]);
        }
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#020A0F] border border-[#00F0FF]/40 rounded-lg shadow-2xl overflow-hidden font-mono text-xs">
      {/* Window Header */}
      <div className="bg-[#071520] border-b border-[#00F0FF]/30 px-4 py-2 flex items-center justify-between select-none shrink-0">
        <div className="flex items-center space-x-2 text-[#00F0FF]">
          <TerminalIcon className="w-4 h-4 text-[#39FF14]" />
          <span className="font-bold tracking-wide">rachit@archlinux:{currentPath}$</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] text-[#8DAAC0] hidden sm:inline">Type 'help' for commands</span>
          <button
            onClick={() => setActiveWorkspace('desktop')}
            className="text-[#8DAAC0] hover:text-[#FF2A55] transition-colors p-1 cursor-pointer"
            title="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className="flex-1 p-4 overflow-y-auto space-y-3 font-mono"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Pre-run Arch Linux Neofetch display */}
        <div className="space-y-1 text-[#39FF14]">
          <div className="text-[#00F0FF] font-bold">rachit@archlinux:~$ neofetch</div>
          {NEOFETCH_PRE_RUN}
          <div className="text-[#8DAAC0] text-[11px] pt-1">
            Arch Linux Terminal Ready. Type <span className="text-[#39FF14] font-bold">'help'</span> for list of commands.
          </div>
        </div>

        {commandHistory.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-[#00F0FF] font-bold">rachit@archlinux:{currentPath}$</span>
              <span className="font-bold text-[#39FF14]">{item.command}</span>
            </div>
            {item.output && (
              <div className={`pl-3 ${item.isError ? 'text-[#FF2A55]' : 'text-[#39FF14]'}`}>
                {item.output}
              </div>
            )}
          </div>
        ))}

        {/* Command Input Prompt */}
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 pt-2">
          <span className="text-[#00F0FF] font-bold shrink-0">rachit@archlinux:{currentPath}$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-[#39FF14] font-mono text-xs focus:ring-0"
            placeholder="Type command here..."
            autoFocus
          />
          <button type="submit" className="hidden">Submit</button>
        </form>

        <div ref={bottomRef} />
      </div>
    </div>
  );
};
